import { ErrorHandler, inject, Service } from "@angular/core";
import type { PostHog } from "posthog-js";
import { PosthogClientService } from "../services/posthog-client.service";

@Service({ autoProvided: false })
export class PosthogErrorHandler implements ErrorHandler {
  private readonly posthogClientService: PosthogClientService = inject(PosthogClientService);

  public handleError(error: unknown): void {
    this.posthogClientService.client
      .then((posthog: PostHog | null) => posthog?.captureException(error))
      .catch((reason: unknown) => console.error(reason));
  }
}
