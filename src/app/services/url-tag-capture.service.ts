import { isPlatformBrowser } from "@angular/common";
import { inject, Injectable, isDevMode, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class UrlTagCaptureService {
  private readonly platformIdentifier = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  public captureAndClearTag(): void {
    if (!isPlatformBrowser(this.platformIdentifier)) {
      return;
    }

    const searchParameters = new URLSearchParams(window.location.search);
    const tag = searchParameters.get("t");
    if (tag === null || tag.length === 0) {
      return;
    }

    if (!isDevMode()) {
      import("posthog-js")
        .then(({ default: posthog }) => posthog.capture("url_tag_detected", { tag }))
        .catch((reason: unknown) => console.error(reason));
    }

    this.router.navigate([], {
      queryParams: { t: null },
      queryParamsHandling: "merge",
      replaceUrl: true,
    });
  }
}
