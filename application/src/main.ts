import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/current.env';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.ShadowDom
  })
  // tslint:disable-next-line: no-console
  .catch(err => console.error(err));
