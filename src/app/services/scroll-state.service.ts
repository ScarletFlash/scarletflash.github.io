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
import { PageDirection } from "../../declarations/enums/page-direction.enum";
import { PageEdge } from "../../declarations/enums/page-edge.enum";
import { RouteDataKey } from "../../declarations/enums/route-data-key.enum";
import { ScrollMeasurement } from "../../declarations/interfaces/scroll-measurement.interface";
import { getClampedValue } from "../../utilities/get-clamped-value.utility";
import { getScrollMeasurement } from "../../utilities/get-scroll-measurement.utility";
import { getScrollingElement } from "../../utilities/get-scrolling-element.utility";
import { isAtPageEnd } from "../../utilities/is-at-page-end.utility";
import { isBackgroundMotion } from "../../utilities/is-background-motion.utility";
import { isNavigationEnd } from "../../utilities/is-navigation-end.utility";
import { isPageDirection } from "../../utilities/is-page-direction.utility";
import { PAGE_START_SCROLL_POSITION } from "../../utilities/page-start-scroll-position";

const MINIMUM_PROGRESS: number = 0;
const MAXIMUM_PROGRESS: number = 1;
const FLOOR_TILT: number = 1;
const FULL_AUTO_MOVEMENT_SPEED_FACTOR: number = 1;
const NO_CONTENT_SCROLL_DISTANCE: number = 0;

@Service({ autoProvided: false })
export class ScrollStateService {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  private readonly router: Router = inject(Router);

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private readonly measurement: WritableSignal<ScrollMeasurement | null> = signal(null);

  private readonly backgroundMotion: Signal<BackgroundMotion> = toSignal(
    this.router.events.pipe(
      filter(isNavigationEnd),
      map(() => this.getPageBackgroundMotion()),
    ),
    { initialValue: this.getPageBackgroundMotion() },
  );

  private readonly navigationDirection: Signal<PageDirection | null> = toSignal(
    this.router.events.pipe(
      filter(isNavigationEnd),
      map((): PageDirection | null => {
        const navigationInformation: unknown = this.router.currentNavigation()?.extras.info;
        if (navigationInformation === undefined) {
          return null;
        }

        if (!isPageDirection(navigationInformation)) {
          throw new Error(
            `Expected the home page navigation information to be a page direction, but got [${navigationInformation}]`,
          );
        }

        return navigationInformation;
      }),
    ),
    { initialValue: null },
  );

  public readonly landingEdge: Signal<PageEdge> = computed(() => {
    const navigationDirection: PageDirection | null = this.navigationDirection();
    if (navigationDirection !== null) {
      return navigationDirection === PageDirection.Previous ? PageEdge.End : PageEdge.Start;
    }

    return this.backgroundMotion() === BackgroundMotion.Closing ? PageEdge.End : PageEdge.Start;
  });

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
    const measurement: ScrollMeasurement = this.observedMeasurement();
    if (isAtPageEnd(measurement)) {
      return MAXIMUM_PROGRESS;
    }

    return getClampedValue({
      value: measurement.scrollPosition / measurement.maximumScrollPosition,
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

  public measure(): void {
    this.measurement.set(getScrollMeasurement());
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
