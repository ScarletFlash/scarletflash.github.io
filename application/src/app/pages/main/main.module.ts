import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from '@app/pages/main/main-routing.module';
import { MainComponent } from '@app/pages/main/main.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [CommonModule, SharedModule, MainRoutingModule],
  declarations: [MainComponent]
})
export class MainModule {}
