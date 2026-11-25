import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  Signal,
  signal,
  viewChild,
  ViewEncapsulation,
  WritableSignal,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Event, Router, RouterOutlet } from "@angular/router";
import { animationFrames, filter, take } from "rxjs";
import { PageEdge } from "../../../declarations/enums/page-edge.enum";
import { isNavigationEnd } from "../../../utilities/is-navigation-end.utility";
import { BackgroundComponent } from "../../components/background/background.component";
import { ScrollStateService } from "../../services/scroll-state.service";

const VISIBLE_VISIBILITY: string = "visible";

const enum RevealPhase {
  Fallback,
  Hidden,
  Revealed,
}

@Component({
  selector: "app-home",
  imports: [RouterOutlet, BackgroundComponent],
  providers: [ScrollStateService],
  templateUrl: "./home.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  private readonly root: Signal<ElementRef<HTMLElement>> = viewChild.required("root");

  protected readonly scrollStateService: ScrollStateService = inject(ScrollStateService);

  private readonly injector: Injector = inject(Injector);

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private readonly revealPhase: WritableSignal<RevealPhase> = signal(
    this.scrollStateService.landingEdge() === PageEdge.Start
      ? RevealPhase.Revealed
      : RevealPhase.Fallback,
  );

  protected readonly isContentHidden: Signal<boolean> = computed(
    () => this.revealPhase() === RevealPhase.Hidden,
  );

  protected readonly isFallbackRevealApplied: Signal<boolean> = computed(
    () => this.revealPhase() === RevealPhase.Fallback,
  );

  private readonly isScrollStateSynchronized: WritableSignal<boolean> = signal(false);

  protected readonly isFirstScreenAligned: Signal<boolean> = computed(
    () => this.isScrollStateSynchronized() && this.scrollStateService.isOpeningAligned(),
  );

  constructor() {
    inject(Router)
      .events.pipe(
        filter((event: Event) => isNavigationEnd(event) && this.isScrollStateSynchronized()),
        takeUntilDestroyed(),
      )
      .subscribe(() =>
        afterNextRender(() => this.scrollStateService.scrollToLandingEdge(), {
          injector: this.injector,
        }),
      );

    effect(() => {
      if (this.revealPhase() !== RevealPhase.Hidden) {
        return;
      }

      this.scrollStateService.scrollToLandingEdge();
    });

    afterNextRender(() => {
      this.scrollStateService.observe();
      history.scrollRestoration = "manual";

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
}
