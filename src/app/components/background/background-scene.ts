import { Color, Timer, WebGLRenderer } from "three";
import { FullScreenQuad } from "three/examples/jsm/postprocessing/Pass.js";
import { RectSize } from "../../../declarations/types/rect-size.type";
import { getDebounced } from "../../../utilities/get-debounced.utility";
import { isArrayOfLength } from "../../../utilities/is-array-of-length.utility";
import { BackgroundMaterial } from "./background.material";

const EXPECTED_RESIZE_OBSERVER_ENTRIES_COUNT: 1 = 1;
const RESIZE_OBSERVER_ENTRIES_DEBOUNCE_TIME_MILLISECONDS: number = 250;
const REDUCED_MOTION_MEDIA_QUERY: string = "(prefers-reduced-motion: reduce)";
const ACCENT_COLOR_PROPERTY_NAME: string = "--accent-color";
const STROKE_WIDTH: number = 10;
const CELL_SIZE: number = 100;
const MILLISECONDS_PER_SECOND: number = 1000;
const STOPPED_AUTO_MOVEMENT_SPEED_FACTOR: number = 0;
const STOPPED_AUTO_MOVEMENT_DISTANCE_PER_MILLISECOND: number = 0;

interface BackgroundSceneParameters {
  readonly canvas: HTMLCanvasElement;
  readonly host: HTMLElement;
  readonly movementStepDurationMilliseconds: number;
}

interface BackgroundSceneFrame {
  readonly timeStamp: DOMHighResTimeStamp;
  readonly tilt: number;
  readonly autoMovementSpeedFactor: number;
  readonly contentScrollDistance: number;
}

export class BackgroundScene {
  private readonly renderer: WebGLRenderer;

  private readonly material: BackgroundMaterial;

  private readonly quad: FullScreenQuad;

  private readonly resizeObserver: ResizeObserver;

  private readonly timer: Timer = new Timer();

  private readonly reducedMotionMediaQueryList: MediaQueryList = window.matchMedia(
    REDUCED_MOTION_MEDIA_QUERY,
  );

  private readonly autoMovementDistancePerMillisecond: number;

  private autoMovementOffset: number = 0;

  constructor({ canvas, host, movementStepDurationMilliseconds }: BackgroundSceneParameters) {
    this.renderer = new WebGLRenderer({
      powerPreference: "low-power",
      antialias: false,
      stencil: false,
      depth: true,
      canvas,
      alpha: true,
    });

    this.material = new BackgroundMaterial({
      strokeColor: new Color(
        getComputedStyle(canvas.ownerDocument.documentElement)
          .getPropertyValue(ACCENT_COLOR_PROPERTY_NAME)
          .trim(),
      ),
      strokeWidth: STROKE_WIDTH,
      cellSize: CELL_SIZE,
    });
    this.quad = new FullScreenQuad(this.material);

    this.autoMovementDistancePerMillisecond =
      movementStepDurationMilliseconds > 0
        ? CELL_SIZE / movementStepDurationMilliseconds
        : STOPPED_AUTO_MOVEMENT_DISTANCE_PER_MILLISECOND;

    this.timer.connect(canvas.ownerDocument);

    this.resizeObserver = new ResizeObserver(
      getDebounced<ResizeObserverCallback>((entries: ResizeObserverEntry[]) => {
        if (!isArrayOfLength(entries, EXPECTED_RESIZE_OBSERVER_ENTRIES_COUNT)) {
          throw new Error(
            `Expected ResizeObserver to monitor only single element, but looks like it monitors [${entries.length}] elements`,
          );
        }

        this.resize(entries[0].contentRect);
      }, RESIZE_OBSERVER_ENTRIES_DEBOUNCE_TIME_MILLISECONDS),
    );
    this.resizeObserver.observe(host, { box: "border-box" });
    this.resize(host.getBoundingClientRect());
  }

  public renderFrame({
    timeStamp,
    tilt,
    autoMovementSpeedFactor,
    contentScrollDistance,
  }: BackgroundSceneFrame): void {
    this.timer.update(timeStamp);
    this.autoMovementOffset =
      (this.autoMovementOffset +
        this.timer.getDelta() *
          MILLISECONDS_PER_SECOND *
          this.autoMovementDistancePerMillisecond *
          (this.reducedMotionMediaQueryList.matches
            ? STOPPED_AUTO_MOVEMENT_SPEED_FACTOR
            : autoMovementSpeedFactor)) %
      CELL_SIZE;

    this.material.setFrameState({
      tilt,
      gridOffset: (this.autoMovementOffset - contentScrollDistance) % CELL_SIZE,
    });
    this.quad.render(this.renderer);
  }

  public dispose(): void {
    this.resizeObserver.disconnect();
    this.timer.dispose();
    this.quad.dispose();
    this.material.dispose();
    this.renderer.dispose();
  }

  private resize(size: RectSize): void {
    this.renderer.setSize(size.width, size.height);
    this.material.setSize(size);
  }
}
