import { NgModule } from '@angular/core';
import { SharedModule } from '@app-shared';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { RowSectionComponent } from './row-section/row-section.component';

@NgModule({
  declarations: [MainPageComponent, RowSectionComponent],
  imports: [SharedModule, MainPageRoutingModule]
})
export class MainPageModule {}
