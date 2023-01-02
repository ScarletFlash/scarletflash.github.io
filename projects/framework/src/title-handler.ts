export class TitleHandler {
  static readonly #prefix: string = 'Fedor Usakov';

  public setTitle(pageTitle: string): void {
    const newTitle: string = pageTitle.length === 0 ? TitleHandler.#prefix : `${TitleHandler.#prefix} — ${pageTitle}`;
    document.title = newTitle;
  }

  public resetTitle(): void {
    this.setTitle('');
  }
}
