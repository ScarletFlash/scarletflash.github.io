import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Service, inject } from '@angular/core';
import { Router } from '@angular/router';
import type { PostHog } from 'posthog-js';
import { PosthogClientService } from './posthog-client.service';

const TAG_QUERY_PARAMETER_NAME = 't';

@Service()
export class UrlTagCaptureService {
  private readonly platformIdentifier: object = inject(PLATFORM_ID);
  private readonly router: Router = inject(Router);
  private readonly posthogClientService: PosthogClientService = inject(PosthogClientService);

  public captureAndClearTag(): void {
    if (!isPlatformBrowser(this.platformIdentifier)) {
      return;
    }

    const tag = new URLSearchParams(window.location.search).get(TAG_QUERY_PARAMETER_NAME);
    if (tag === null || tag.length === 0) {
      return;
    }

    this.posthogClientService.client
      .then((posthog: PostHog | null) => posthog?.capture('url_tag_detected', { tag }))
      .catch((reason: unknown) => {
        console.error(reason);
      });

    this.router.navigate([], {
      queryParams: { [TAG_QUERY_PARAMETER_NAME]: null },
      queryParamsHandling: 'merge',
      preserveFragment: true,
      replaceUrl: true
    });
  }
}
