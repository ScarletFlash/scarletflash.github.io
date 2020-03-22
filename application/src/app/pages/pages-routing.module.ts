import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMePageModule } from './about-me-page/about-me-page.module';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: (): Promise<AboutMePageModule> =>
          import('./about-me-page/about-me-page.module').then(file => file.AboutMePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
