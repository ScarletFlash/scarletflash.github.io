import { ApplicationConfig, ErrorHandler, provideAppInitializer, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideClientHydration, withNoIncrementalHydration } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { PosthogErrorHandler } from "./error-handlers/posthog-error.handler";
import { initializePosthogAnalytics } from "./initializers/posthog-analytics.initializer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withNoIncrementalHydration()),
    provideAppInitializer(initializePosthogAnalytics),
    { provide: ErrorHandler, useClass: PosthogErrorHandler },
  ],
};
