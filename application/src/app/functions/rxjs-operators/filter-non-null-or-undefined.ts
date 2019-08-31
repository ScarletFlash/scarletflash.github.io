import { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

import { isNullOrUndefined } from '../helpers';

export const filterNotNullOrUndefined: <T>() => MonoTypeOperatorFunction<T> = <T>(): MonoTypeOperatorFunction<T> => {
  return filter((innerValue: T) => !isNullOrUndefined(innerValue));
};
