import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: '/talks/wsl/1'
  },
  {
    component: MainPageComponent,
    path: '',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class MainPageRoutingModule {}
