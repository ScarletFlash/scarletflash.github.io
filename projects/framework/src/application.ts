import type { ApplicationParams } from './declarations/application-params.interface';
import type { PageConstructor } from './declarations/page-constructor.type';
import { NavigationHandler } from './navigation-handler';
import type { Page } from './page';

export class Application {
  readonly #contentElement: HTMLElement;
  readonly #pageByPath: Map<string, Page> = new Map<string, Page>();
  readonly #navigationHandler: NavigationHandler = new NavigationHandler();

  constructor({ contentElement, pages }: ApplicationParams) {
    this.#contentElement = contentElement;

    new Set<PageConstructor>(pages).forEach((uniquePageConstructor: PageConstructor) => {
      const pageInstance: Page = new uniquePageConstructor();

      this.#pageByPath.set(pageInstance.path, pageInstance);
    });
  }

  public start(): void {
    setTimeout(() => {
      this.#makeTextContentVisible();
    }, 1000);

    this.#renderTargetPageOnPathChanges();
    this.#navigationHandler.connect();
  }

  public stop(): void {
    this.#navigationHandler.disconnect();
  }

  #renderTargetPageOnPathChanges(): void {
    this.#navigationHandler.onPathChanges((currentPath: string, previousPath: string | undefined) => {
      const targetPage: Page | undefined = this.#pageByPath.get(currentPath);
      if (targetPage === undefined) {
        throw new Error(`No page with desired path: ${currentPath}`);
      }

      const currentPage: Page | undefined = previousPath === undefined ? undefined : this.#pageByPath.get(previousPath);
      if (currentPage !== undefined) {
        currentPage.destroy();
      }

      targetPage.init(this.#contentElement);
    });
  }

  #makeTextContentVisible(): void {
    this.#contentElement.classList.remove('content_hidden');
  }
}
