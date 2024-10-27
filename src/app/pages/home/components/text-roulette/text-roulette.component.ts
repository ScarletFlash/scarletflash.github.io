import { isPlatformBrowser } from "@angular/common";
import {
  afterRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  HostAttributeToken,
  inject,
  input,
  InputSignal,
  PLATFORM_ID,
  Renderer2,
  signal,
  Signal,
  viewChild,
  ViewContainerRef,
  ViewEncapsulation,
  WritableSignal,
} from "@angular/core";
import { getDebounced } from "../../../../../utilities/get-debounced.utility";
import { TextRouletteAnimatedItemComponent } from "../text-roulette-animated-item/text-roulette-animated-item.component";

const SELECTION_DEBOUNCE_TIME_MS: number = 100;

interface GetValueByIndexParams {
  source: Signal<string[]>;
  rawIndex: number;
}

interface GetSanitizedIndexParams {
  sourceLength: number;
  rawIndex: number;
}

@Component({
  selector: "app-text-roulette",
  standalone: true,
  imports: [TextRouletteAnimatedItemComponent],
  templateUrl: "./text-roulette.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextRouletteComponent {
  private valueUpdateIntervalId: number = NaN;

  public readonly values: InputSignal<string[]> = input.required<string[]>();

  private readonly currentValueIndex: WritableSignal<number> = signal(0);

  public readonly nextValue: Signal<string> = computed(() =>
    TextRouletteComponent.getValueByIndex({
      source: this.values,
      rawIndex: this.currentValueIndex() + 1,
    })
  );

  private readonly dynamicValuesContainer: Signal<ElementRef<HTMLElement>> =
    viewChild.required("dynamicValuesContainer");

  private readonly insertPoint: Signal<ViewContainerRef> = viewChild.required(
    "insertPoint",
    {
      read: ViewContainerRef,
    }
  );

  private readonly isSelectionTarget: WritableSignal<boolean> = signal(false);

  private readonly renderer: Renderer2 = inject(Renderer2);

  constructor() {
    const rawSwapFrequencyMs: string = inject(
      new HostAttributeToken("swap-frequency")
    );

    const swapFrequencyMs: number = Number(rawSwapFrequencyMs);
    if (!Number.isInteger(swapFrequencyMs) || swapFrequencyMs <= 0) {
      throw new Error(
        `Expected swap-frequency to be a positive integer, but got [${rawSwapFrequencyMs}]`
      );
    }

    const platformId: Object = inject(PLATFORM_ID);
    const destroyRef: DestroyRef = inject(DestroyRef);

    const isInitialized: WritableSignal<boolean> = signal(false);

    afterRender(() => {
      if (!isPlatformBrowser(platformId) || isInitialized()) {
        return;
      }
      isInitialized.set(true);

      const unlistenFromSelectionChanges: VoidFunction = this.renderer.listen(
        "document",
        "selectionchange",
        this.debouncedSelectionEventHandler
      );

      this.rotateValues();
      this.valueUpdateIntervalId = window.setInterval(() => {
        this.rotateValues();
      }, swapFrequencyMs);

      destroyRef.onDestroy(() => {
        unlistenFromSelectionChanges();
        this.cleanUpIntervals();
      });
    });
  }

  private readonly debouncedSelectionEventHandler: (event: unknown) => void =
    getDebounced((event: unknown) => {
      if (!(event instanceof Event)) {
        throw new Error(`Expected event to be an instance of Event`);
      }

      const currentSelection: Selection | null = window.getSelection();
      if (currentSelection === null || currentSelection.toString() === "") {
        this.isSelectionTarget.set(false);
        return;
      }

      const dynamicValuesContainer: ElementRef<HTMLElement> =
        this.dynamicValuesContainer();

      const isContainerSelected: boolean = Array.from(
        { length: currentSelection.rangeCount },
        (_: unknown, index: number) => currentSelection.getRangeAt(index)
      ).some((range: Range) =>
        range.intersectsNode(dynamicValuesContainer.nativeElement)
      );

      this.isSelectionTarget.set(isContainerSelected);
    }, SELECTION_DEBOUNCE_TIME_MS);

  private rotateValues(): void {
    const isSelectionTarget: boolean = this.isSelectionTarget();
    if (isSelectionTarget) {
      return;
    }

    const currentValues: string[] = this.values();
    const currentValueIndex: number = this.currentValueIndex();
    this.currentValueIndex.set(
      TextRouletteComponent.getSanitizedIndex({
        sourceLength: currentValues.length,
        rawIndex: currentValueIndex + 1,
      })
    );

    const viewContainerRef: ViewContainerRef = this.insertPoint();
    viewContainerRef.clear();

    viewContainerRef.createComponent(TextRouletteAnimatedItemComponent, {
      projectableNodes: [[this.renderer.createText(this.nextValue())]],
    });
  }

  private cleanUpIntervals(): void {
    if (!Number.isNaN(this.valueUpdateIntervalId)) {
      window.clearInterval(this.valueUpdateIntervalId);
      this.valueUpdateIntervalId = NaN;
    }
  }

  private static getValueByIndex({
    source,
    rawIndex,
  }: GetValueByIndexParams): string {
    const values: string[] = source();
    const index: number = TextRouletteComponent.getSanitizedIndex({
      sourceLength: values.length,
      rawIndex,
    });

    return values.at(index) ?? "";
  }

  private static getSanitizedIndex({
    sourceLength,
    rawIndex,
  }: GetSanitizedIndexParams): number {
    if (!Number.isInteger(rawIndex) || !Number.isInteger(sourceLength)) {
      throw new Error(
        `Expected rawIndex and sourceLength to be integers, but got rawIndex: [${rawIndex}] and sourceLength: [${sourceLength}]`
      );
    }

    if (rawIndex >= sourceLength) {
      return rawIndex % sourceLength;
    }

    if (rawIndex < 0) {
      return sourceLength + rawIndex;
    }

    return rawIndex;
  }
}
