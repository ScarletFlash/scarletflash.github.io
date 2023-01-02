import { getElement, Node } from '@scarletflash/declarative-element';

export abstract class Page {
  public abstract readonly path: string;
  public abstract readonly title: string;

  protected get self(): Page {
    return this;
  }

  static #setTitle(pageTitle: string = ''): void {
    const prefix: string = 'Fedor Usakov';
    const newTitle: string = pageTitle.length === 0 ? prefix : `${prefix} — ${pageTitle}`;
    document.title = newTitle;
  }

  public init(root: HTMLElement): void {
    Page.#setTitle(this.title);

    let contentElement: HTMLElement | Text | undefined;
    let page: Page = this.self;

    while (contentElement === undefined) {
      const content: Node.Any | Page = page.getContent();
      if (content instanceof Page) {
        page = content.self;
        continue;
      }
      contentElement = getElement(content);
    }

    root.replaceChildren(contentElement);
  }

  public destroy(): void {
    Page.#setTitle();
  }

  protected abstract getContent(): Node.Any | Page;
}
