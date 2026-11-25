import { DestroyRef, inject, Service, signal, WritableSignal } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { VectorXYZ, WheelEventState, WheelGestures } from "wheel-gestures";
import { KeyboardKey } from "../../declarations/enums/keyboard-key.enum";
import { PageDirection } from "../../declarations/enums/page-direction.enum";
import { PageNavigationInformation } from "../../declarations/interfaces/page-navigation-information.interface";
import { ScrollMeasurement } from "../../declarations/interfaces/scroll-measurement.interface";
import { getScrollMeasurement } from "../../utilities/get-scroll-measurement.utility";
import { isAtPageEnd } from "../../utilities/is-at-page-end.utility";
import { isAtPageStart } from "../../utilities/is-at-page-start.utility";

const NO_DISTANCE: number = 0;
const TOUCH_PUSH_THRESHOLD_PIXELS: number = 24;
const SINGLE_TOUCH_COUNT: number = 1;
const INTERACTIVE_ELEMENT_SELECTOR: string =
  "a[href], button, input, select, textarea, summary, [contenteditable], [role='button'], [role='link']";
const PAGE_DIRECTION_BY_KEY: ReadonlyMap<string, PageDirection> = new Map<string, PageDirection>([
  [KeyboardKey.ArrowDown, PageDirection.Next],
  [KeyboardKey.PageDown, PageDirection.Next],
  [KeyboardKey.End, PageDirection.Next],
  [KeyboardKey.Space, PageDirection.Next],
  [KeyboardKey.ArrowUp, PageDirection.Previous],
  [KeyboardKey.PageUp, PageDirection.Previous],
  [KeyboardKey.Home, PageDirection.Previous],
]);

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
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private readonly edgePushes: Subject<PageNavigationInformation> =
    new Subject<PageNavigationInformation>();

  public readonly pushes: Observable<PageNavigationInformation> = this.edgePushes.asObservable();

  private readonly activeTouchIdentifier: WritableSignal<number | null> = signal(null);

  private readonly touchEdgeAnchorY: WritableSignal<number | null> = signal(null);

  private readonly isTouchPushConsumed: WritableSignal<boolean> = signal(false);

  private readonly lastTouchSample: WritableSignal<TouchSample | null> = signal(null);

  public observe(): void {
    const abortController: AbortController = new AbortController();
    const listenerOptions: AddEventListenerOptions = {
      passive: true,
      signal: abortController.signal,
    };

    const wheelGestures: ReturnType<typeof WheelGestures> = WheelGestures({
      preventWheelAction: false,
      reverseSign: false,
    });
    const removeWheelGestureListener: VoidFunction = wheelGestures.on(
      "wheel",
      ({ isStart, axisDelta, axisVelocity, event }: WheelEventState) => {
        if (event.ctrlKey === true) {
          return;
        }

        const [, verticalDelta]: VectorXYZ = axisDelta;
        const [, verticalVelocity]: VectorXYZ = axisVelocity;
        const pushedDirection: PageDirection | null = PageEdgeGestureService.getPushedDirection({
          requestedDirection: PageEdgeGestureService.getRequestedDirection(verticalDelta),
          measurement: getScrollMeasurement(),
        });
        if (pushedDirection === null) {
          return;
        }

        this.edgePushes.next({
          direction: pushedDirection,
          velocityPixelsPerMillisecond: isStart ? null : Math.abs(verticalVelocity),
        });
      },
    );
    wheelGestures.observe(window);

    window.addEventListener(
      "touchstart",
      (event: TouchEvent) => {
        const [startedTouch]: readonly Touch[] = Array.from(event.changedTouches);
        if (startedTouch === undefined) {
          throw new Error("Expected a touch start to change at least one touch");
        }

        if (event.touches.length > SINGLE_TOUCH_COUNT) {
          return;
        }

        this.activeTouchIdentifier.set(startedTouch.identifier);
        this.touchEdgeAnchorY.set(null);
        this.isTouchPushConsumed.set(false);
        this.lastTouchSample.set({ clientY: startedTouch.clientY, timeStamp: event.timeStamp });
      },
      listenerOptions,
    );
    window.addEventListener(
      "touchmove",
      (event: TouchEvent) => {
        const activeTouch: Touch | undefined = this.getActiveTouch(event);
        if (activeTouch === undefined || this.isTouchPushConsumed()) {
          return;
        }

        const previousTouchSample: TouchSample | null = this.lastTouchSample();
        if (previousTouchSample === null) {
          throw new Error("Expected a touch start to record the first sample of the active touch");
        }

        this.lastTouchSample.set({ clientY: activeTouch.clientY, timeStamp: event.timeStamp });
        const measurement: ScrollMeasurement = getScrollMeasurement();
        if (!isAtPageStart(measurement) && !isAtPageEnd(measurement)) {
          this.touchEdgeAnchorY.set(null);
          return;
        }

        const anchorY: number = this.touchEdgeAnchorY() ?? activeTouch.clientY;
        this.touchEdgeAnchorY.set(anchorY);
        const pushDistance: number = anchorY - activeTouch.clientY;
        if (Math.abs(pushDistance) < TOUCH_PUSH_THRESHOLD_PIXELS) {
          return;
        }

        const pushedDirection: PageDirection | null = PageEdgeGestureService.getPushedDirection({
          requestedDirection: PageEdgeGestureService.getRequestedDirection(pushDistance),
          measurement,
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
              : null,
        });
      },
      listenerOptions,
    );
    window.addEventListener("touchend", (event: TouchEvent) => this.endTouch(event), listenerOptions);
    window.addEventListener(
      "touchcancel",
      (event: TouchEvent) => this.endTouch(event),
      listenerOptions,
    );

    window.addEventListener(
      "keydown",
      (event: KeyboardEvent) => {
        if (
          event.defaultPrevented ||
          event.repeat ||
          event.altKey ||
          event.ctrlKey ||
          event.metaKey ||
          (event.target instanceof Element &&
            event.target.closest(INTERACTIVE_ELEMENT_SELECTOR) !== null)
        ) {
          return;
        }

        const requestedDirection: PageDirection | null =
          event.key === KeyboardKey.Space && event.shiftKey
            ? PageDirection.Previous
            : (PAGE_DIRECTION_BY_KEY.get(event.key) ?? null);
        const pushedDirection: PageDirection | null = PageEdgeGestureService.getPushedDirection({
          requestedDirection,
          measurement: getScrollMeasurement(),
        });
        if (pushedDirection === null) {
          return;
        }

        event.preventDefault();
        this.edgePushes.next({ direction: pushedDirection, velocityPixelsPerMillisecond: null });
      },
      { signal: abortController.signal },
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
    return Array.from(event.changedTouches).find(
      (touch: Touch) => touch.identifier === this.activeTouchIdentifier(),
    );
  }

  private static getPushedDirection({
    requestedDirection,
    measurement,
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
