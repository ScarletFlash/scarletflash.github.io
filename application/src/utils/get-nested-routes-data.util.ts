import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { isNill } from './is-nill.util';

import type { ActivatedRoute, Data } from '@angular/router';

export function getNestedRoutesData(activatedRoute: ActivatedRoute | null): Observable<Data> {
  const nestedRoutes: ActivatedRoute[] = getNestedRoutes(activatedRoute);
  return combineLatest(nestedRoutes.map((route: ActivatedRoute) => route.data)).pipe(
    map((routesData: Data[]) =>
      routesData.reduce((accumulator: Data, data: Data) => {
        return { ...accumulator, ...data };
      }, {})
    )
  );
}

function getNestedRoutes(
  activatedRoute: ActivatedRoute | null,
  previousLevels: ActivatedRoute[] = []
): ActivatedRoute[] {
  if (isNill(activatedRoute)) {
    return previousLevels;
  }
  if (!Array.isArray(previousLevels)) {
    return getNestedRoutes(activatedRoute.firstChild, [activatedRoute]);
  }
  return getNestedRoutes(activatedRoute.firstChild, [...previousLevels, activatedRoute]);
}
