import { ErrorHandler, inject, provideBrowserGlobalErrorListeners, type ApplicationConfig } from '@angular/core';
import { provideClientHydration, withNoIncrementalHydration } from '@angular/platform-browser';
import {
  TitleStrategy,
  provideRouter,
  withPreloading,
  withViewTransitions,
  type ViewTransitionInfo
} from '@angular/router';
import { routes } from './app.routes';
import { PosthogErrorHandler } from './error-handlers/posthog-error.handler';
import { NeighbourPagePreloadingStrategy } from './preloading-strategies/neighbour-page-preloading.strategy';
import { PageSlideService } from './services/page-slide.service';
import { SiteTitleStrategy } from './title-strategies/site-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withPreloading(NeighbourPagePreloadingStrategy),
      withViewTransitions({
        skipInitialTransition: true,
        onViewTransitionCreated: (viewTransitionInformation: ViewTransitionInfo) => {
          inject(PageSlideService).slide(viewTransitionInformation);
        }
      })
    ),
    provideClientHydration(withNoIncrementalHydration()),
    { provide: ErrorHandler, useClass: PosthogErrorHandler },
    { provide: TitleStrategy, useClass: SiteTitleStrategy }
  ]
};
