import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalksPageRoutingModule } from './talks-page-routing.module';
import { TalksPageComponent } from './talks-page.component';


@NgModule({
  declarations: [TalksPageComponent],
  imports: [
    CommonModule,
    TalksPageRoutingModule
  ]
})
export class TalksPageModule { }
