import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { MainRoutingModule } from '@app/pages/main/main-routing.module';
import { MainComponent } from '@app/pages/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
