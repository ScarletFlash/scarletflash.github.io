import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
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

const MOVEMENT_STEP_DURATION_ATTRIBUTE_NAME: string = "movement-step-duration";

interface AnimationFrame {
  readonly timestamp: DOMHighResTimeStamp;
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
    const rawMovementStepDurationMilliseconds: string = inject(
      new HostAttributeToken(MOVEMENT_STEP_DURATION_ATTRIBUTE_NAME),
    );

    const movementStepDurationMilliseconds: number = Number(rawMovementStepDurationMilliseconds);
    if (!Number.isInteger(movementStepDurationMilliseconds) || movementStepDurationMilliseconds < 0) {
      throw new Error(
        `Expected ${MOVEMENT_STEP_DURATION_ATTRIBUTE_NAME} to be a non-negative integer, but got [${rawMovementStepDurationMilliseconds}]`,
      );
    }

    const destroyRef: DestroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const backgroundScene: BackgroundScene = new BackgroundScene({
        canvas: this.canvas().nativeElement,
        host: this.componentElementRef.nativeElement,
        movementStepDurationMilliseconds,
      });

      animationFrames()
        .pipe(takeUntilDestroyed(destroyRef))
        .subscribe((animationFrame: AnimationFrame) =>
          backgroundScene.renderFrame({
            timeStamp: animationFrame.timestamp,
            tilt: this.tilt()(),
            autoMovementSpeedFactor: this.autoMovementSpeedFactor()(),
            contentScrollDistance: this.contentScrollDistance()(),
          }),
        );

      destroyRef.onDestroy(() => backgroundScene.dispose());
    });
  }
}
