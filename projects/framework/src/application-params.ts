import type { Page } from './page';

export interface ApplicationParams {
  contentElement: HTMLElement;
  pages: (new () => Page)[];
}
