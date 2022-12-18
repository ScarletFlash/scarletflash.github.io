import type { PathChangeListener } from './declarations/path-change-listener.type';

export class NavigationHandler {
  #latestPath: string = this.#currentPath;

  readonly #pathChangeListeners: Set<PathChangeListener> = new Set<PathChangeListener>();

  get #currentPath(): string {
    return new URL(window.location.href).pathname;
  }

  public static goTo(path: string): void {
    history.pushState(null, '', path);
    history.forward();
    history.back();
    history.forward();
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

  readonly #eventListener: (event: PopStateEvent) => void = (): void => {
    this.#pathChangeListeners.forEach((listenerCallback: PathChangeListener) =>
      listenerCallback(this.#currentPath, this.#latestPath)
    );

    this.#latestPath = this.#currentPath;
  };
}
