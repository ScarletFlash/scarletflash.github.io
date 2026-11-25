import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  ErrorHandler,
  HostAttributeToken,
  inject,
  input,
  InputSignal,
  Signal,
  viewChild,
  ViewEncapsulation,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { animationFrames } from "rxjs";
import { BackgroundScene } from "./background-scene";

const enum AttributeName {
  MovementStepDuration = "movement-step-duration",
  CellFillDuration = "cell-fill-duration",
  CellFadeDuration = "cell-fade-duration",
}

const MINIMUM_NON_NEGATIVE_INTEGER: number = 0;
const MINIMUM_POSITIVE_INTEGER: number = 1;

interface AnimationFrame {
  readonly timestamp: DOMHighResTimeStamp;
}

interface InjectIntegerAttributeParameters {
  readonly attributeName: AttributeName;
  readonly minimum: number;
  readonly maximum?: number;
}

@Component({
  selector: "app-background",
  templateUrl: "./background.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class BackgroundComponent {
  public readonly tilt: InputSignal<Signal<number>> = input.required<Signal<number>>();

  public readonly autoMovementSpeedFactor: InputSignal<Signal<number>> =
    input.required<Signal<number>>();

  public readonly contentScrollDistance: InputSignal<Signal<number>> =
    input.required<Signal<number>>();

  private readonly canvas: Signal<ElementRef<HTMLCanvasElement>> = viewChild.required("canvas");

  private readonly componentElementRef: ElementRef<HTMLElement> = inject(ElementRef);

  constructor() {
    const movementStepDurationMilliseconds: number = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.MovementStepDuration,
      minimum: MINIMUM_NON_NEGATIVE_INTEGER,
    });
    const cellFillDurationMilliseconds: number = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.CellFillDuration,
      minimum: MINIMUM_POSITIVE_INTEGER,
    });
    const cellFadeDurationMilliseconds: number = BackgroundComponent.injectIntegerAttribute({
      attributeName: AttributeName.CellFadeDuration,
      minimum: MINIMUM_POSITIVE_INTEGER,
    });

    const errorHandler: ErrorHandler = inject(ErrorHandler);
    const destroyRef: DestroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const backgroundScene: BackgroundScene = new BackgroundScene({
        canvas: this.canvas().nativeElement,
        host: this.componentElementRef.nativeElement,
        movementStepDurationMilliseconds,
        cellFillDurationMilliseconds,
        cellFadeDurationMilliseconds,
        initialTargetTilt: this.tilt()(),
        errorHandler,
      });

      animationFrames()
        .pipe(takeUntilDestroyed(destroyRef))
        .subscribe((animationFrame: AnimationFrame) =>
          backgroundScene.renderFrame({
            timeStamp: animationFrame.timestamp,
            targetTilt: this.tilt()(),
            autoMovementSpeedFactor: this.autoMovementSpeedFactor()(),
            contentScrollDistance: this.contentScrollDistance()(),
          }),
        );

      destroyRef.onDestroy(() => backgroundScene.dispose());
    });
  }

  private static injectIntegerAttribute({
    attributeName,
    minimum,
    maximum = Infinity,
  }: InjectIntegerAttributeParameters): number {
    const rawValue: string = inject(new HostAttributeToken(attributeName));
    const value: number = Number(rawValue);
    if (!Number.isInteger(value) || value < minimum || value > maximum) {
      throw new Error(
        `Expected [${attributeName}] to be an integer from [${minimum}] to [${maximum}], but got [${rawValue}]`,
      );
    }

    return value;
  }
}
