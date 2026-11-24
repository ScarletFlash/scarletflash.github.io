import { isPlatformBrowser } from "@angular/common";
import { inject, PLATFORM_ID, Service } from "@angular/core";
import { Router } from "@angular/router";
import type { PostHog } from "posthog-js";
import { PosthogClientService } from "./posthog-client.service";

@Service()
export class UrlTagCaptureService {
  private readonly platformIdentifier = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly posthogClientService: PosthogClientService = inject(PosthogClientService);

  public captureAndClearTag(): void {
    if (!isPlatformBrowser(this.platformIdentifier)) {
      return;
    }

    const searchParameters = new URLSearchParams(window.location.search);
    const tag = searchParameters.get("t");
    if (tag === null || tag.length === 0) {
      return;
    }

    this.posthogClientService.client
      .then((posthog: PostHog | null) => posthog?.capture("url_tag_detected", { tag }))
      .catch((reason: unknown) => console.error(reason));

    this.router.navigate([], {
      queryParams: { t: null },
      queryParamsHandling: "merge",
      replaceUrl: true,
    });
  }
}
