import { Predicate } from '@angular/core';

export const isNullOrUndefined: Predicate<unknown> = (value: unknown): boolean => {
  return value === undefined || value === null;
};
