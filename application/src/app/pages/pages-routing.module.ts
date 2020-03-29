import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import type { ErrorPageModule } from './error-page/error-page.module';
import type { MainPageModule } from './main-page/main-page.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Observable<Type<MainPageModule>> =>
      from(import('./main-page/main-page.module')).pipe(pluck('MainPageModule'))
  },
  {
    path: '**',
    loadChildren: (): Observable<Type<ErrorPageModule>> =>
      from(import('./error-page/error-page.module')).pipe(pluck('ErrorPageModule'))
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
