import type { RouteChangeRequestListener } from './declarations/route-change-request-listener.type';

export class NavigationHandler {
  static readonly #routeChangeRequestListener: Set<RouteChangeRequestListener> = new Set<RouteChangeRequestListener>();

  static get #currentPath(): string {
    return new URL(window.location.href).pathname;
  }

  public static goTo(path: string): void {
    const normalizedPath: string = path.trim().toLowerCase();

    NavigationHandler.#routeChangeRequestListener.forEach((listenerCallback: RouteChangeRequestListener) =>
      listenerCallback(normalizedPath)
    );
  }

  public onNewPathRequest(pathChangeListener: RouteChangeRequestListener): void {
    NavigationHandler.#routeChangeRequestListener.add(pathChangeListener);
  }

  public connect(): void {
    NavigationHandler.goTo(NavigationHandler.#currentPath);
  }

  public disconnect(): void {
    NavigationHandler.#routeChangeRequestListener.clear();
  }

  public updatePath(newPath: string): void {
    history.pushState(null, '', newPath);
    history.forward();
  }
}
