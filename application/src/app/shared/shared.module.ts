import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const angularServiceModules: any[] = [CommonModule, BrowserAnimationsModule];
const materialComponents: any[] = [MatButtonModule, MatCheckboxModule];

@NgModule({
  declarations: [],
  exports: [...angularServiceModules, ...materialComponents],
  imports: [...angularServiceModules, ...materialComponents]
})
export class SharedModule {}
