import {
  Component,
  DOCUMENT,
  DestroyRef,
  ErrorHandler,
  Injector,
  Renderer2,
  ViewEncapsulation,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
  viewChild,
  type ElementRef
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterOutlet, type Event, type Route } from '@angular/router';
import { animationFrames, exhaustMap, filter, map, take } from 'rxjs';
import { PageEdge } from '../../../declarations/enums/page-edge.enum';
import { type PageNavigationInformation } from '../../../declarations/interfaces/page-navigation-information.interface';
import { getNeighbourPageRoute } from '../../../utilities/get-neighbour-page-route.utility';
import { isNavigationEnd } from '../../../utilities/is-navigation-end.utility';
import { BackgroundComponent } from '../../components/background/background.component';
import { PageEdgeGestureService } from '../../services/page-edge-gesture.service';
import { PageSlideService } from '../../services/page-slide.service';
import { ScrollStateService } from '../../services/scroll-state.service';

const VISIBLE_VISIBILITY = 'visible';
const HOME_OVERSCROLL_CLASS = 'overscroll-y-none';
const REVEALED_CONTENT_CLASSES =
  'opacity-100 visible transition-[opacity,visibility] duration-500 motion-reduce:duration-0';

const enum RevealPhase {
  Fallback,
  Hidden,
  Revealed
}

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, BackgroundComponent],
  providers: [ScrollStateService, PageEdgeGestureService],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('root');

  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly router = inject(Router);

  protected readonly scrollStateService = inject(ScrollStateService);

  private readonly pageEdgeGestureService = inject(PageEdgeGestureService);

  private readonly pageSlideService = inject(PageSlideService);

  private readonly errorHandler = inject(ErrorHandler);

  private readonly injector = inject(Injector);

  private readonly destroyRef = inject(DestroyRef);

  private readonly pageRoute = toSignal(
    this.router.events.pipe(
      filter(isNavigationEnd),
      map(() => this.getPageRoute())
    ),
    { initialValue: this.getPageRoute() }
  );

  private readonly revealPhase = signal(
    this.scrollStateService.landingEdge() === PageEdge.Start ? RevealPhase.Revealed : RevealPhase.Fallback
  );

  protected readonly revealPhaseClasses = computed(() => {
    const phase = this.revealPhase();
    switch (phase) {
      case RevealPhase.Fallback:
        return `${REVEALED_CONTENT_CLASSES} delay-5000 starting:opacity-0 starting:invisible`;
      case RevealPhase.Hidden:
        return 'opacity-0 invisible transition-none';
      case RevealPhase.Revealed:
        return REVEALED_CONTENT_CLASSES;
      default:
        throw new Error(`Expected a known reveal phase, but got [${String(phase)}]`);
    }
  });

  private readonly isScrollStateSynchronized = signal(false);

  protected readonly isFirstScreenAligned = computed(
    () => this.isScrollStateSynchronized() && this.scrollStateService.isOpeningAligned()
  );

  protected readonly slidingContentScrollDistance = computed(
    () => this.scrollStateService.contentScrollDistanceAfterAlignment() - this.pageSlideService.gridSlideOffset()
  );

  constructor() {
    const renderer = inject(Renderer2);
    const documentElement = inject(DOCUMENT).documentElement;
    renderer.addClass(documentElement, HOME_OVERSCROLL_CLASS);
    this.destroyRef.onDestroy(() => {
      renderer.removeClass(documentElement, HOME_OVERSCROLL_CLASS);
    });

    this.router.events
      .pipe(
        filter((event: Event) => isNavigationEnd(event) && this.isScrollStateSynchronized()),
        takeUntilDestroyed()
      )
      .subscribe(() =>
        afterNextRender(
          () => {
            this.scrollStateService.scrollToLandingEdge();
          },
          {
            injector: this.injector
          }
        )
      );

    this.pageEdgeGestureService.pushes
      .pipe(
        filter(() => this.isScrollStateSynchronized() && !this.pageSlideService.isSliding()),
        exhaustMap(async (navigationInformation: PageNavigationInformation): Promise<void> => {
          const pageRoutes: readonly Route[] | undefined = this.activatedRoute.routeConfig?.children;
          if (pageRoutes === undefined) {
            throw new Error('Expected the home route to declare its page routes');
          }

          const neighbourPageRoute = getNeighbourPageRoute({
            pageRoutes,
            pageRoute: this.pageRoute(),
            direction: navigationInformation.direction
          });
          if (neighbourPageRoute === undefined) {
            return;
          }

          if (neighbourPageRoute.path === undefined) {
            throw new Error('Expected every home page route to declare its path');
          }

          this.scrollStateService.measure();
          await this.waitForNextRender();
          await this.router
            .navigate([neighbourPageRoute.path], {
              relativeTo: this.activatedRoute,
              replaceUrl: true,
              queryParamsHandling: 'preserve',
              preserveFragment: true,
              info: navigationInformation
            })
            .catch((error: unknown) => {
              this.errorHandler.handleError(error);
            });
          await this.waitForNextRender();
        }),
        takeUntilDestroyed()
      )
      .subscribe();

    effect(() => {
      if (this.revealPhase() !== RevealPhase.Hidden) {
        return;
      }

      this.scrollStateService.scrollToLandingEdge();
    });

    afterNextRender(() => {
      this.scrollStateService.observe();
      this.pageEdgeGestureService.observe();
      history.scrollRestoration = 'manual';

      if (getComputedStyle(this.root().nativeElement).visibility === VISIBLE_VISIBILITY) {
        this.isScrollStateSynchronized.set(true);
        return;
      }

      this.revealPhase.set(RevealPhase.Hidden);
      animationFrames()
        .pipe(take(1), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.revealPhase.set(RevealPhase.Revealed);
          this.isScrollStateSynchronized.set(true);
        });
    });
  }

  private getPageRoute(): Route {
    const pageRoute = this.activatedRoute.snapshot.firstChild?.routeConfig;
    if (pageRoute === null || pageRoute === undefined) {
      throw new Error('Expected the home route to render one of its page routes');
    }

    return pageRoute;
  }

  private waitForNextRender(): Promise<void> {
    return new Promise<void>((resolve: () => void) => afterNextRender(resolve, { injector: this.injector }));
  }
}
