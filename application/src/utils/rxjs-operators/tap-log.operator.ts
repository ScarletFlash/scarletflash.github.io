import { tap } from 'rxjs/operators';

import type { MonoTypeOperatorFunction, Observable } from 'rxjs';
export const tapLog = <T>(...prefixes: unknown[]): MonoTypeOperatorFunction<T> => (
  source$: Observable<T>
): Observable<T> => {
  const { group, log, groupCollapsed, trace, groupEnd }: Console = console;
  return source$.pipe(
    tap((data: T) => {
      group('tapLog');
      log(...prefixes, data);
      groupCollapsed('trace');
      trace();
      groupEnd();
      groupEnd();
    })
  );
};
