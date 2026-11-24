import { ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideClientHydration, withNoIncrementalHydration } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { PosthogErrorHandler } from "./error-handlers/posthog-error.handler";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withNoIncrementalHydration()),
    { provide: ErrorHandler, useClass: PosthogErrorHandler },
  ],
};
