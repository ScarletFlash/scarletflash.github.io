import { type ErrorHandler } from '@angular/core';
import {
  cubicBezier,
  easeOut,
  interpolate,
  motionValue,
  springValue,
  type EasingFunction,
  type MotionValue,
  type SingleTransformer,
  type SpringOptions
} from 'motion';
import {
  Color,
  FloatType,
  MathUtils,
  NearestFilter,
  Timer,
  Vector2,
  WebGLRenderTarget,
  WebGLRenderer,
  type RenderTargetOptions
} from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { PointerType } from '../../../declarations/enums/pointer-type.enum';
import { type BackgroundPlaneState } from '../../../declarations/interfaces/background-plane-state.interface';
import { type BackgroundWave } from '../../../declarations/interfaces/background-wave.interface';
import { type RectSize } from '../../../declarations/types/rect-size.type';
import { getDebounced } from '../../../utilities/get-debounced.utility';
import { getReducedMotionMediaQueryList } from '../../../utilities/get-reduced-motion-media-query-list.utility';
import { isArrayOfLength } from '../../../utilities/is-array-of-length.utility';
import { BackgroundFillMaterial } from './background-fill.material';
import { BackgroundMaterial } from './background.material';
import { FILL_STATE_CELL_ROW_COUNT } from './fill-state-cell-row-count';
import { FILL_STATE_CELLS_PER_TEXEL } from './fill-state-cells-per-texel';
import { FILL_STATE_COLUMN_COUNT } from './fill-state-column-count';
import { FULL_ENERGY } from './full-energy';
import { NO_ENERGY } from './no-energy';
import { WAVE_SLOT_COUNT } from './wave-slot-count';

