import { isPlatformBrowser } from "@angular/common";
import { inject, isDevMode, NgZone, PLATFORM_ID } from "@angular/core";

export function initializePosthogAnalytics(): void {
  if (isDevMode()) {
    return;
  }

  const apiKey = process.env["POSTHOG_API_KEY"];
  if (apiKey === undefined || apiKey.length === 0) {
    throw new Error("POSTHOG_API_KEY is not configured at build time.");
  }

  const apiHost = process.env["POSTHOG_API_HOST"];
  if (apiHost === undefined || apiHost.length === 0) {
    throw new Error("POSTHOG_API_HOST is not configured at build time.");
  }

  const platformIdentifier = inject(PLATFORM_ID);
  if (!isPlatformBrowser(platformIdentifier)) {
    return;
  }

  const zone = inject(NgZone);
  zone.runOutsideAngular(() => {
    import("posthog-js")
      .then(({ default: posthog }) =>
        posthog.init(apiKey, {
          api_host: apiHost,
          defaults: "2026-05-30",
        }),
      )
      .catch((reason: unknown) => console.error(reason));
  });
}
