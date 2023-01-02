import type { PathChangeListener } from './declarations/path-change-listener.type';

export class NavigationHandler {
  #latestPath: string | undefined;

  readonly #pathChangeListeners: Set<PathChangeListener> = new Set<PathChangeListener>();

  get #currentPath(): string {
    return new URL(window.location.href).pathname;
  }

  public static goTo(path: string): void {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify({ path }));

    history.pushState(null, '', path);
    history.back();
    history.forward();
    // history.forward();
  }

  public onPathChanges(pathChangeListener: PathChangeListener): void {
    this.#pathChangeListeners.add(pathChangeListener);
  }

  public connect(): void {
    addEventListener('popstate', this.#eventListener);
    NavigationHandler.goTo(this.#currentPath);
  }

  public disconnect(): void {
    removeEventListener('popstate', this.#eventListener);
    this.#pathChangeListeners.clear();
  }

  readonly #eventListener: (_event: PopStateEvent) => void = (): void => {
    if (this.#currentPath === this.#latestPath) {
      return;
    }

    this.#pathChangeListeners.forEach((listenerCallback: PathChangeListener) =>
      listenerCallback(this.#currentPath, this.#latestPath)
    );

    // eslint-disable-next-line no-console
    console.log(
      JSON.stringify({
        prv: this.#currentPath,
        new: this.#latestPath,
      })
    );

    this.#latestPath = this.#currentPath;
  };
}
