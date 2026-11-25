import { ErrorHandler } from "@angular/core";
import { MotionValue, motionValue, springValue } from "motion";
import {
  Color,
  FloatType,
  MathUtils,
  NearestFilter,
  RGBAFormat,
  Timer,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
} from "three";
import { FullScreenQuad } from "three/examples/jsm/postprocessing/Pass.js";
import { PointerType } from "../../../declarations/enums/pointer-type.enum";
import { RectSize } from "../../../declarations/types/rect-size.type";
import { getDebounced } from "../../../utilities/get-debounced.utility";
import { isArrayOfLength } from "../../../utilities/is-array-of-length.utility";
import { BackgroundFillMaterial } from "./background-fill.material";
import { BackgroundMaterial } from "./background.material";
import { FILL_STATE_CELL_ROW_COUNT } from "./fill-state-cell-row-count";
import { FILL_STATE_CELLS_PER_TEXEL } from "./fill-state-cells-per-texel";
import { FILL_STATE_COLUMN_COUNT } from "./fill-state-column-count";

const EXPECTED_RESIZE_OBSERVER_ENTRIES_COUNT: 1 = 1;
const RESIZE_OBSERVER_ENTRIES_DEBOUNCE_TIME_MILLISECONDS: number = 250;
const REDUCED_MOTION_MEDIA_QUERY: string = "(prefers-reduced-motion: reduce)";
const ACCENT_COLOR_PROPERTY_NAME: string = "--accent-color";
const FLOAT_COLOR_BUFFER_EXTENSION_NAME: string = "EXT_color_buffer_float";
const STROKE_WIDTH: number = 10;
const CELL_SIZE: number = 100;
const FILL_STATE_REPEAT_DISTANCE: number = CELL_SIZE * FILL_STATE_CELL_ROW_COUNT;
const MILLISECONDS_PER_SECOND: number = 1000;
const STOPPED_AUTO_MOVEMENT_SPEED_FACTOR: number = 0;
const STOPPED_AUTO_MOVEMENT_DISTANCE_PER_MILLISECOND: number = 0;
const TILT_SPRING_STIFFNESS: number = 120;
const TILT_SPRING_DAMPING: number = 14;
const TILT_SPRING_MASS: number = 1;
const NO_POINTER_RELEASE_TIME_STAMP: number = Infinity;

interface BackgroundSceneParameters {
  readonly canvas: HTMLCanvasElement;
  readonly host: HTMLElement;
  readonly movementStepDurationMilliseconds: number;
  readonly cellFillDurationMilliseconds: number;
  readonly cellFadeDurationMilliseconds: number;
  readonly initialTargetTilt: number;
  readonly errorHandler: ErrorHandler;
}

interface BackgroundSceneFrame {
  readonly timeStamp: DOMHighResTimeStamp;
  readonly targetTilt: number;
  readonly autoMovementSpeedFactor: number;
  readonly contentScrollDistance: number;
}

interface ClientPoint {
  readonly clientX: number;
  readonly clientY: number;
}

export class BackgroundScene {
  private readonly renderer: WebGLRenderer;

  private readonly material: BackgroundMaterial;

  private readonly quad: FullScreenQuad;

  private readonly fillMaterial: BackgroundFillMaterial;

  private readonly fillQuad: FullScreenQuad;

  private fillStateSourceTarget: WebGLRenderTarget;

  private fillStateDestinationTarget: WebGLRenderTarget;

  private readonly isFillStateRenderable: boolean;

  private readonly resizeObserver: ResizeObserver;

  private readonly inputListenersController: AbortController = new AbortController();

  private readonly timer: Timer = new Timer();

  private readonly reducedMotionMediaQueryList: MediaQueryList = window.matchMedia(
    REDUCED_MOTION_MEDIA_QUERY,
  );

  private readonly targetTiltMotionValue: MotionValue<number>;

  private readonly springTiltMotionValue: MotionValue<number>;

  private readonly autoMovementDistancePerMillisecond: number;

  private autoMovementOffset: number = 0;

  private readonly pointerPosition: Vector2 = new Vector2();

  private isPointerPresent: boolean = false;

