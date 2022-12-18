import type { ApplicationParams } from './application-params';
import type { Page } from './page';

export class Application {
  readonly #contentElement: HTMLElement;

  readonly #pages: Set<Page> = new Set<Page>();

  constructor({ contentElement }: ApplicationParams) {
    this.#contentElement = contentElement;
  }

  public start(): void {
    this.#registerPages();

    setTimeout(() => {
      this.#makeTextContentVisible();
    }, 1000);
  }

  #makeTextContentVisible(): void {
    this.#contentElement.classList.remove('content_hidden');
  }

  #registerPages(): void {
    this.#pages.forEach((page: Page) => {
      // eslint-disable-next-line no-console
      console.log(page);
    });
  }
}