const EXPECTED_RESIZE_OBSERVER_ENTRIES_COUNT = 1;
const RESIZE_OBSERVER_ENTRIES_DEBOUNCE_TIME_MILLISECONDS = 250;
const ACCENT_COLOR_PROPERTY_NAME = '--accent-color';
const FLOAT_COLOR_BUFFER_EXTENSION_NAME = 'EXT_color_buffer_float';
const STROKE_WIDTH = 10;
const CELL_SIZE = 100;
const FILL_STATE_REPEAT_DISTANCE = CELL_SIZE * FILL_STATE_CELL_ROW_COUNT;
const FILL_STATE_TEXEL_ROW_COUNT = FILL_STATE_CELL_ROW_COUNT / FILL_STATE_CELLS_PER_TEXEL;
const FILL_STATE_TARGET_OPTIONS: RenderTargetOptions = {
  minFilter: NearestFilter,
  magFilter: NearestFilter,
  depthBuffer: false,
  type: FloatType
};
const MILLISECONDS_PER_SECOND = 1000;
const STOPPED_AUTO_MOVEMENT_SPEED_FACTOR = 0;
const STOPPED_AUTO_MOVEMENT_DISTANCE_PER_MILLISECOND = 0;
const TILT_SPRING_STIFFNESS = 120;
const TILT_SPRING_DAMPING = 14;
const TILT_SPRING_MASS = 1;
const NO_POINTER_RELEASE_TIME_STAMP = Infinity;
const NO_PRESS_START_TIME_STAMP = Infinity;
const PRIMARY_BUTTON = 0;
const NO_PRESS_DURATION_MILLISECONDS = 0;
const CHARGE_EASING: EasingFunction = cubicBezier(0.25, 1, 0.5, 1);
const NO_DENT_STRENGTH = 0;
const FULL_DENT_STRENGTH = 1;
const DENT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 300,
  damping: 12,
  mass: 1
};
const MAXIMUM_FLASHES_PER_SECOND = 3;
const MINIMUM_FLASHING_WAVE_INTERVAL_MILLISECONDS = MILLISECONDS_PER_SECOND / MAXIMUM_FLASHES_PER_SECOND;
const MAXIMUM_NON_FLASHING_WAVE_POWER = 0.35;
const NO_FLASHING_WAVE_TIME_STAMP = -Infinity;
const INITIAL_PLANE_STATE: BackgroundPlaneState = {
  tilt: 0,
  gridOffset: 0,
  rowShift: 0
};

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
  readonly cellWaveFillFadeSpeedFactor: number;
  readonly cellDentDurationMilliseconds: number;
  readonly cellDentRadiusFraction: number;
  readonly cellDentDepth: number;
  readonly cellDentShading: number;
  readonly cellGlowHeightFraction: number;
  readonly cellGlowLeanDegrees: number;
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

  private readonly waveLifetimeMilliseconds: number;

  private readonly resizeObserver: ResizeObserver;

  private readonly inputListenersController = new AbortController();

  private readonly timer = new Timer();

  private readonly reducedMotionMediaQueryList = getReducedMotionMediaQueryList();

  private readonly targetTiltMotionValue: MotionValue<number>;

  private readonly springTiltMotionValue: MotionValue<number>;

  private readonly getChargeLevel: SingleTransformer<number, number>;

  private readonly getDentStrength: SingleTransformer<number, number>;

  private readonly targetDentStrengthMotionValue: MotionValue<number> = motionValue(NO_DENT_STRENGTH);

  private readonly springDentStrengthMotionValue: MotionValue<number> = springValue(
    this.targetDentStrengthMotionValue,
    DENT_SPRING_OPTIONS
  );

  private readonly dentCenter = new Vector2();

  private readonly autoMovementDistancePerMillisecond: number;

  private autoMovementOffset = 0;

  private readonly pointerPosition = new Vector2();

  private isPointerPresent = false;

  private pointerReleaseTimeStamp = NO_POINTER_RELEASE_TIME_STAMP;

  private activeTouchIdentifier: number | null = null;

  private pressStartTimeStamp = NO_PRESS_START_TIME_STAMP;

  private lastFlashingWaveTimeStamp = NO_FLASHING_WAVE_TIME_STAMP;

  private waves: readonly BackgroundWave[] = [];

  private readonly previousPointerPosition = new Vector2();

  private isPreviousPointerPresent = false;

  private lastRenderedPlaneState = INITIAL_PLANE_STATE;

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
    cellWaveFillFadeSpeedFactor,
    cellDentDurationMilliseconds,
    cellDentRadiusFraction,
    cellDentDepth,
    cellDentShading,
    cellGlowHeightFraction,
    cellGlowLeanDegrees,
    initialTargetTilt,
    errorHandler
  }: BackgroundSceneParameters) {
    const ownerDocument = canvas.ownerDocument;
    const waveFillFadeDurationMilliseconds = cellFadeDurationMilliseconds / cellWaveFillFadeSpeedFactor;

    this.renderer = new WebGLRenderer({
      powerPreference: 'low-power',
      antialias: false,
      stencil: false,
      depth: true,
      canvas,
      alpha: true
    });

    this.material = new BackgroundMaterial({
      strokeColor: new Color(
        getComputedStyle(ownerDocument.documentElement).getPropertyValue(ACCENT_COLOR_PROPERTY_NAME).trim()
      ),
      strokeWidth: STROKE_WIDTH,
      cellSize: CELL_SIZE,
      dentDepth: cellDentDepth,
      dentRadiusFraction: cellDentRadiusFraction,
      dentShading: cellDentShading,
      glowHeight: cellGlowHeightFraction * CELL_SIZE,
      glowLeanTangent: Math.tan(MathUtils.degToRad(cellGlowLeanDegrees)),
      waveStepDurationMilliseconds: cellWaveStepDurationMilliseconds,
      waveFadeDurationMilliseconds: cellWaveFadeDurationMilliseconds,
      waveFillFadeDurationMilliseconds,
      waveReachCellCount: cellWaveReachCellCount
    });
    this.quad = new FullScreenQuad(this.material);

    this.fillMaterial = new BackgroundFillMaterial({
      planeUniforms: this.material.planeUniforms,
      pointerUniforms: this.material.pointerUniforms,
      cellFillDurationMilliseconds,
      cellFadeDurationMilliseconds
    });
    this.fillQuad = new FullScreenQuad(this.fillMaterial);

    this.fillStateSourceTarget = new WebGLRenderTarget(
      FILL_STATE_COLUMN_COUNT,
      FILL_STATE_TEXEL_ROW_COUNT,
      FILL_STATE_TARGET_OPTIONS
    );
    this.fillStateDestinationTarget = this.fillStateSourceTarget.clone();
    this.renderer.initRenderTarget(this.fillStateSourceTarget);
    this.renderer.initRenderTarget(this.fillStateDestinationTarget);

    this.isFillStateRenderable = this.renderer.extensions.has(FLOAT_COLOR_BUFFER_EXTENSION_NAME);
    if (!this.isFillStateRenderable) {
      errorHandler.handleError(
        new Error(
          `Expected the [${FLOAT_COLOR_BUFFER_EXTENSION_NAME}] WebGL extension to fill grid cells, but the browser does not support it`
        )
      );
    }

    this.waveLifetimeMilliseconds = Math.max(
      cellWaveReachCellCount * cellWaveStepDurationMilliseconds + cellWaveFadeDurationMilliseconds,
      cellWaveStepDurationMilliseconds + waveFillFadeDurationMilliseconds
    );

    this.targetTiltMotionValue = motionValue(initialTargetTilt);
    this.springTiltMotionValue = springValue(this.targetTiltMotionValue, {
      stiffness: TILT_SPRING_STIFFNESS,
      damping: TILT_SPRING_DAMPING,
      mass: TILT_SPRING_MASS
    });

    this.getChargeLevel = interpolate(
      [NO_PRESS_DURATION_MILLISECONDS, cellChargeDurationMilliseconds],
      [NO_ENERGY, FULL_ENERGY],
      { ease: CHARGE_EASING }
    );
    this.getDentStrength = interpolate(
      [NO_PRESS_DURATION_MILLISECONDS, cellDentDurationMilliseconds],
      [NO_DENT_STRENGTH, FULL_DENT_STRENGTH],
      { ease: easeOut }
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
            `Expected ResizeObserver to monitor only single element, but looks like it monitors [${entries.length}] elements`
          );
        }

        this.resize(entries[0].contentRect);
      }, RESIZE_OBSERVER_ENTRIES_DEBOUNCE_TIME_MILLISECONDS)
    );
    this.resizeObserver.observe(host, { box: 'border-box' });
    this.resize(this.getCanvasBounds());
    this.material.renderEachShaderVariant(() => {
      this.quad.render(this.renderer);
    });
    this.renderer.clear();

    const inputListenerOptions: AddEventListenerOptions = {
      passive: true,
      signal: this.inputListenersController.signal
    };
    window.addEventListener(
      'pointerdown',
      (event: PointerEvent) => {
        this.trackMouseOrPen(event);
      },
      inputListenerOptions
    );
    window.addEventListener(
      'pointermove',
      (event: PointerEvent) => {
        this.trackMouseOrPen(event);
      },
      inputListenerOptions
    );
    ownerDocument.addEventListener(
      'pointerout',
      (event: PointerEvent) => {
        if (event.pointerType === PointerType.Touch || event.relatedTarget !== null) {
          return;
        }

        this.isPointerPresent = false;
      },
      inputListenerOptions
    );
    window.addEventListener(
      'touchstart',
      (event: TouchEvent) => {
        const startedTouch = event.changedTouches[0];
        this.activeTouchIdentifier = startedTouch.identifier;
        this.trackPointer(startedTouch);
      },
      inputListenerOptions
    );
    window.addEventListener(
      'touchmove',
      (event: TouchEvent) => {
        const activeTouch = this.getActiveTouch(event);
        if (activeTouch === undefined) {
          return;
        }

        this.trackPointer(activeTouch);
      },
      inputListenerOptions
    );
    window.addEventListener(
      'touchend',
      (event: TouchEvent) => {
        this.releaseActiveTouch(event);
      },
      inputListenerOptions
    );
    window.addEventListener(
      'touchcancel',
      (event: TouchEvent) => {
        this.releaseActiveTouch(event);
      },
      inputListenerOptions
    );
    window.addEventListener(
      'pointerdown',
      (event: PointerEvent) => {
        if (!event.isPrimary || event.button !== PRIMARY_BUTTON) {
          return;
        }

        this.pressStartTimeStamp = performance.now();
      },
      inputListenerOptions
    );
    window.addEventListener(
      'pointerup',
      (event: PointerEvent) => {
        if (!event.isPrimary || this.pressStartTimeStamp === NO_PRESS_START_TIME_STAMP) {
          return;
        }

        const releaseTimeStamp = performance.now();
        const chargeLevel = this.getChargeLevel(releaseTimeStamp - this.pressStartTimeStamp);
        this.pressStartTimeStamp = NO_PRESS_START_TIME_STAMP;
        if (this.reducedMotionMediaQueryList.matches) {
          return;
        }

        const isFlashingAllowed =
          releaseTimeStamp - this.lastFlashingWaveTimeStamp >= MINIMUM_FLASHING_WAVE_INTERVAL_MILLISECONDS;
        const power = isFlashingAllowed ? chargeLevel : Math.min(chargeLevel, MAXIMUM_NON_FLASHING_WAVE_POWER);
        if (power > MAXIMUM_NON_FLASHING_WAVE_POWER) {
          this.lastFlashingWaveTimeStamp = releaseTimeStamp;
        }

        this.waves = this.waves
          .concat({
            pointerPosition: this.getCanvasPosition(event),
            planeState: this.lastRenderedPlaneState,
            power,
            timeStamp: releaseTimeStamp
          })
          .slice(-WAVE_SLOT_COUNT);
      },
      inputListenerOptions
    );
    window.addEventListener(
      'pointercancel',
      (event: PointerEvent) => {
        if (!event.isPrimary) {
          return;
        }

        this.pressStartTimeStamp = NO_PRESS_START_TIME_STAMP;
      },
      inputListenerOptions
    );
    window.addEventListener(
      'blur',
      () => {
        this.pressStartTimeStamp = NO_PRESS_START_TIME_STAMP;
      },
      inputListenerOptions
    );
  }

  public renderFrame({
    timeStamp,
    targetTilt,
    autoMovementSpeedFactor,
    contentScrollDistance
  }: BackgroundSceneFrame): void {
    const isReducedMotionPreferred = this.reducedMotionMediaQueryList.matches;

    this.targetTiltMotionValue.set(targetTilt);

    this.timer.update(timeStamp);
    const elapsedTimeMilliseconds = this.timer.getDelta() * MILLISECONDS_PER_SECOND;
    this.autoMovementOffset =
      (this.autoMovementOffset +
        elapsedTimeMilliseconds *
          this.autoMovementDistancePerMillisecond *
          (isReducedMotionPreferred ? STOPPED_AUTO_MOVEMENT_SPEED_FACTOR : autoMovementSpeedFactor)) %
      FILL_STATE_REPEAT_DISTANCE;
    const gridDistance = MathUtils.euclideanModulo(
      this.autoMovementOffset - contentScrollDistance,
      FILL_STATE_REPEAT_DISTANCE
    );
    const isPointerPresent =
      this.isPointerPresent && timeStamp - elapsedTimeMilliseconds < this.pointerReleaseTimeStamp;
    const isPressed = this.pressStartTimeStamp !== NO_PRESS_START_TIME_STAMP;
    const pressDurationMilliseconds = isPressed ? timeStamp - this.pressStartTimeStamp : NO_PRESS_DURATION_MILLISECONDS;
    const chargeLevel = this.getChargeLevel(pressDurationMilliseconds);

    this.targetDentStrengthMotionValue.set(this.getDentStrength(pressDurationMilliseconds));
    if (isPressed && isPointerPresent) {
      this.dentCenter.copy(this.pointerPosition);
    }
    this.waves = this.waves.filter(
      (wave: BackgroundWave) => timeStamp - wave.timeStamp < this.waveLifetimeMilliseconds
    );

    const planeState: BackgroundPlaneState = {
      tilt: isReducedMotionPreferred ? targetTilt : this.springTiltMotionValue.get(),
      gridOffset: gridDistance % CELL_SIZE,
      rowShift: Math.floor(gridDistance / CELL_SIZE)
    };

    this.material.setFrameState({
      ...planeState,
      fillState: this.fillStateDestinationTarget.texture,
      dentCenter: this.dentCenter,
      dentStrength: isReducedMotionPreferred ? NO_DENT_STRENGTH : this.springDentStrengthMotionValue.get(),
      isPointerPresent,
      pointerPosition: this.pointerPosition,
      timeStamp,
      chargeLevel,
      chargeHeightLevel: isReducedMotionPreferred ? FULL_ENERGY : chargeLevel,
      waves: this.waves
    });
    this.fillMaterial.setFrameState({
      elapsedTimeMilliseconds,
      previousFillState: this.fillStateSourceTarget.texture,
      isPressed,
      previousPointerPosition: this.previousPointerPosition,
      isPreviousPointerPresent: this.isPreviousPointerPresent,
      previousPlaneState: this.lastRenderedPlaneState
    });

    if (this.isFillStateRenderable) {
      this.renderer.setRenderTarget(this.fillStateDestinationTarget);
      this.fillQuad.render(this.renderer);
    }
    this.renderer.setRenderTarget(null);
    this.quad.render(this.renderer);

    [this.fillStateSourceTarget, this.fillStateDestinationTarget] = [
      this.fillStateDestinationTarget,
      this.fillStateSourceTarget
    ];
    this.previousPointerPosition.copy(this.pointerPosition);
    this.isPreviousPointerPresent = isPointerPresent;
    this.lastRenderedPlaneState = planeState;
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
    const canvasBounds = this.getCanvasBounds();
    return new Vector2(clientPoint.clientX - canvasBounds.left, canvasBounds.bottom - clientPoint.clientY);
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
    return Array.from(event.changedTouches).find((touch: Touch) => touch.identifier === this.activeTouchIdentifier);
  }

  private releaseActiveTouch(event: TouchEvent): void {
    if (this.getActiveTouch(event) === undefined) {
      return;
    }

    this.pointerReleaseTimeStamp = performance.now();
  }
}
