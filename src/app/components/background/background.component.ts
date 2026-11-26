import {
  Component,
  DestroyRef,
  ElementRef,
  ErrorHandler,
  HostAttributeToken,
  ViewEncapsulation,
  afterNextRender,
  inject,
  input,
  viewChild,
  type Signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { animationFrames } from 'rxjs';
import { BackgroundScene } from './background-scene';

const enum AttributeName {
  MovementStepDuration = 'movement-step-duration',
  CellFillDuration = 'cell-fill-duration',
  CellFadeDuration = 'cell-fade-duration',
  CellChargeDuration = 'cell-charge-duration',
  CellWaveStepDuration = 'cell-wave-step-duration',
  CellWaveFadeDuration = 'cell-wave-fade-duration',
  CellWaveReach = 'cell-wave-reach',
  CellWaveFillFadeSpeed = 'cell-wave-fill-fade-speed',
  CellDentDuration = 'cell-dent-duration',
  CellDentRadius = 'cell-dent-radius',
  CellDentDepth = 'cell-dent-depth',
  CellDentShading = 'cell-dent-shading',
  CellGlowHeight = 'cell-glow-height',
  CellGlowLean = 'cell-glow-lean'
}

const MINIMUM_NON_NEGATIVE_INTEGER = 0;
const MINIMUM_POSITIVE_INTEGER = 1;
const FULL_PERCENT = 100;
const UNLIMITED_PERCENT = Infinity;
const MAXIMUM_ACUTE_ANGLE_DEGREES = 89;

interface AnimationFrame {
  readonly timestamp: DOMHighResTimeStamp;
}

interface InjectIntegerAttributeParameters {
  readonly attributeName: AttributeName;
  readonly minimum: number;
  readonly maximum?: number;
}

interface InjectPercentAttributeParameters {
  readonly attributeName: AttributeName;
  readonly maximumPercent?: number;
}

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BackgroundComponent {
  public readonly tilt = input.required<Signal<number>>();

  public readonly autoMovementSpeedFactor = input.required<Signal<number>>();

  public readonly contentScrollDistance = input.required<Signal<number>>();

  private readonly canvas: Signal<ElementRef<HTMLCanvasElement>> = viewChild.required('canvas');

  private readonly componentElementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    const movementStepDurationMilliseconds = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.MovementStepDuration,
      minimum: MINIMUM_NON_NEGATIVE_INTEGER
    });
    const cellFillDurationMilliseconds = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.CellFillDuration,
      minimum: MINIMUM_POSITIVE_INTEGER
    });
    const cellFadeDurationMilliseconds = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.CellFadeDuration,
      minimum: MINIMUM_POSITIVE_INTEGER
    });
    const cellChargeDurationMilliseconds = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.CellChargeDuration,
      minimum: MINIMUM_POSITIVE_INTEGER
    });
    const cellWaveStepDurationMilliseconds = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.CellWaveStepDuration,
      minimum: MINIMUM_POSITIVE_INTEGER
    });
    const cellWaveFadeDurationMilliseconds = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.CellWaveFadeDuration,
      minimum: MINIMUM_POSITIVE_INTEGER
    });
    const cellWaveReachCellCount = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.CellWaveReach,
      minimum: MINIMUM_POSITIVE_INTEGER
    });
    const cellWaveFillFadeSpeedFactor = BackgroundComponent.injectPercentAttribute({
      attributeName: AttributeName.CellWaveFillFadeSpeed,
      maximumPercent: UNLIMITED_PERCENT
    });
    const cellDentDurationMilliseconds = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.CellDentDuration,
      minimum: MINIMUM_POSITIVE_INTEGER
    });
    const cellDentRadiusFraction = BackgroundComponent.injectPercentAttribute({
      attributeName: AttributeName.CellDentRadius
    });
    const cellDentDepth = BackgroundComponent.injectPercentAttribute({
      attributeName: AttributeName.CellDentDepth
    });
    const cellDentShading = BackgroundComponent.injectPercentAttribute({
      attributeName: AttributeName.CellDentShading
    });
    const cellGlowHeightFraction = BackgroundComponent.injectPercentAttribute({
      attributeName: AttributeName.CellGlowHeight,
      maximumPercent: UNLIMITED_PERCENT
    });
    const cellGlowLeanDegrees = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.CellGlowLean,
      minimum: MINIMUM_POSITIVE_INTEGER,
      maximum: MAXIMUM_ACUTE_ANGLE_DEGREES
    });

    const errorHandler: ErrorHandler = inject(ErrorHandler);
    const destroyRef: DestroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const backgroundScene = new BackgroundScene({
        canvas: this.canvas().nativeElement,
        host: this.componentElementRef.nativeElement,
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
        initialTargetTilt: this.tilt()(),
        errorHandler
      });

      animationFrames()
        .pipe(takeUntilDestroyed(destroyRef))
        .subscribe((animationFrame: AnimationFrame) => {
          backgroundScene.renderFrame({
            timeStamp: animationFrame.timestamp,
            targetTilt: this.tilt()(),
            autoMovementSpeedFactor: this.autoMovementSpeedFactor()(),
            contentScrollDistance: this.contentScrollDistance()()
          });
        });

      destroyRef.onDestroy(() => {
        backgroundScene.dispose();
      });
    });
  }

  private static injectIntegerAttribute({
    attributeName,
    minimum,
    maximum = Infinity
  }: InjectIntegerAttributeParameters): number {
    const rawValue = inject(new HostAttributeToken(attributeName));
    const value = Number(rawValue);
    if (!Number.isInteger(value) || value < minimum || value > maximum) {
      throw new Error(
        `Expected [${attributeName}] to be an integer from [${minimum}] to [${maximum}], but got [${rawValue}]`
      );
    }

    return value;
  }

  private static injectPercentAttribute({
    attributeName,
    maximumPercent = FULL_PERCENT
  }: InjectPercentAttributeParameters): number {
    return (
      BackgroundComponent.injectIntegerAttribute({
        attributeName,
        minimum: MINIMUM_POSITIVE_INTEGER,
        maximum: maximumPercent
      }) / FULL_PERCENT
    );
  }
}
