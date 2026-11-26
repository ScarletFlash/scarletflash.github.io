import { type Signal } from '@angular/core';

export type DataComponent<T extends object> = {
  readonly [P in keyof T]: T[P] | Signal<T[P]>;
};
