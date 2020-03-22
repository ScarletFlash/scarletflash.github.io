import { ActivatedRoute } from '@angular/router';
import { MonoTypeFunction } from '@app/declarations/types/mono-type-function.type';
import * as R from 'ramda';

export const getDeepestActivatedRoute: MonoTypeFunction<ActivatedRoute> = (
  route: ActivatedRoute
): ActivatedRoute | null => {
  const routeIsNotDefined: boolean = R.isNil(route);
  if (routeIsNotDefined) {
    return null;
  }

  const firstChild: ActivatedRoute | null = route.firstChild;
  if (R.isNil(firstChild)) {
    return route;
  }

  return getDeepestActivatedRoute(firstChild);
};
