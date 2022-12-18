import type { PageConstructor } from './page-constructor.type';

export interface ApplicationParams {
  contentElement: HTMLElement;
  pages: PageConstructor[];
}
