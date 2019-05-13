import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const sharedComponents: any[] = [FooterComponent, HeaderComponent];
const angularServiceModules: any[] = [CommonModule, BrowserAnimationsModule];
const materialComponents: any[] = [MatButtonModule, MatCheckboxModule, MatToolbarModule];

@NgModule({
  declarations: [...sharedComponents],
  exports: [...angularServiceModules, ...materialComponents, ...sharedComponents],
  imports: [...angularServiceModules, ...materialComponents]
})
export class SharedModule {}
