import { inject, Service } from "@angular/core";
import { ActivatedRouteSnapshot, PreloadingStrategy, Route, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { RouteDataKey } from "../../declarations/enums/route-data-key.enum";

const NEIGHBOUR_PAGE_DISTANCE: number = 1;
const MISSING_INDEX: number = -1;

@Service()
export class NeighbourPagePreloadingStrategy implements PreloadingStrategy {
  private readonly router: Router = inject(Router);

  public preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    const pageSnapshot: ActivatedRouteSnapshot = NeighbourPagePreloadingStrategy.getDeepestSnapshot(
      this.router.routerState.snapshot.root,
    );
    const sequenceRoute: Route | null | undefined = pageSnapshot.parent?.routeConfig;
    if (sequenceRoute?.data?.[RouteDataKey.IsPageSequence] !== true) {
      return of(null);
    }

    const pageRoutes: readonly Route[] | undefined = sequenceRoute.children;
    if (pageRoutes === undefined) {
      throw new Error("Expected the page sequence route to declare its page routes");
    }

    const pageIndex: number = pageRoutes.findIndex(
      (pageRoute: Route) => pageRoute === pageSnapshot.routeConfig,
    );
    if (pageIndex === MISSING_INDEX) {
      throw new Error("Expected the current page route to be a child of its page sequence route");
    }

    const neighbourPageRoutes: ReadonlySet<Route | undefined> = new Set<Route | undefined>([
      pageRoutes[pageIndex - NEIGHBOUR_PAGE_DISTANCE],
      pageRoutes[pageIndex + NEIGHBOUR_PAGE_DISTANCE],
    ]);
    if (!neighbourPageRoutes.has(route)) {
      return of(null);
    }

    return load();
  }

  private static getDeepestSnapshot(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    return snapshot.firstChild === null
      ? snapshot
      : NeighbourPagePreloadingStrategy.getDeepestSnapshot(snapshot.firstChild);
  }
}
