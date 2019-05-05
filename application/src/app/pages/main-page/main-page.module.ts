import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [SharedModule, MainPageRoutingModule]
})
export class MainPageModule {}
