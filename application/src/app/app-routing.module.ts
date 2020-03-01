import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<PagesModule> => import('./pages/pages.module').then(file => file.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
