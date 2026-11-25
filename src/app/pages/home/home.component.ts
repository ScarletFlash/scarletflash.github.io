import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  ErrorHandler,
  inject,
  Injector,
  Signal,
  signal,
  viewChild,
  ViewEncapsulation,
  WritableSignal,
} from "@angular/core";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  PRIMARY_OUTLET,
  Router,
  RouterOutlet,
} from "@angular/router";
import { animationFrames, asyncScheduler, filter, take, throttleTime } from "rxjs";
import { HomeOutletName } from "../../../declarations/enums/home-outlet-name.enum";
import { HomeRouteDataKey } from "../../../declarations/enums/home-route-data-key.enum";
import { isNavigationEnd } from "../../../utilities/is-navigation-end.utility";
import { BackgroundComponent } from "../../components/background/background.component";
import { ScrollStateService } from "../../services/scroll-state.service";

const ADDRESS_NAVIGATION_THROTTLE_TIME_MILLISECONDS: number = 150;
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
  protected readonly homeOutletName: typeof HomeOutletName = HomeOutletName;

  private readonly root: Signal<ElementRef<HTMLElement>> = viewChild.required("root");

  private readonly openingPinWrapper: Signal<ElementRef<HTMLElement>> =
    viewChild.required("openingPinWrapper");

  private readonly openingSpacer: Signal<ElementRef<HTMLElement>> =
    viewChild.required("openingSpacer");

  private readonly sibeBlock: Signal<ElementRef<HTMLElement>> = viewChild.required("sibeBlock");

  private readonly bimeisterBlock: Signal<ElementRef<HTMLElement>> =
    viewChild.required("bimeisterBlock");

  private readonly closingPinWrapper: Signal<ElementRef<HTMLElement>> =
    viewChild.required("closingPinWrapper");

  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  private readonly childRouteSnapshotByOutletName: ReadonlyMap<string, ActivatedRouteSnapshot> =
    new Map<string, ActivatedRouteSnapshot>(
      this.activatedRoute.snapshot.children.map((childRouteSnapshot: ActivatedRouteSnapshot) => [
        childRouteSnapshot.outlet,
        childRouteSnapshot,
      ]),
    );

  private readonly firstScreenAddressPath: string = this.getOutletAddressPath(
    HomeOutletName.FirstScreen,
  );

  protected readonly scrollStateService: ScrollStateService = inject(ScrollStateService);

  private readonly router: Router = inject(Router);

  private readonly errorHandler: ErrorHandler = inject(ErrorHandler);

  private readonly injector: Injector = inject(Injector);

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  private readonly scrollNavigationInformation: object = {};

  private readonly routerAddressPath: WritableSignal<string> = signal(
    this.getRouterAddressPath(),
  );

  private readonly revealPhase: WritableSignal<RevealPhase> = signal(
    this.routerAddressPath() === this.firstScreenAddressPath
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

  protected readonly isFirstScreenAligned: Signal<boolean> = computed(() =>
    this.isScrollStateSynchronized()
      ? this.scrollStateService.isOpeningAligned()
      : this.routerAddressPath() !== this.firstScreenAddressPath,
  );

  constructor() {
    this.router.events
      .pipe(
        filter(isNavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        const previousAddressPath: string = this.routerAddressPath();
        const addressPath: string = this.getRouterAddressPath();
        this.routerAddressPath.set(addressPath);
        if (
          this.router.currentNavigation()?.extras.info === this.scrollNavigationInformation ||
          addressPath === previousAddressPath
        ) {
          return;
        }

        this.landAt(addressPath);
      });

    effect(() => {
      if (this.revealPhase() !== RevealPhase.Hidden) {
        return;
      }

      this.landAt(this.routerAddressPath());
    });

    afterNextRender(() => {
      const root: HTMLElement = this.root().nativeElement;
      const openingPinWrapper: HTMLElement = this.openingPinWrapper().nativeElement;

      this.scrollStateService.observe({
        root,
        openingPinWrapper,
        openingSpacer: this.openingSpacer().nativeElement,
        closingPinWrapper: this.closingPinWrapper().nativeElement,
        blockByAddressPath: new Map<string, HTMLElement>([
          [this.firstScreenAddressPath, openingPinWrapper],
          [this.getOutletAddressPath(HomeOutletName.Sibe), this.sibeBlock().nativeElement],
          [
            this.getOutletAddressPath(HomeOutletName.Bimeister),
            this.bimeisterBlock().nativeElement,
          ],
        ]),
        closingAddressPath: this.getOutletAddressPath(HomeOutletName.Contacts),
      });

      history.scrollRestoration = "manual";

      if (getComputedStyle(root).visibility === VISIBLE_VISIBILITY) {
        this.startAddressSynchronization();
        return;
      }

      this.revealPhase.set(RevealPhase.Hidden);
      animationFrames()
        .pipe(take(1), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.revealPhase.set(RevealPhase.Revealed);
          this.startAddressSynchronization();
        });
    });
  }

  private startAddressSynchronization(): void {
    this.isScrollStateSynchronized.set(true);
    toObservable(this.scrollStateService.currentAddressPath, { injector: this.injector })
      .pipe(
        throttleTime(ADDRESS_NAVIGATION_THROTTLE_TIME_MILLISECONDS, asyncScheduler, {
          leading: true,
          trailing: true,
        }),
        filter((addressPath: string) => addressPath !== this.routerAddressPath()),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((addressPath: string) =>
        this.router
          .navigate([addressPath], {
            replaceUrl: true,
            queryParamsHandling: "preserve",
            preserveFragment: true,
            info: this.scrollNavigationInformation,
          })
          .catch((error: unknown) => this.errorHandler.handleError(error)),
      );
  }

  private landAt(addressPath: string): void {
    const landingScrollPosition: number | undefined = this.scrollStateService
      .landingScrollPositionByAddressPath()
      .get(addressPath);
    if (landingScrollPosition === undefined) {
      throw new Error(`Expected the [${addressPath}] address to have a landing point`);
    }

    window.scrollTo({ top: landingScrollPosition, behavior: "instant" });
  }

  private getRouterAddressPath(): string {
    const addressPath: string | undefined = this.activatedRoute.snapshot.children.find(
      (childRouteSnapshot: ActivatedRouteSnapshot) => childRouteSnapshot.outlet === PRIMARY_OUTLET,
    )?.routeConfig?.path;
    if (addressPath === undefined) {
      throw new Error(
        "Expected the home route to have an active address route in the primary outlet",
      );
    }

    return addressPath;
  }

  private getOutletAddressPath(outletName: HomeOutletName): string {
    const outletRouteSnapshot: ActivatedRouteSnapshot | undefined =
      this.childRouteSnapshotByOutletName.get(outletName);
    if (outletRouteSnapshot === undefined) {
      throw new Error(`Expected the home route to have an active route in the [${outletName}] outlet`);
    }

    const addressRoute: unknown = outletRouteSnapshot.data[HomeRouteDataKey.AddressRoute];
    if (
      typeof addressRoute !== "object" ||
      addressRoute === null ||
      !("path" in addressRoute) ||
      typeof addressRoute.path !== "string"
    ) {
      throw new Error(
        `Expected the [${outletName}] outlet route data to refer to an address route with a path`,
      );
    }

    return addressRoute.path;
  }
}