  private pointerReleaseTimeStamp: DOMHighResTimeStamp = NO_POINTER_RELEASE_TIME_STAMP;

  private activeTouchIdentifier: number | null = null;

  constructor({
    canvas,
    host,
    movementStepDurationMilliseconds,
    cellFillDurationMilliseconds,
    cellFadeDurationMilliseconds,
    initialTargetTilt,
    errorHandler,
  }: BackgroundSceneParameters) {
    const ownerDocument: Document = canvas.ownerDocument;

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
        getComputedStyle(ownerDocument.documentElement)
          .getPropertyValue(ACCENT_COLOR_PROPERTY_NAME)
          .trim(),
      ),
      strokeWidth: STROKE_WIDTH,
      cellSize: CELL_SIZE,
    });
    this.quad = new FullScreenQuad(this.material);

    this.fillMaterial = new BackgroundFillMaterial({
      planeUniforms: this.material.planeUniforms,
      cellFillDurationMilliseconds,
      cellFadeDurationMilliseconds,
    });
    this.fillQuad = new FullScreenQuad(this.fillMaterial);

    this.fillStateSourceTarget = new WebGLRenderTarget(
      FILL_STATE_COLUMN_COUNT,
      FILL_STATE_CELL_ROW_COUNT / FILL_STATE_CELLS_PER_TEXEL,
      {
        type: FloatType,
        format: RGBAFormat,
        minFilter: NearestFilter,
        magFilter: NearestFilter,
        depthBuffer: false,
      },
    );
    this.fillStateDestinationTarget = this.fillStateSourceTarget.clone();
    this.renderer.initRenderTarget(this.fillStateSourceTarget);
    this.renderer.initRenderTarget(this.fillStateDestinationTarget);

    this.isFillStateRenderable = this.renderer.extensions.has(FLOAT_COLOR_BUFFER_EXTENSION_NAME);
    if (!this.isFillStateRenderable) {
      errorHandler.handleError(
        new Error(
          `Expected the [${FLOAT_COLOR_BUFFER_EXTENSION_NAME}] WebGL extension to fill grid cells, but the browser does not support it`,
        ),
      );
    }

    this.targetTiltMotionValue = motionValue(initialTargetTilt);
    this.springTiltMotionValue = springValue(this.targetTiltMotionValue, {
      stiffness: TILT_SPRING_STIFFNESS,
      damping: TILT_SPRING_DAMPING,
      mass: TILT_SPRING_MASS,
    });

    this.autoMovementDistancePerMillisecond =
      movementStepDurationMilliseconds > 0
        ? CELL_SIZE / movementStepDurationMilliseconds
        : STOPPED_AUTO_MOVEMENT_DISTANCE_PER_MILLISECOND;

    this.timer.connect(ownerDocument);

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
    this.resize(this.getCanvasBounds());

    const inputListenerOptions: AddEventListenerOptions = {
      passive: true,
      signal: this.inputListenersController.signal,
    };
    window.addEventListener(
      "pointerdown",
      (event: PointerEvent) => this.trackMouseOrPen(event),
      inputListenerOptions,
    );
    window.addEventListener(
      "pointermove",
      (event: PointerEvent) => this.trackMouseOrPen(event),
      inputListenerOptions,
    );
    ownerDocument.addEventListener(
      "pointerout",
      (event: PointerEvent) => {
        if (event.pointerType === PointerType.Touch || event.relatedTarget !== null) {
          return;
        }

        this.isPointerPresent = false;
      },
      inputListenerOptions,
    );
    window.addEventListener(
      "touchstart",
      (event: TouchEvent) => {
        const startedTouch: Touch = event.changedTouches[0];
        this.activeTouchIdentifier = startedTouch.identifier;
        this.trackPointer(startedTouch);
      },
      inputListenerOptions,
    );
    window.addEventListener(
      "touchmove",
      (event: TouchEvent) => {
        const activeTouch: Touch | undefined = this.getActiveTouch(event);
        if (activeTouch === undefined) {
          return;
        }

        this.trackPointer(activeTouch);
      },
      inputListenerOptions,
    );
    window.addEventListener(
      "touchend",
      (event: TouchEvent) => this.releaseActiveTouch(event),
      inputListenerOptions,
    );
    window.addEventListener(
      "touchcancel",
      (event: TouchEvent) => this.releaseActiveTouch(event),
      inputListenerOptions,
    );
  }

  public renderFrame({
    timeStamp,
    targetTilt,
    autoMovementSpeedFactor,
    contentScrollDistance,
  }: BackgroundSceneFrame): void {
    const isReducedMotionPreferred: boolean = this.reducedMotionMediaQueryList.matches;

    this.targetTiltMotionValue.set(targetTilt);

    this.timer.update(timeStamp);
    const elapsedTimeMilliseconds: number = this.timer.getDelta() * MILLISECONDS_PER_SECOND;
    this.autoMovementOffset =
      (this.autoMovementOffset +
        elapsedTimeMilliseconds *
          this.autoMovementDistancePerMillisecond *
          (isReducedMotionPreferred
            ? STOPPED_AUTO_MOVEMENT_SPEED_FACTOR
            : autoMovementSpeedFactor)) %
      FILL_STATE_REPEAT_DISTANCE;
    const gridDistance: number = MathUtils.euclideanModulo(
      this.autoMovementOffset - contentScrollDistance,
      FILL_STATE_REPEAT_DISTANCE,
    );

    this.material.setFrameState({
      tilt: isReducedMotionPreferred ? targetTilt : this.springTiltMotionValue.get(),
      gridOffset: gridDistance % CELL_SIZE,
      rowShift: Math.floor(gridDistance / CELL_SIZE),
      fillState: this.fillStateDestinationTarget.texture,
    });
    this.fillMaterial.setFrameState({
      elapsedTimeMilliseconds,
      isPointerPresent:
        this.isPointerPresent && timeStamp - elapsedTimeMilliseconds < this.pointerReleaseTimeStamp,
      pointerPosition: this.pointerPosition,
      previousFillState: this.fillStateSourceTarget.texture,
    });

    if (this.isFillStateRenderable) {
      this.renderer.setRenderTarget(this.fillStateDestinationTarget);
      this.fillQuad.render(this.renderer);
      this.renderer.setRenderTarget(null);
    }
    this.quad.render(this.renderer);

    [this.fillStateSourceTarget, this.fillStateDestinationTarget] = [
      this.fillStateDestinationTarget,
      this.fillStateSourceTarget,
    ];
  }

  public dispose(): void {
    this.inputListenersController.abort();
    this.resizeObserver.disconnect();
    this.timer.dispose();
    this.springTiltMotionValue.destroy();
    this.targetTiltMotionValue.destroy();
    this.fillQuad.dispose();
    this.fillMaterial.dispose();
    this.fillStateSourceTarget.dispose();
    this.fillStateDestinationTarget.dispose();
    this.quad.dispose();
    this.material.dispose();
    this.renderer.dispose();
  }

  private resize(size: RectSize): void {
    this.renderer.setSize(size.width, size.height);
    this.material.setSize(size);
  }

  private getCanvasBounds(): DOMRect {
    return this.renderer.domElement.getBoundingClientRect();
  }

  private trackMouseOrPen(event: PointerEvent): void {
    if (event.pointerType === PointerType.Touch) {
      return;
    }

    this.trackPointer(event);
  }

  private trackPointer(clientPoint: ClientPoint): void {
    const canvasBounds: DOMRect = this.getCanvasBounds();
    this.pointerPosition.set(
      clientPoint.clientX - canvasBounds.left,
      clientPoint.clientY - canvasBounds.top,
    );
    this.isPointerPresent = true;
    this.pointerReleaseTimeStamp = NO_POINTER_RELEASE_TIME_STAMP;
  }

  private getActiveTouch(event: TouchEvent): Touch | undefined {
    return Array.from(event.changedTouches).find(
      (touch: Touch) => touch.identifier === this.activeTouchIdentifier,
    );
  }

  private releaseActiveTouch(event: TouchEvent): void {
    if (this.getActiveTouch(event) === undefined) {
      return;
    }

    this.pointerReleaseTimeStamp = performance.now();
  }
}
