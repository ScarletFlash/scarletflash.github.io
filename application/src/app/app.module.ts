import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [SharedModule, AppRoutingModule],
  providers: []
})
export class AppModule {}
