import { isPlatformBrowser } from "@angular/common";
import { ErrorHandler, inject, isDevMode, PLATFORM_ID, Service } from "@angular/core";

@Service({ autoProvided: false })
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
