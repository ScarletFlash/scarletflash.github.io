import { ErrorHandler } from "@angular/core";
import {
  cubicBezier,
  EasingFunction,
  easeOut,
  interpolate,
  MotionValue,
  motionValue,
  SingleTransformer,
  SpringOptions,
  springValue,
} from "motion";
import {
  Color,
  FloatType,
  MathUtils,
  NearestFilter,
  RenderTargetOptions,
  Timer,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
} from "three";
import { FullScreenQuad } from "three/examples/jsm/postprocessing/Pass.js";
import { BackgroundPlaneUniformName } from "../../../declarations/enums/background-plane-uniform-name.enum";
import { PointerType } from "../../../declarations/enums/pointer-type.enum";
import { BackgroundWave } from "../../../declarations/interfaces/background-wave.interface";
import { RectSize } from "../../../declarations/types/rect-size.type";
import { getDebounced } from "../../../utilities/get-debounced.utility";
import { getReducedMotionMediaQueryList } from "../../../utilities/get-reduced-motion-media-query-list.utility";
import { isArrayOfLength } from "../../../utilities/is-array-of-length.utility";
import { BackgroundFillMaterial } from "./background-fill.material";
import { BackgroundWaveMaterial } from "./background-wave.material";
import { BackgroundMaterial } from "./background.material";
import { FILL_STATE_CELL_ROW_COUNT } from "./fill-state-cell-row-count";
import { FILL_STATE_CELLS_PER_TEXEL } from "./fill-state-cells-per-texel";
import { FILL_STATE_COLUMN_COUNT } from "./fill-state-column-count";
import { WAVE_SLOT_COUNT } from "./wave-slot-count";

const EXPECTED_RESIZE_OBSERVER_ENTRIES_COUNT: 1 = 1;
const RESIZE_OBSERVER_ENTRIES_DEBOUNCE_TIME_MILLISECONDS: number = 250;
const ACCENT_COLOR_PROPERTY_NAME: string = "--accent-color";
const FLOAT_COLOR_BUFFER_EXTENSION_NAME: string = "EXT_color_buffer_float";
const WAVE_COLOR: string = "#ffffff";
const STROKE_WIDTH: number = 10;
const CELL_SIZE: number = 100;
const FILL_STATE_REPEAT_DISTANCE: number = CELL_SIZE * FILL_STATE_CELL_ROW_COUNT;
const FILL_STATE_TEXEL_ROW_COUNT: number = FILL_STATE_CELL_ROW_COUNT / FILL_STATE_CELLS_PER_TEXEL;
const CELL_STATE_TARGET_OPTIONS: RenderTargetOptions = {
  minFilter: NearestFilter,
  magFilter: NearestFilter,
  depthBuffer: false,
};
const MILLISECONDS_PER_SECOND: number = 1000;
const STOPPED_AUTO_MOVEMENT_SPEED_FACTOR: number = 0;
const STOPPED_AUTO_MOVEMENT_DISTANCE_PER_MILLISECOND: number = 0;
const TILT_SPRING_STIFFNESS: number = 120;
const TILT_SPRING_DAMPING: number = 14;
const TILT_SPRING_MASS: number = 1;
const NO_POINTER_RELEASE_TIME_STAMP: number = Infinity;
const PRIMARY_BUTTON: number = 0;
const NO_PRESS_DURATION_MILLISECONDS: number = 0;
const NO_CHARGE_LEVEL: number = 0;
const FULL_CHARGE_LEVEL: number = 1;
const CHARGE_EASING: EasingFunction = cubicBezier(0.25, 1, 0.5, 1);
const NO_DENT_STRENGTH: number = 0;
const FULL_DENT_STRENGTH: number = 1;
const DENT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 300,
  damping: 12,
  mass: 1,
};
const MAXIMUM_FLASHES_PER_SECOND: number = 3;
const MINIMUM_FLASHING_WAVE_INTERVAL_MILLISECONDS: number =
  MILLISECONDS_PER_SECOND / MAXIMUM_FLASHES_PER_SECOND;
const MAXIMUM_NON_FLASHING_WAVE_POWER: number = 0.35;
const NO_FLASHING_WAVE_TIME_STAMP: number = -Infinity;

interface BackgroundSceneParameters {
  readonly canvas: HTMLCanvasElement;
  readonly host: HTMLElement;
  readonly movementStepDurationMilliseconds: number;
  readonly cellFillDurationMilliseconds: number;
  readonly cellFadeDurationMilliseconds: number;
  readonly cellChargeDurationMilliseconds: number;
  readonly cellWaveStepDurationMilliseconds: number;
  readonly cellWaveFadeDurationMilliseconds: number;
  readonly cellWaveReachCellCount: number;
  readonly cellWaveBurstRadiusCellCount: number;
  readonly cellWaveBurstBrightness: number;
  readonly cellDentDurationMilliseconds: number;
  readonly cellDentRadiusFraction: number;
  readonly cellDentDepth: number;
  readonly cellDentShading: number;
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

