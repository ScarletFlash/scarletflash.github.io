import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent, NavigationComponent],
  imports: [PagesRoutingModule, SharedModule]
})
export class PagesModule {}
