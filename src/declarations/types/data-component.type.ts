import { Signal } from "@angular/core";

export type DataComponent<T extends {}> = {
  readonly [P in keyof T]: T[P] | Signal<T[P]>;
};



