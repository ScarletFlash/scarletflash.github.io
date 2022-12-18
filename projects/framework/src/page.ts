export abstract class Page {
  public abstract readonly path: string;
  public abstract readonly title: string;

  static #setTitle(pageTitle: string = ''): void {
    const prefix: string = 'Fedor Usakov';
    const newTitle: string = pageTitle.length === 0 ? prefix : `${prefix} — ${pageTitle}`;
    document.title = newTitle;
  }

  public init(root: HTMLElement): void {
    Page.#setTitle(this.title);

   const contentElement: HTMLElement = this.getContent();
   root.replaceChildren(contentElement)
  }

  public destroy(): void {
    Page.#setTitle();
  }

  protected abstract getContent(): HTMLElement;
}
