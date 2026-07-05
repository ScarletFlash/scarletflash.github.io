import { isPlatformBrowser } from "@angular/common";
import { ErrorHandler, inject, Injectable, isDevMode, PLATFORM_ID } from "@angular/core";

@Injectable()
export class PosthogErrorHandler implements ErrorHandler {
  private readonly platformIdentifier = inject(PLATFORM_ID);

  public handleError(error: unknown): void {
    if (isDevMode() || !isPlatformBrowser(this.platformIdentifier)) {
      return;
    }

    import("posthog-js")
      .then(({ default: posthog }) => posthog.captureException(error))
      .catch((reason: unknown) => console.error(reason));
  }
}
