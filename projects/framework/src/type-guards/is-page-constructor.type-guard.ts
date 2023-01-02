import type { PageConstructor } from '../declarations/page-constructor.type';
import { Page } from '../page';

export function isPageConstructor<T>(input: T): input is T & PageConstructor {
  if (typeof input !== 'function') {
    return false;
  }

  if (input === Page) {
    return true;
  }

  return input.prototype instanceof Page;
}
