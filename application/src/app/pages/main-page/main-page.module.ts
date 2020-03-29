import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BackgroundComponent, TitleComponent } from './components/';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [MainPageComponent, BackgroundComponent, TitleComponent],
  imports: [CommonModule, MainPageRoutingModule]
})
export class MainPageModule {}
