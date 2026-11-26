import { Service, inject } from '@angular/core';
import { Router, type ActivatedRouteSnapshot, type PreloadingStrategy, type Route } from '@angular/router';
import { of, type Observable } from 'rxjs';
import { PageDirection } from '../../declarations/enums/page-direction.enum';
import { RouteDataKey } from '../../declarations/enums/route-data-key.enum';
import { getNeighbourPageRoute } from '../../utilities/get-neighbour-page-route.utility';

@Service()
export class NeighbourPagePreloadingStrategy implements PreloadingStrategy {
  private readonly router = inject(Router);

  public preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    const pageSnapshot = NeighbourPagePreloadingStrategy.getDeepestSnapshot(this.router.routerState.snapshot.root);
    const sequenceRoute = pageSnapshot.parent?.routeConfig;
    if (sequenceRoute?.data?.[RouteDataKey.IsPageSequence] !== true) {
      return of(null);
    }

    const pageRoutes: readonly Route[] | undefined = sequenceRoute.children;
    if (pageRoutes === undefined) {
      throw new Error('Expected the page sequence route to declare its page routes');
    }

    const neighbourPageRoutes: ReadonlySet<Route | undefined> = new Set<Route | undefined>(
      [PageDirection.Previous, PageDirection.Next].map((direction: PageDirection) =>
        getNeighbourPageRoute({ pageRoutes, pageRoute: pageSnapshot.routeConfig, direction })
      )
    );
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
