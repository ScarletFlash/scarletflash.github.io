import {
  computed,
  DestroyRef,
  inject,
  Service,
  Signal,
  signal,
  WritableSignal,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, map } from "rxjs";
import { BackgroundMotion } from "../../declarations/enums/background-motion.enum";
import { PageEdge } from "../../declarations/enums/page-edge.enum";
import { RouteDataKey } from "../../declarations/enums/route-data-key.enum";
import { ScrollMeasurement } from "../../declarations/interfaces/scroll-measurement.interface";
import { getClampedValue } from "../../utilities/get-clamped-value.utility";
import { getScrollingElement } from "../../utilities/get-scrolling-element.utility";
import { isBackgroundMotion } from "../../utilities/is-background-motion.utility";
import { isNavigationEnd } from "../../utilities/is-navigation-end.utility";

const MINIMUM_PROGRESS: number = 0;
const MAXIMUM_PROGRESS: number = 1;
const FLOOR_TILT: number = 1;
const FULL_AUTO_MOVEMENT_SPEED_FACTOR: number = 1;
const NO_CONTENT_SCROLL_DISTANCE: number = 0;
const PAGE_START_SCROLL_POSITION: number = 0;

@Service({ autoProvided: false })
export class ScrollStateService {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private readonly measurement: WritableSignal<ScrollMeasurement | null> = signal(null);

  private readonly backgroundMotion: Signal<BackgroundMotion> = toSignal(
    inject(Router).events.pipe(
      filter(isNavigationEnd),
      map(() => this.getPageBackgroundMotion()),
    ),
    { initialValue: this.getPageBackgroundMotion() },
  );

  public readonly landingEdge: Signal<PageEdge> = computed(() =>
    this.backgroundMotion() === BackgroundMotion.Closing ? PageEdge.End : PageEdge.Start,
  );

  private readonly observedMeasurement: Signal<ScrollMeasurement> = computed(() => {
    const measurement: ScrollMeasurement | null = this.measurement();
    if (measurement === null) {
      throw new Error(
        "Expected ScrollStateService.observe to be called before the scroll state is read",
      );
    }

    return measurement;
  });

  private readonly pageScrollProgress: Signal<number> = computed(() => {
    const { scrollPosition, maximumScrollPosition }: ScrollMeasurement =
      this.observedMeasurement();
    if (maximumScrollPosition === PAGE_START_SCROLL_POSITION) {
      return MAXIMUM_PROGRESS;
    }

    return getClampedValue({
      value: scrollPosition / maximumScrollPosition,
      minimum: MINIMUM_PROGRESS,
      maximum: MAXIMUM_PROGRESS,
    });
  });

  private readonly openingTiltProgress: Signal<number> = computed(() =>
    this.backgroundMotion() === BackgroundMotion.Opening
      ? this.pageScrollProgress()
      : MAXIMUM_PROGRESS,
  );

  private readonly closingTiltProgress: Signal<number> = computed(() =>
    this.backgroundMotion() === BackgroundMotion.Closing
      ? this.pageScrollProgress()
      : MINIMUM_PROGRESS,
  );

  public readonly tilt: Signal<number> = computed(
    () => FLOOR_TILT - this.openingTiltProgress() - this.closingTiltProgress(),
  );

  public readonly autoMovementSpeedFactor: Signal<number> = computed(
    () => FULL_AUTO_MOVEMENT_SPEED_FACTOR - this.openingTiltProgress(),
  );

  public readonly isOpeningAligned: Signal<boolean> = computed(
    () => this.openingTiltProgress() === MAXIMUM_PROGRESS,
  );

  public readonly contentScrollDistanceAfterAlignment: Signal<number> = computed(() =>
    this.backgroundMotion() === BackgroundMotion.Content
      ? this.observedMeasurement().scrollPosition
      : NO_CONTENT_SCROLL_DISTANCE,
  );

  public observe(): void {
    if (this.measurement() !== null) {
      throw new Error("Expected ScrollStateService to observe the page once");
    }

    this.measure();

    const abortController: AbortController = new AbortController();
    const listenerOptions: AddEventListenerOptions = {
      passive: true,
      signal: abortController.signal,
    };
    window.addEventListener("scroll", () => this.measure(), listenerOptions);
    window.addEventListener("resize", () => this.measure(), listenerOptions);

    const resizeObserver: ResizeObserver = new ResizeObserver(() => this.measure());
    resizeObserver.observe(document.documentElement);

    this.destroyRef.onDestroy(() => {
      abortController.abort();
      resizeObserver.disconnect();
    });
  }

  public scrollToLandingEdge(): void {
    window.scrollTo({
      top:
        this.landingEdge() === PageEdge.End
          ? getScrollingElement().scrollHeight
          : PAGE_START_SCROLL_POSITION,
      behavior: "instant",
    });
  }

  private measure(): void {
    this.measurement.set({
      scrollPosition: window.scrollY,
      maximumScrollPosition: Math.max(
        getScrollingElement().scrollHeight - window.innerHeight,
        PAGE_START_SCROLL_POSITION,
      ),
    });
  }

  private getPageBackgroundMotion(): BackgroundMotion {
    const backgroundMotion: unknown =
      this.activatedRoute.snapshot.firstChild?.data[RouteDataKey.BackgroundMotion];
    if (!isBackgroundMotion(backgroundMotion)) {
      throw new Error(
        `Expected the active home page route to declare its background motion, but got [${backgroundMotion}]`,
      );
    }

    return backgroundMotion;
  }
}