  private readonly waveMaterial: BackgroundWaveMaterial;

  private readonly waveQuad: FullScreenQuad;

  private readonly waveStateTarget: WebGLRenderTarget = new WebGLRenderTarget(
    FILL_STATE_COLUMN_COUNT,
    FILL_STATE_TEXEL_ROW_COUNT,
    CELL_STATE_TARGET_OPTIONS,
  );

  private readonly waveLifetimeMilliseconds: number;

  private readonly resizeObserver: ResizeObserver;

  private readonly inputListenersController: AbortController = new AbortController();

  private readonly timer: Timer = new Timer();

  private readonly reducedMotionMediaQueryList: MediaQueryList = getReducedMotionMediaQueryList();

  private readonly targetTiltMotionValue: MotionValue<number>;

  private readonly springTiltMotionValue: MotionValue<number>;

  private readonly getChargeLevel: SingleTransformer<number, number>;

  private readonly getDentStrength: SingleTransformer<number, number>;

  private readonly targetDentStrengthMotionValue: MotionValue<number> =
    motionValue(NO_DENT_STRENGTH);

  private readonly springDentStrengthMotionValue: MotionValue<number> = springValue(
    this.targetDentStrengthMotionValue,
    DENT_SPRING_OPTIONS,
  );

  private readonly dentCenter: Vector2 = new Vector2();

  private readonly autoMovementDistancePerMillisecond: number;

  private autoMovementOffset: number = 0;

  private readonly pointerPosition: Vector2 = new Vector2();

  private isPointerPresent: boolean = false;

  private pointerReleaseTimeStamp: DOMHighResTimeStamp = NO_POINTER_RELEASE_TIME_STAMP;

  private activeTouchIdentifier: number | null = null;

  private pressStartTimeStamp: DOMHighResTimeStamp | null = null;

  private lastFlashingWaveTimeStamp: DOMHighResTimeStamp = NO_FLASHING_WAVE_TIME_STAMP;

  private waves: readonly BackgroundWave[] = [];

