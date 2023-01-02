import type { ApplicationParams } from './declarations/application-params.interface';
import type { PageConstructor } from './declarations/page-constructor.type';
import { NavigationHandler } from './navigation-handler';
import type { Page } from './page';
import { TitleHandler } from './title-handler';

export class Application {
  readonly #contentElement: HTMLElement;
  readonly #pageByPath: Map<string, Page> = new Map<string, Page>();

  readonly #navigationHandler: NavigationHandler = new NavigationHandler();
  readonly #titleHandler: TitleHandler = new TitleHandler();

  #currentPath?: string;

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
    this.#navigationHandler.onNewPathRequest((targetPath: string) => {
      if (this.#currentPath === targetPath) {
        return;
      }

      const targetPage: Page | undefined = this.#pageByPath.get(targetPath);
      if (targetPage === undefined) {
        this.#titleHandler.resetTitle();
        throw new Error(`No page with desired path: ${targetPath}`);
      }

      const currentPage: Page | undefined =
        this.#currentPath === undefined ? undefined : this.#pageByPath.get(this.#currentPath);
      if (currentPage !== undefined) {
        currentPage.destroy(this.#contentElement);
      }
      this.#currentPath = targetPath;

      const { title, path }: Page = targetPage;

      this.#navigationHandler.updatePath(path);
      this.#titleHandler.setTitle(title);

      targetPage.init(this.#contentElement);
    });
  }

  #makeTextContentVisible(): void {
    this.#contentElement.classList.remove('content_hidden');
  }
}
