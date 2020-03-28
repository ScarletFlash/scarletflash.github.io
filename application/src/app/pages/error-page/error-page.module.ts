import { NgModule } from '@angular/core';

import { ErrorPageRoutingModule } from './error-page-routing.module';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [ErrorPageRoutingModule]
})
export class ErrorPageModule {}
