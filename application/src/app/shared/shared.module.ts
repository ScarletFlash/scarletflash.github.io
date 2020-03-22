import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularModule } from '@app/declarations';

import { StringifyPipe } from './pipes/stringify.pipe';

const CORE_MODULES: AngularModule[] = [CommonModule, RouterModule, HttpClientModule];

@NgModule({
  declarations: [StringifyPipe],
  imports: [...CORE_MODULES],
  exports: [...CORE_MODULES, StringifyPipe]
})
export class SharedModule {}
