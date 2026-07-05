import { ApplicationConfig, provideAppInitializer, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideClientHydration, withNoIncrementalHydration } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { initializePosthogAnalytics } from "./initializers/posthog-analytics.initializer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withNoIncrementalHydration()),
    provideAppInitializer(initializePosthogAnalytics),
  ],
};
