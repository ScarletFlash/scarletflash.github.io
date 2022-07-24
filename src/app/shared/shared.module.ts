import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [CommonModule, ObserversModule],
  declarations: [ButtonComponent],
  exports: [ObserversModule, CommonModule, ButtonComponent]
})
export class SharedModule {}