  constructor({
    canvas,
    host,
    movementStepDurationMilliseconds,
    cellFillDurationMilliseconds,
    cellFadeDurationMilliseconds,
    cellChargeDurationMilliseconds,
    cellWaveStepDurationMilliseconds,
    cellWaveFadeDurationMilliseconds,
    cellWaveReachCellCount,
    cellWaveBurstRadiusCellCount,
    cellWaveBurstBrightness,
    cellDentDurationMilliseconds,
    cellDentRadiusFraction,
    cellDentDepth,
    cellDentShading,
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
      waveState: this.waveStateTarget.texture,
      waveColor: new Color(WAVE_COLOR),
      dentDepth: cellDentDepth,
      dentRadiusFraction: cellDentRadiusFraction,
      dentShading: cellDentShading,
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
      FILL_STATE_TEXEL_ROW_COUNT,
      { ...CELL_STATE_TARGET_OPTIONS, type: FloatType },
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

    this.waveMaterial = new BackgroundWaveMaterial({
      planeUniforms: this.material.planeUniforms,
      pointerUniforms: this.fillMaterial.pointerUniforms,
      stepDurationMilliseconds: cellWaveStepDurationMilliseconds,
      fadeDurationMilliseconds: cellWaveFadeDurationMilliseconds,
      reachCellCount: cellWaveReachCellCount,
      burstRadiusCellCount: cellWaveBurstRadiusCellCount,
      burstBrightness: cellWaveBurstBrightness,
    });
    this.waveQuad = new FullScreenQuad(this.waveMaterial);
    this.waveLifetimeMilliseconds =
      cellWaveReachCellCount * cellWaveStepDurationMilliseconds + cellWaveFadeDurationMilliseconds;

    this.targetTiltMotionValue = motionValue(initialTargetTilt);
    this.springTiltMotionValue = springValue(this.targetTiltMotionValue, {
      stiffness: TILT_SPRING_STIFFNESS,
      damping: TILT_SPRING_DAMPING,
      mass: TILT_SPRING_MASS,
    });

    this.getChargeLevel = interpolate(
      [NO_PRESS_DURATION_MILLISECONDS, cellChargeDurationMilliseconds],
      [NO_CHARGE_LEVEL, FULL_CHARGE_LEVEL],
      { ease: CHARGE_EASING },
    );
    this.getDentStrength = interpolate(
      [NO_PRESS_DURATION_MILLISECONDS, cellDentDurationMilliseconds],
      [NO_DENT_STRENGTH, FULL_DENT_STRENGTH],
      { ease: easeOut },
    );

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
    window.addEventListener(
      "pointerdown",
      (event: PointerEvent) => {
        if (!event.isPrimary || event.button !== PRIMARY_BUTTON) {
          return;
        }

        this.pressStartTimeStamp = performance.now();
      },
      inputListenerOptions,
    );
    window.addEventListener(
      "pointerup",
      (event: PointerEvent) => {
        if (!event.isPrimary || this.pressStartTimeStamp === null) {
          return;
        }

        const releaseTimeStamp: DOMHighResTimeStamp = performance.now();
        const chargeLevel: number = this.getChargeLevel(releaseTimeStamp - this.pressStartTimeStamp);
        this.pressStartTimeStamp = null;
        if (this.reducedMotionMediaQueryList.matches) {
          return;
        }

        const isFlashingAllowed: boolean =
          releaseTimeStamp - this.lastFlashingWaveTimeStamp >=
          MINIMUM_FLASHING_WAVE_INTERVAL_MILLISECONDS;
        const power: number = isFlashingAllowed
          ? chargeLevel
          : Math.min(chargeLevel, MAXIMUM_NON_FLASHING_WAVE_POWER);
        if (power > MAXIMUM_NON_FLASHING_WAVE_POWER) {
          this.lastFlashingWaveTimeStamp = releaseTimeStamp;
        }

        this.waves = this.waves
          .concat({
            pointerPosition: this.getCanvasPosition(event),
            planeState: {
              tilt: this.material.planeUniforms[BackgroundPlaneUniformName.Tilt].value,
              gridOffset: this.material.planeUniforms[BackgroundPlaneUniformName.GridOffset].value,
              rowShift: this.material.planeUniforms[BackgroundPlaneUniformName.RowShift].value,
            },
            power,
            timeStamp: releaseTimeStamp,
          })
          .slice(-WAVE_SLOT_COUNT);
      },
      inputListenerOptions,
    );
    window.addEventListener(
      "pointercancel",
      (event: PointerEvent) => {
        if (!event.isPrimary) {
          return;
        }

        this.pressStartTimeStamp = null;
      },
      inputListenerOptions,
    );
    window.addEventListener(
      "blur",
      () => {
        this.pressStartTimeStamp = null;
      },
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
    const isPointerPresent: boolean =
      this.isPointerPresent && timeStamp - elapsedTimeMilliseconds < this.pointerReleaseTimeStamp;
    const pressDurationMilliseconds: number =
      this.pressStartTimeStamp === null
        ? NO_PRESS_DURATION_MILLISECONDS
        : timeStamp - this.pressStartTimeStamp;

    this.targetDentStrengthMotionValue.set(this.getDentStrength(pressDurationMilliseconds));
    if (this.pressStartTimeStamp !== null && isPointerPresent) {
      this.dentCenter.copy(this.pointerPosition);
    }
    this.waves = this.waves.filter(
      (wave: BackgroundWave) => timeStamp - wave.timeStamp < this.waveLifetimeMilliseconds,
    );

    this.material.setFrameState({
      tilt: isReducedMotionPreferred ? targetTilt : this.springTiltMotionValue.get(),
      gridOffset: gridDistance % CELL_SIZE,
      rowShift: Math.floor(gridDistance / CELL_SIZE),
      fillState: this.fillStateDestinationTarget.texture,
      dentCenter: this.dentCenter,
      dentStrength: isReducedMotionPreferred
        ? NO_DENT_STRENGTH
        : this.springDentStrengthMotionValue.get(),
    });
    this.fillMaterial.setFrameState({
      elapsedTimeMilliseconds,
      isPointerPresent,
      pointerPosition: this.pointerPosition,
      previousFillState: this.fillStateSourceTarget.texture,
    });
    this.waveMaterial.setFrameState({
      timeStamp,
      chargeLevel: this.getChargeLevel(pressDurationMilliseconds),
      waves: this.waves,
    });

    if (this.isFillStateRenderable) {
      this.renderer.setRenderTarget(this.fillStateDestinationTarget);
      this.fillQuad.render(this.renderer);
    }
    this.renderer.setRenderTarget(this.waveStateTarget);
    this.waveQuad.render(this.renderer);
    this.renderer.setRenderTarget(null);
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
    this.springDentStrengthMotionValue.destroy();
    this.targetDentStrengthMotionValue.destroy();
    this.fillQuad.dispose();
    this.fillMaterial.dispose();
    this.fillStateSourceTarget.dispose();
    this.fillStateDestinationTarget.dispose();
    this.waveQuad.dispose();
    this.waveMaterial.dispose();
    this.waveStateTarget.dispose();
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

  private getCanvasPosition(clientPoint: ClientPoint): Vector2 {
    const canvasBounds: DOMRect = this.getCanvasBounds();
    return new Vector2(
      clientPoint.clientX - canvasBounds.left,
      canvasBounds.bottom - clientPoint.clientY,
    );
  }

  private trackMouseOrPen(event: PointerEvent): void {
    if (event.pointerType === PointerType.Touch) {
      return;
    }

    this.trackPointer(event);
  }

  private trackPointer(clientPoint: ClientPoint): void {
    this.pointerPosition.copy(this.getCanvasPosition(clientPoint));
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
