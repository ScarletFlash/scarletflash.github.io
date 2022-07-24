import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './error-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPageRoutingModule {}
