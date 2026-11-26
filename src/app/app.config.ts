import { ErrorHandler, provideBrowserGlobalErrorListeners, type ApplicationConfig } from '@angular/core';
import { provideClientHydration, withNoIncrementalHydration } from '@angular/platform-browser';
import { TitleStrategy, provideRouter, withPreloading, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { PosthogErrorHandler } from './error-handlers/posthog-error.handler';
import { NeighbourPagePreloadingStrategy } from './preloading-strategies/neighbour-page-preloading.strategy';
import { SiteTitleStrategy } from './title-strategies/site-title.strategy';
import { slidePageViewTransition } from './view-transitions/slide-page.view-transition';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withPreloading(NeighbourPagePreloadingStrategy),
      withViewTransitions({
        skipInitialTransition: true,
        onViewTransitionCreated: slidePageViewTransition
      })
    ),
    provideClientHydration(withNoIncrementalHydration()),
    { provide: ErrorHandler, useClass: PosthogErrorHandler },
    { provide: TitleStrategy, useClass: SiteTitleStrategy }
  ]
};
