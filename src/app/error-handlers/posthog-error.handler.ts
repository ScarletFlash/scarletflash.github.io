import { ErrorHandler, Service, inject } from '@angular/core';
import type { PostHog } from 'posthog-js';
import { PosthogClientService } from '../services/posthog-client.service';

@Service({ autoProvided: false })
export class PosthogErrorHandler extends ErrorHandler {
  private readonly posthogClientService: PosthogClientService = inject(PosthogClientService);

  public override handleError(error: unknown): void {
    super.handleError(error);

    this.posthogClientService.client
      .then((posthog: PostHog | null) => posthog?.captureException(error))
      .catch((reason: unknown) => {
        // eslint-disable-next-line no-console
        console.error(reason);
      });
  }
}
