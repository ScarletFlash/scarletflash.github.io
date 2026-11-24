import { inject } from "@angular/core";
import { PosthogClientService } from "../services/posthog-client.service";

export function initializePosthogAnalytics(): void {
  inject(PosthogClientService).client.catch((reason: unknown) => console.error(reason));
}
