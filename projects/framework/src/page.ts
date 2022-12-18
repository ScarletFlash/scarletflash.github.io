export abstract class Page {
  public abstract readonly path: string;
  public abstract readonly title: string;

  static #setTitle(pageTitle: string = ''): void {
    const prefix: string = 'Fedor Usakov';
    const newTitle: string = pageTitle.length === 0 ? prefix : `${prefix} — ${pageTitle}`;
    document.title = newTitle;
  }

  public init(): void {
    Page.#setTitle(this.title);
  }

  public destroy(): void {
    Page.#setTitle();
  }
}
