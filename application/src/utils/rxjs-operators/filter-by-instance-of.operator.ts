import { filter } from 'rxjs/operators';

import type { Observable, OperatorFunction } from 'rxjs';

export function filterByInstanceOf<T, K extends T>(target: any): OperatorFunction<T, K> {
  return (source: Observable<T>): Observable<K> => {
    return source.pipe(filter((data: T): data is K => data instanceof target));
  };
}
