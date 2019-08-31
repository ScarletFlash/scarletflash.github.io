import { ActivatedRoute } from '@angular/router';

import { isNullOrUndefined } from './is-null-or-undefined.helper';

export const getDeepestActivatedRoute: Function = (activatedRoute: ActivatedRoute): ActivatedRoute => {
  const hasActivatedChildRoute: boolean = !isNullOrUndefined(activatedRoute.firstChild);
  if (hasActivatedChildRoute) {
    return getDeepestActivatedRoute(activatedRoute.firstChild);
  }
  return activatedRoute;
};
