import { isPlatformBrowser } from "@angular/common";
import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostAttributeToken,
  inject,
  PLATFORM_ID,
  Signal,
  signal,
  viewChild,
  ViewEncapsulation,
  WritableSignal,
} from "@angular/core";
import { Color, WebGLRenderer } from "three";
import { FullScreenQuad } from "three/examples/jsm/postprocessing/Pass.js";
import { RectSize } from "../../../declarations/types/rect-size.type";
import { getDebounced } from "../../../utilities/get-debounced.utility";
import { isArrayOfLength } from "../../../utilities/is-array-of-length.utility";
import { BackgroundMaterial } from "./background.material";

const EXPECTED_RESIZE_OBSERVER_ENTRIES_COUNT: 1 = 1;
const RESIZE_OBSERVER_ENTRIES_DEBOUNCE_TIME_MS: number = 250;

@Component({
  selector: "app-background",
  standalone: true,
  imports: [],
  templateUrl: "./background.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {
  private readonly canvas: Signal<ElementRef<HTMLCanvasElement>> =
    viewChild.required("canvas");

  private readonly animationFrameId: WritableSignal<number> = signal(NaN);

  private readonly componentElementRef: ElementRef<HTMLElement> =
    inject(ElementRef);

  constructor() {
    const rawMovementStepDurationMs: string = inject(
      new HostAttributeToken("movement-step-duration")
    );

    const movementStepDurationMs: number = Number(rawMovementStepDurationMs);
    if (
      !Number.isInteger(movementStepDurationMs) ||
      movementStepDurationMs <= 0
    ) {
      throw new Error(
        `Expected grid-movement-speed to be a positive integer, but got [${rawMovementStepDurationMs}]`
      );
    }

    const platformId: Object = inject(PLATFORM_ID);
    const destroyRef: DestroyRef = inject(DestroyRef);

    const isInitialized: WritableSignal<boolean> = signal(false);
    const resizeObserver: WritableSignal<ResizeObserver | null> = signal(null);

    afterRender(() => {
      if (!isPlatformBrowser(platformId) || isInitialized()) {
        return;
      }
      isInitialized.set(true);

      const renderer = new WebGLRenderer({
        powerPreference: "low-power",
        antialias: false,
        stencil: false,
        depth: true,
        canvas: this.canvas().nativeElement,
        alpha: true,
      });

      const fullScreenMaterial: BackgroundMaterial = new BackgroundMaterial({
        movementStepDurationMs,
        strokeColor: new Color(0xff0000),
        strokeWidth: 10,
        cellSize: 100,
      });
      const fullScreenQuad: FullScreenQuad = new FullScreenQuad(
        fullScreenMaterial
      );

      if (resizeObserver() === null) {
        const resizeObserverInstance: ResizeObserver = new ResizeObserver(
          getDebounced<ResizeObserverCallback>(
            (entries: ResizeObserverEntry[]) => {
              BackgroundComponent.failOnInvalidResizeObserverEntries(entries);
              const [canvasResizeEntry]: [ResizeObserverEntry] = entries;
              const { width, height }: RectSize = canvasResizeEntry.contentRect;
              renderer.setSize(width, height);
              fullScreenMaterial.setSize({ width, height });
            },
            RESIZE_OBSERVER_ENTRIES_DEBOUNCE_TIME_MS
          )
        );
        resizeObserver.set(resizeObserverInstance);

        const canvas: HTMLElement = this.componentElementRef.nativeElement;
        resizeObserverInstance.observe(canvas, {
          box: "border-box",
        });

        const { width, height }: RectSize = canvas.getBoundingClientRect();
        renderer.setSize(width, height);
        fullScreenMaterial.setSize({ width, height });
      }

      const animate: FrameRequestCallback = (
        frameTimeStamp: DOMHighResTimeStamp
      ) => {
        fullScreenMaterial.setFrameTimeStamp(frameTimeStamp);
        const animationFrameId: number = requestAnimationFrame(animate);
        this.animationFrameId.set(animationFrameId);
        fullScreenQuad.render(renderer);
      };
      animate(0);

      destroyRef.onDestroy(() => {
        cancelAnimationFrame(this.animationFrameId());
        this.animationFrameId.set(NaN);

        renderer.dispose();

        const resizeObserverInstance: ResizeObserver | null = resizeObserver();
        if (resizeObserverInstance !== null) {
          resizeObserverInstance.disconnect();
          resizeObserver.set(null);
        }
      });
    });
  }

  private static failOnInvalidResizeObserverEntries(
    entries: ResizeObserverEntry[]
  ): asserts entries is [ResizeObserverEntry] {
    if (isArrayOfLength(entries, EXPECTED_RESIZE_OBSERVER_ENTRIES_COUNT)) {
      return;
    }
    throw new Error(
      `Expected ResizeObserver to monitor only single element, but looks like it monitors [${entries.length}] elements`
    );
  }
}
