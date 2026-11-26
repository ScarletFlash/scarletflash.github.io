import { type Route } from '@angular/router';
import { type PageDirection } from '../declarations/enums/page-direction.enum';

const MISSING_INDEX = -1;

interface GetNeighbourPageRouteParameters {
  readonly pageRoutes: readonly Route[];
  readonly pageRoute: Route | null;
  readonly direction: PageDirection;
}

export function getNeighbourPageRoute({
  pageRoutes,
  pageRoute,
  direction
}: GetNeighbourPageRouteParameters): Route | undefined {
  const pageIndex = pageRoutes.findIndex((sequencePageRoute: Route) => sequencePageRoute === pageRoute);
  if (pageIndex === MISSING_INDEX) {
    throw new Error('Expected the current page route to be a child of its page sequence route');
  }

  return pageRoutes[pageIndex + direction];
}
