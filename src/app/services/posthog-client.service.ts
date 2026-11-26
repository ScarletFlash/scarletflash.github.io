import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Service, inject, isDevMode } from '@angular/core';
import type { PostHog } from 'posthog-js';
import type * as PosthogModule from 'posthog-js';

@Service()
export class PosthogClientService {
  private readonly platformIdentifier: object = inject(PLATFORM_ID);

  public readonly client: Promise<PostHog | null> = Promise.resolve(null);

  constructor() {
    if (isDevMode()) {
      return;
    }

    const projectToken = process.env['POSTHOG_PROJECT_TOKEN'];
    if (projectToken === undefined || projectToken.length === 0) {
      throw new Error('POSTHOG_PROJECT_TOKEN is not configured at build time.');
    }

    const apiHost = process.env['POSTHOG_API_HOST'];
    if (apiHost === undefined || apiHost.length === 0) {
      throw new Error('POSTHOG_API_HOST is not configured at build time.');
    }

    const uiHost = process.env['POSTHOG_UI_HOST'];
    if (uiHost === undefined || uiHost.length === 0) {
      throw new Error('POSTHOG_UI_HOST is not configured at build time.');
    }

    if (!isPlatformBrowser(this.platformIdentifier)) {
      return;
    }

    this.client = import('posthog-js').then(({ default: posthog }: typeof PosthogModule) =>
      posthog.init(projectToken, {
        api_host: apiHost,
        ui_host: uiHost,
        defaults: '2026-08-30'
      })
    );
  }
}
