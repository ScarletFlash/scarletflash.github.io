import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  HostAttributeToken,
  InputSignal,
  PLATFORM_ID,
  Renderer2,
  ViewEncapsulation,
  type WritableSignal,
  afterEveryRender,
  computed,
  inject,
  input,
  signal,
  viewChild,
  type ElementRef,
  type Signal
} from '@angular/core';
import { debounce } from '@tanstack/pacer';
import { TextRouletteAnimatedItemComponent } from '../text-roulette-animated-item/text-roulette-animated-item.component';

const SELECTION_DEBOUNCE_TIME_MILLISECONDS = 100;

interface GetValueByIndexParams {
  source: Signal<string[]>;
  rawIndex: number;
}

interface GetSanitizedIndexParams {
  sourceLength: number;
  rawIndex: number;
}

interface TextRouletteItem {
  readonly id: number;
  readonly text: string;
}

@Component({
  selector: 'app-text-roulette',
  templateUrl: './text-roulette.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [TextRouletteAnimatedItemComponent]
})
export class TextRouletteComponent {
  private valueUpdateIntervalId = NaN;

  private rotationCount = 0;

  public readonly values = input.required<string[]>();

  private readonly currentValueIndex: WritableSignal<number> = signal(0);

  public readonly nextValue: Signal<string> = computed(() =>
    TextRouletteComponent.getValueByIndex({
      source: this.values,
      rawIndex: this.currentValueIndex()
    })
  );

  private readonly dynamicValuesContainer: Signal<ElementRef<HTMLElement>> =
    viewChild.required('dynamicValuesContainer');

  protected readonly currentItem: WritableSignal<TextRouletteItem[]> = signal([]);

  private readonly isSelectionTarget: WritableSignal<boolean> = signal(false);

  private readonly renderer: Renderer2 = inject(Renderer2);

  private readonly debouncedSelectionEventHandler: (event: unknown) => void = debounce(
    (event: unknown) => {
      if (!(event instanceof Event)) {
        throw new Error(`Expected event to be an instance of Event`);
      }

      const currentSelection = window.getSelection();
      if (currentSelection === null || currentSelection.toString() === '') {
        this.isSelectionTarget.set(false);
        return;
      }

      const dynamicValuesContainer = this.dynamicValuesContainer();

      const isContainerSelected = Array.from({ length: currentSelection.rangeCount }, (_: unknown, index: number) =>
        currentSelection.getRangeAt(index)
      ).some((range: Range) => range.intersectsNode(dynamicValuesContainer.nativeElement));

      this.isSelectionTarget.set(isContainerSelected);
    },
    { wait: SELECTION_DEBOUNCE_TIME_MILLISECONDS }
  );

  constructor() {
    const rawSwapFrequencyMs = inject(new HostAttributeToken('swap-frequency'));

    const swapFrequencyMs = Number(rawSwapFrequencyMs);
    if (!Number.isInteger(swapFrequencyMs) || swapFrequencyMs <= 0) {
      throw new Error(`Expected swap-frequency to be a positive integer, but got [${rawSwapFrequencyMs}]`);
    }

    const platformId: object = inject(PLATFORM_ID);
    const destroyRef: DestroyRef = inject(DestroyRef);

    const isInitialized: WritableSignal<boolean> = signal(false);

    afterEveryRender(() => {
      if (!isPlatformBrowser(platformId) || isInitialized()) {
        return;
      }
      isInitialized.set(true);

      const unlistenFromSelectionChanges: VoidFunction = this.renderer.listen(
        'document',
        'selectionchange',
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

  private rotateValues(): void {
    const isSelectionTarget = this.isSelectionTarget();
    if (isSelectionTarget) {
      return;
    }

    const currentValues = this.values();
    const currentValueIndex = this.currentValueIndex();
    this.currentValueIndex.set(
      TextRouletteComponent.getSanitizedIndex({
        sourceLength: currentValues.length,
        rawIndex: currentValueIndex + 1
      })
    );

    this.rotationCount += 1;
    this.currentItem.set([
      {
        id: this.rotationCount,
        text: this.nextValue()
      }
    ]);
  }

  private cleanUpIntervals(): void {
    if (!Number.isNaN(this.valueUpdateIntervalId)) {
      window.clearInterval(this.valueUpdateIntervalId);
      this.valueUpdateIntervalId = NaN;
    }
  }

  private static getValueByIndex({ source, rawIndex }: GetValueByIndexParams): string {
    const values = source();
    const index = TextRouletteComponent.getSanitizedIndex({
      sourceLength: values.length,
      rawIndex
    });

    return values.at(index) ?? '';
  }

  private static getSanitizedIndex({ sourceLength, rawIndex }: GetSanitizedIndexParams): number {
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
