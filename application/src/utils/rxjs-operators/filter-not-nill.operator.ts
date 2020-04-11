import { filter } from 'rxjs/operators';

import { isNill } from '../is-nill.util';

import type { Observable, OperatorFunction } from 'rxjs';
export function filterNotNill<T>(): OperatorFunction<T, NonNullable<T>> {
  return (source: Observable<T>): Observable<NonNullable<T>> => {
    return source.pipe(filter((data: T): data is NonNullable<T> => !isNill(data)));
  };
}
