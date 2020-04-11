import { isNill } from './is-nill.util';

import type { ActivatedRoute } from '@angular/router';

export function getDeepestActivatedRoute(activatedRoute: ActivatedRoute | null): ActivatedRoute | null {
  const firstChild: ActivatedRoute | null = isNill(activatedRoute) ? null : activatedRoute.firstChild;
  if (isNill(firstChild)) {
    return activatedRoute;
  }
  return getDeepestActivatedRoute(firstChild);
}
