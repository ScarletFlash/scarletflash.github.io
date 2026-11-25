import {
  computed,
  DestroyRef,
  inject,
  Service,
  Signal,
  signal,
  WritableSignal,
} from "@angular/core";
import { getClampedValue } from "../../utilities/get-clamped-value.utility";

const LANDING_POINT_TOLERANCE_PIXELS: number = 1;
const MINIMUM_PROGRESS: number = 0;
const MAXIMUM_PROGRESS: number = 1;
const PAGE_START_SCROLL_POSITION: number = 0;
const FLOOR_TILT: number = 1;
const FULL_AUTO_MOVEMENT_SPEED_FACTOR: number = 1;

interface ScrollLayout {
  readonly root: HTMLElement;
  readonly openingPinWrapper: HTMLElement;
  readonly openingSpacer: HTMLElement;
  readonly closingPinWrapper: HTMLElement;
  readonly blockByAddressPath: ReadonlyMap<string, HTMLElement>;
  readonly closingAddressPath: string;
}

interface ScrollMeasurement {
  readonly openingStart: number;
  readonly openingEnd: number;
  readonly closingStart: number;
  readonly scrollHeight: number;
  readonly blockTopByAddressPath: ReadonlyMap<string, number>;
  readonly closingAddressPath: string;
  readonly scrollPosition: number;
  readonly viewportHeight: number;
}

interface GetRangeProgressParameters {
  readonly scrollPosition: number;
  readonly start: number;
  readonly end: number;
}

@Service({ autoProvided: false })
export class ScrollStateService {
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private readonly measurement: WritableSignal<ScrollMeasurement | null> = signal(null);

  private readonly observedMeasurement: Signal<ScrollMeasurement> = computed(() => {
    const measurement: ScrollMeasurement | null = this.measurement();
    if (measurement === null) {
      throw new Error(
        "Expected ScrollStateService.observe to be called before the scroll state is read",
      );
    }

    return measurement;
  });

  private readonly maximumScrollPosition: Signal<number> = computed(() => {
    const { scrollHeight, viewportHeight }: ScrollMeasurement = this.observedMeasurement();

    return Math.max(PAGE_START_SCROLL_POSITION, scrollHeight - viewportHeight);
  });

  private readonly openingTiltProgress: Signal<number> = computed(() => {
    const { scrollPosition, openingStart, openingEnd }: ScrollMeasurement =
      this.observedMeasurement();

    return ScrollStateService.getRangeProgress({
      scrollPosition,
      start: openingStart,
      end: openingEnd,
    });
  });

  private readonly closingTiltProgress: Signal<number> = computed(() => {
    const { scrollPosition, closingStart }: ScrollMeasurement = this.observedMeasurement();

    return ScrollStateService.getRangeProgress({
      scrollPosition,
      start: closingStart,
      end: this.maximumScrollPosition(),
    });
  });

  public readonly tilt: Signal<number> = computed(
    () => FLOOR_TILT - this.openingTiltProgress() - this.closingTiltProgress(),
  );

  public readonly autoMovementSpeedFactor: Signal<number> = computed(
    () => FULL_AUTO_MOVEMENT_SPEED_FACTOR - this.openingTiltProgress(),
  );

  public readonly isOpeningAligned: Signal<boolean> = computed(
    () => this.openingTiltProgress() === MAXIMUM_PROGRESS,
  );

  public readonly contentScrollDistanceAfterAlignment: Signal<number> = computed(() => {
    const { scrollPosition, openingEnd, closingStart }: ScrollMeasurement =
      this.observedMeasurement();

    return getClampedValue({
      value: scrollPosition - openingEnd,
      minimum: 0,
      maximum: closingStart - openingEnd,
    });
  });

  public readonly landingScrollPositionByAddressPath: Signal<ReadonlyMap<string, number>> =
    computed(() => {
      const { blockTopByAddressPath, closingAddressPath }: ScrollMeasurement =
        this.observedMeasurement();

      return new Map<string, number>(
        Array.from(blockTopByAddressPath).concat([
          [closingAddressPath, this.maximumScrollPosition()],
        ]),
      );
    });

  public readonly currentAddressPath: Signal<string> = computed(() => {
    const reachedScrollPosition: number =
      this.observedMeasurement().scrollPosition + LANDING_POINT_TOLERANCE_PIXELS;

    const currentLandingPoint: [string, number] | undefined = Array.from(
      this.landingScrollPositionByAddressPath(),
    )
      .filter(
        ([, landingScrollPosition]: [string, number], landingPointIndex: number) =>
          landingPointIndex === 0 || landingScrollPosition <= reachedScrollPosition,
      )
      .at(-1);
    if (currentLandingPoint === undefined) {
      throw new Error("Expected the scroll layout to have at least one landing point");
    }

    return currentLandingPoint[0];
  });

  public observe(layout: ScrollLayout): void {
    if (this.measurement() !== null) {
      throw new Error("Expected ScrollStateService to observe a single layout");
    }

    this.measure(layout);

    const abortController: AbortController = new AbortController();
    const listenerOptions: AddEventListenerOptions = {
      passive: true,
      signal: abortController.signal,
    };
    window.addEventListener("scroll", () => this.measure(layout), listenerOptions);
    window.addEventListener("resize", () => this.measure(layout), listenerOptions);

    const resizeObserver: ResizeObserver = new ResizeObserver(() => this.measure(layout));
    resizeObserver.observe(layout.root);
    Array.from(layout.root.children).forEach((child: Element) => resizeObserver.observe(child));

    this.destroyRef.onDestroy(() => {
      abortController.abort();
      resizeObserver.disconnect();
    });
  }

  private measure(layout: ScrollLayout): void {
    const scrollingElement: Element | null = document.scrollingElement;
    if (scrollingElement === null) {
      throw new Error("Expected the document to have a scrolling element");
    }

    const openingStart: number = ScrollStateService.getDocumentTop(layout.openingPinWrapper);

    this.measurement.set({
      openingStart,
      openingEnd: openingStart + layout.openingSpacer.getBoundingClientRect().height,
      closingStart: ScrollStateService.getDocumentTop(layout.closingPinWrapper),
      scrollHeight: scrollingElement.scrollHeight,
      blockTopByAddressPath: new Map<string, number>(
        Array.from(layout.blockByAddressPath, ([addressPath, block]: [string, HTMLElement]) => [
          addressPath,
          ScrollStateService.getDocumentTop(block),
        ]),
      ),
      closingAddressPath: layout.closingAddressPath,
      scrollPosition: window.scrollY,
      viewportHeight: window.innerHeight,
    });
  }

  private static getDocumentTop(element: HTMLElement): number {
    return element.getBoundingClientRect().top + window.scrollY;
  }

  private static getRangeProgress({
    scrollPosition,
    start,
    end,
  }: GetRangeProgressParameters): number {
    if (scrollPosition >= end) {
      return MAXIMUM_PROGRESS;
    }

    if (scrollPosition <= start) {
      return MINIMUM_PROGRESS;
    }

    return (scrollPosition - start) / (end - start);
  }
}
