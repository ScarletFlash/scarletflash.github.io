import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { RowSectionComponent } from './row-section/row-section.component';
import { TickerComponent } from './ticker/ticker.component';

@NgModule({
  declarations: [MainPageComponent, RowSectionComponent, TickerComponent],
  imports: [CommonModule, MainPageRoutingModule]
})
export class MainPageModule {}
