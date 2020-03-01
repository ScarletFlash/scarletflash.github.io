import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [LayoutComponent, PagesComponent],
  imports: [SharedModule, PagesRoutingModule]
})
export class PagesModule {}
