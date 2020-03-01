import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularModule } from '@app/declarations';

const CORE_MODULES: AngularModule[] = [CommonModule];

@NgModule({
  declarations: [],
  imports: [...CORE_MODULES],
  exports: [...CORE_MODULES]
})
export class SharedModule {}
