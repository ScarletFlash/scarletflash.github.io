import { DestroyRef, Service, inject, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { WheelGestures, type VectorXYZ, type WheelEventState } from 'wheel-gestures';
import { KeyboardKey } from '../../declarations/enums/keyboard-key.enum';
import { PageDirection } from '../../declarations/enums/page-direction.enum';
import { type PageNavigationInformation } from '../../declarations/interfaces/page-navigation-information.interface';
import { type ScrollMeasurement } from '../../declarations/interfaces/scroll-measurement.interface';
import { getScrollMeasurement } from '../../utilities/get-scroll-measurement.utility';
import { isAtPageEnd } from '../../utilities/is-at-page-end.utility';
import { isAtPageStart } from '../../utilities/is-at-page-start.utility';

const NO_DISTANCE = 0;
const TOUCH_PUSH_THRESHOLD_PIXELS = 24;
const SINGLE_TOUCH_COUNT = 1;
const INTERACTIVE_ELEMENT_SELECTOR =
  "a[href], button, input, select, textarea, summary, [contenteditable], [role='button'], [role='link']";
const PAGE_DIRECTION_BY_KEY: ReadonlyMap<string, PageDirection> = new Map<string, PageDirection>([
  [KeyboardKey.ArrowDown, PageDirection.Next],
  [KeyboardKey.PageDown, PageDirection.Next],
  [KeyboardKey.End, PageDirection.Next],
  [KeyboardKey.Space, PageDirection.Next],
  [KeyboardKey.ArrowUp, PageDirection.Previous],
  [KeyboardKey.PageUp, PageDirection.Previous],
  [KeyboardKey.Home, PageDirection.Previous]
]);
const PAGE_DIRECTION_BY_SHIFTED_KEY: ReadonlyMap<string, PageDirection> = new Map<string, PageDirection>(
  Array.from(PAGE_DIRECTION_BY_KEY).concat([[KeyboardKey.Space, PageDirection.Previous]])
);
const BLOCKING_MODIFIER_FLAGS: readonly BlockingModifierFlag[] = ['altKey', 'ctrlKey', 'metaKey'];

type BlockingModifierFlag = keyof Pick<KeyboardEvent, 'altKey' | 'ctrlKey' | 'metaKey'>;

interface TouchSample {
  readonly clientY: number;
  readonly timeStamp: DOMHighResTimeStamp;
}

interface GetPushedDirectionParameters {
  readonly requestedDirection: PageDirection | null;
  readonly measurement: ScrollMeasurement;
}

@Service({ autoProvided: false })
export class PageEdgeGestureService {
  private readonly destroyRef = inject(DestroyRef);

  private readonly edgePushes = new Subject<PageNavigationInformation>();

  public readonly pushes = this.edgePushes.asObservable();

  private readonly activeTouchIdentifier = signal<number | null>(null);

  private readonly touchEdgeAnchorY = signal<number | null>(null);

  private readonly isTouchPushConsumed = signal(false);

  private readonly lastTouchSample = signal<TouchSample | null>(null);

  public observe(): void {
    const abortController = new AbortController();
    const listenerOptions: AddEventListenerOptions = {
      passive: true,
      signal: abortController.signal
    };

    const wheelGestures = WheelGestures({
      preventWheelAction: false,
      reverseSign: false
    });
    const removeWheelGestureListener = wheelGestures.on(
      'wheel',
      ({ isStart, axisDelta, axisVelocity, event }: WheelEventState) => {
        if (event.ctrlKey === true) {
          return;
        }

        const [, verticalDelta]: VectorXYZ = axisDelta;
        const [, verticalVelocity]: VectorXYZ = axisVelocity;
        const pushedDirection = PageEdgeGestureService.getPushedDirection({
          requestedDirection: PageEdgeGestureService.getRequestedDirection(verticalDelta),
          measurement: getScrollMeasurement()
        });
        if (pushedDirection === null) {
          return;
        }

        this.edgePushes.next({
          direction: pushedDirection,
          velocityPixelsPerMillisecond: isStart ? null : Math.abs(verticalVelocity)
        });
      }
    );
    wheelGestures.observe(window);

    window.addEventListener(
      'touchstart',
      (event: TouchEvent) => {
        const [startedTouch]: readonly Touch[] = Array.from(event.changedTouches);
        if (startedTouch === undefined) {
          throw new Error('Expected a touch start to change at least one touch');
        }

        if (event.touches.length > SINGLE_TOUCH_COUNT) {
          return;
        }

        this.activeTouchIdentifier.set(startedTouch.identifier);
        this.touchEdgeAnchorY.set(null);
        this.isTouchPushConsumed.set(false);
        this.lastTouchSample.set({ clientY: startedTouch.clientY, timeStamp: event.timeStamp });
      },
      listenerOptions
    );
    window.addEventListener(
      'touchmove',
      (event: TouchEvent) => {
        const activeTouch = this.getActiveTouch(event);
        if (activeTouch === undefined || this.isTouchPushConsumed()) {
          return;
        }

        const previousTouchSample = this.lastTouchSample();
        if (previousTouchSample === null) {
          throw new Error('Expected a touch start to record the first sample of the active touch');
        }

        this.lastTouchSample.set({ clientY: activeTouch.clientY, timeStamp: event.timeStamp });
        const measurement = getScrollMeasurement();
        if (!isAtPageStart(measurement) && !isAtPageEnd(measurement)) {
          this.touchEdgeAnchorY.set(null);
          return;
        }

        const anchorY = this.touchEdgeAnchorY() ?? activeTouch.clientY;
        this.touchEdgeAnchorY.set(anchorY);
        const pushDistance = anchorY - activeTouch.clientY;
        if (Math.abs(pushDistance) < TOUCH_PUSH_THRESHOLD_PIXELS) {
          return;
        }

        const pushedDirection = PageEdgeGestureService.getPushedDirection({
          requestedDirection: PageEdgeGestureService.getRequestedDirection(pushDistance),
          measurement
        });
        if (pushedDirection === null) {
          return;
        }

        this.isTouchPushConsumed.set(true);
        this.edgePushes.next({
          direction: pushedDirection,
          velocityPixelsPerMillisecond:
            event.timeStamp > previousTouchSample.timeStamp
              ? Math.abs(activeTouch.clientY - previousTouchSample.clientY) /
                (event.timeStamp - previousTouchSample.timeStamp)
              : null
        });
      },
      listenerOptions
    );
    window.addEventListener(
      'touchend',
      (event: TouchEvent) => {
        this.endTouch(event);
      },
      listenerOptions
    );
    window.addEventListener(
      'touchcancel',
      (event: TouchEvent) => {
        this.endTouch(event);
      },
      listenerOptions
    );

    window.addEventListener(
      'keydown',
      (event: KeyboardEvent) => {
        if (
          event.defaultPrevented ||
          event.repeat ||
          BLOCKING_MODIFIER_FLAGS.some((modifierFlag: BlockingModifierFlag) => event[modifierFlag]) ||
          (event.target instanceof Element && event.target.closest(INTERACTIVE_ELEMENT_SELECTOR) !== null)
        ) {
          return;
        }

        const requestedDirection =
          (event.shiftKey ? PAGE_DIRECTION_BY_SHIFTED_KEY : PAGE_DIRECTION_BY_KEY).get(event.key) ?? null;
        const pushedDirection = PageEdgeGestureService.getPushedDirection({
          requestedDirection,
          measurement: getScrollMeasurement()
        });
        if (pushedDirection === null) {
          return;
        }

        event.preventDefault();
        this.edgePushes.next({ direction: pushedDirection, velocityPixelsPerMillisecond: null });
      },
      { signal: abortController.signal }
    );

    this.destroyRef.onDestroy(() => {
      removeWheelGestureListener();
      wheelGestures.disconnect();
      abortController.abort();
      this.edgePushes.complete();
    });
  }

  private endTouch(event: TouchEvent): void {
    if (this.getActiveTouch(event) === undefined) {
      return;
    }

    this.activeTouchIdentifier.set(null);
    this.touchEdgeAnchorY.set(null);
  }

  private getActiveTouch(event: TouchEvent): Touch | undefined {
    return Array.from(event.changedTouches).find((touch: Touch) => touch.identifier === this.activeTouchIdentifier());
  }

  private static getPushedDirection({
    requestedDirection,
    measurement
  }: GetPushedDirectionParameters): PageDirection | null {
    if (requestedDirection === PageDirection.Next && isAtPageEnd(measurement)) {
      return PageDirection.Next;
    }

    if (requestedDirection === PageDirection.Previous && isAtPageStart(measurement)) {
      return PageDirection.Previous;
    }

    return null;
  }

  private static getRequestedDirection(distance: number): PageDirection | null {
    if (distance > NO_DISTANCE) {
      return PageDirection.Next;
    }

    if (distance < NO_DISTANCE) {
      return PageDirection.Previous;
    }

    return null;
  }
}
