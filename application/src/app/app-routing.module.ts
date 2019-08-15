import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () => import('./pages/main-page/main-page.module').then(module => module.MainPageModule),
    path: '',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
