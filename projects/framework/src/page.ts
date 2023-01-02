import { getElement, Node } from '@scarletflash/declarative-element';
import type { PageConstructor } from './declarations/page-constructor.type';
import { isPageConstructor } from './type-guards/is-page-constructor.type-guard';

export abstract class Page {
  public abstract readonly path: string;
  public abstract readonly title: string;

  private get self(): Page {
    return this;
  }

  public init(root: HTMLElement): void {
    let contentElement: HTMLElement | Text | undefined;
    let page: Page = this.self;

    do {
      const content: Node.Any | PageConstructor = page.getContent();
      if (isPageConstructor(content)) {
        page = new content();
        continue;
      }
      contentElement = getElement(content);
    } while (contentElement === undefined);

    root.replaceChildren(contentElement);
  }

  public destroy(root: HTMLElement): void {
    Array.from(root.children).forEach((child: Element) => child.remove());
  }

  protected abstract getContent(): Node.Any | PageConstructor;
}
