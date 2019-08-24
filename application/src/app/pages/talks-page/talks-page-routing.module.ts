import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TalksPageComponent } from './talks-page.component';

const routes: Routes = [
  {
    component: TalksPageComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TalksPageRoutingModule {}
