import { DestroyRef, Service, computed, inject, signal, type Signal, type WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BackgroundMotion } from '../../declarations/enums/background-motion.enum';
import { PageDirection } from '../../declarations/enums/page-direction.enum';
import { PageEdge } from '../../declarations/enums/page-edge.enum';
import { RouteDataKey } from '../../declarations/enums/route-data-key.enum';
import { type ScrollMeasurement } from '../../declarations/interfaces/scroll-measurement.interface';
import { getClampedValue } from '../../utilities/get-clamped-value.utility';
import { getPageNavigationInformation } from '../../utilities/get-page-navigation-information.utility';
import { getPageSlideDistance } from '../../utilities/get-page-slide-distance.utility';
import { getScrollMeasurement } from '../../utilities/get-scroll-measurement.utility';
import { getScrollingElement } from '../../utilities/get-scrolling-element.utility';
import { isAtPageEnd } from '../../utilities/is-at-page-end.utility';
import { isBackgroundMotion } from '../../utilities/is-background-motion.utility';
import { isNavigationEnd } from '../../utilities/is-navigation-end.utility';
import { PAGE_START_SCROLL_POSITION } from '../../utilities/page-start-scroll-position';

const MINIMUM_PROGRESS = 0;
const MAXIMUM_PROGRESS = 1;
const FLOOR_TILT = 1;
const FULL_AUTO_MOVEMENT_SPEED_FACTOR = 1;
const NO_CONTENT_SCROLL_DISTANCE = 0;
const NO_PAGE_SLIDE_DISTANCE = 0;

@Service({ autoProvided: false })
export class ScrollStateService {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  private readonly router: Router = inject(Router);

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private readonly measurement: WritableSignal<ScrollMeasurement | null> = signal(null);

  private readonly backgroundMotion: WritableSignal<BackgroundMotion> = signal(this.getPageBackgroundMotion());

  private readonly navigationDirection: WritableSignal<PageDirection | null> = signal(null);

  private readonly landingContentScrollDistance: WritableSignal<number> = signal(NO_CONTENT_SCROLL_DISTANCE);

  public readonly landingEdge: Signal<PageEdge> = computed(() => {
    const navigationDirection = this.navigationDirection();
    if (navigationDirection !== null) {
      return navigationDirection === PageDirection.Previous ? PageEdge.End : PageEdge.Start;
    }

    return this.backgroundMotion() === BackgroundMotion.Closing ? PageEdge.End : PageEdge.Start;
  });

  private readonly observedMeasurement: Signal<ScrollMeasurement> = computed(() => {
    const measurement = this.measurement();
    if (measurement === null) {
      throw new Error('Expected ScrollStateService.observe to be called before the scroll state is read');
    }

    return measurement;
  });

  private readonly landingScrollPosition: Signal<number> = computed(() =>
    this.landingEdge() === PageEdge.End ? this.observedMeasurement().maximumScrollPosition : PAGE_START_SCROLL_POSITION
  );

  private readonly pageScrollProgress: Signal<number> = computed(() => {
    const measurement = this.observedMeasurement();
    if (isAtPageEnd(measurement)) {
      return MAXIMUM_PROGRESS;
    }

    return getClampedValue({
      value: measurement.scrollPosition / measurement.maximumScrollPosition,
      minimum: MINIMUM_PROGRESS,
      maximum: MAXIMUM_PROGRESS
    });
  });

  private readonly openingTiltProgress: Signal<number> = computed(() =>
    this.backgroundMotion() === BackgroundMotion.Opening ? this.pageScrollProgress() : MAXIMUM_PROGRESS
  );

  private readonly closingTiltProgress: Signal<number> = computed(() =>
    this.backgroundMotion() === BackgroundMotion.Closing ? this.pageScrollProgress() : MINIMUM_PROGRESS
  );

  public readonly tilt: Signal<number> = computed(
    () => FLOOR_TILT - this.openingTiltProgress() - this.closingTiltProgress()
  );

  public readonly autoMovementSpeedFactor: Signal<number> = computed(
    () => FULL_AUTO_MOVEMENT_SPEED_FACTOR - this.openingTiltProgress()
  );

  public readonly isOpeningAligned: Signal<boolean> = computed(() => this.openingTiltProgress() === MAXIMUM_PROGRESS);

  public readonly contentScrollDistanceAfterAlignment: Signal<number> = computed(
    () =>
      this.landingContentScrollDistance() +
      (this.backgroundMotion() === BackgroundMotion.Content
        ? this.observedMeasurement().scrollPosition - this.landingScrollPosition()
        : NO_CONTENT_SCROLL_DISTANCE)
  );

  constructor() {
    this.router.events.pipe(filter(isNavigationEnd), takeUntilDestroyed()).subscribe(() => {
      const navigationInformation = getPageNavigationInformation(this.router.currentNavigation()?.extras.info);
      const measurement = this.measurement();

      this.landingContentScrollDistance.set(
        (measurement === null ? NO_CONTENT_SCROLL_DISTANCE : this.contentScrollDistanceAfterAlignment()) +
          (navigationInformation === null
            ? NO_PAGE_SLIDE_DISTANCE
            : getPageSlideDistance(navigationInformation.direction))
      );
      this.backgroundMotion.set(this.getPageBackgroundMotion());
      this.navigationDirection.set(navigationInformation?.direction ?? null);
      if (measurement === null) {
        return;
      }

      this.measurement.set({
        scrollPosition: this.landingScrollPosition(),
        maximumScrollPosition: measurement.maximumScrollPosition
      });
    });
  }

  public observe(): void {
    if (this.measurement() !== null) {
      throw new Error('Expected ScrollStateService to observe the page once');
    }

    this.measure();

    const abortController = new AbortController();
    const listenerOptions: AddEventListenerOptions = {
      passive: true,
      signal: abortController.signal
    };
    window.addEventListener(
      'scroll',
      () => {
        this.measure();
      },
      listenerOptions
    );
    window.addEventListener(
      'resize',
      () => {
        this.measure();
      },
      listenerOptions
    );

    const resizeObserver = new ResizeObserver(() => {
      this.measure();
    });
    resizeObserver.observe(document.documentElement);

    this.destroyRef.onDestroy(() => {
      abortController.abort();
      resizeObserver.disconnect();
    });
  }

  public scrollToLandingEdge(): void {
    window.scrollTo({
      top: this.landingEdge() === PageEdge.End ? getScrollingElement().scrollHeight : PAGE_START_SCROLL_POSITION,
      behavior: 'instant'
    });
  }

  public measure(): void {
    this.measurement.set(getScrollMeasurement());
  }

  private getPageBackgroundMotion(): BackgroundMotion {
    const backgroundMotion: unknown = this.activatedRoute.snapshot.firstChild?.data[RouteDataKey.BackgroundMotion];
    if (!isBackgroundMotion(backgroundMotion)) {
      throw new Error(
        `Expected the active home page route to declare its background motion, but got [${String(backgroundMotion)}]`
      );
    }

    return backgroundMotion;
  }
}
