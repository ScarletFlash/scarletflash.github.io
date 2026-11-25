import { ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter, TitleStrategy, withPreloading } from "@angular/router";

import { provideClientHydration, withNoIncrementalHydration } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { PosthogErrorHandler } from "./error-handlers/posthog-error.handler";
import { NeighbourPagePreloadingStrategy } from "./preloading-strategies/neighbour-page-preloading.strategy";
import { SiteTitleStrategy } from "./title-strategies/site-title.strategy";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(NeighbourPagePreloadingStrategy)),
    provideClientHydration(withNoIncrementalHydration()),
    { provide: ErrorHandler, useClass: PosthogErrorHandler },
    { provide: TitleStrategy, useClass: SiteTitleStrategy },
  ],
};
