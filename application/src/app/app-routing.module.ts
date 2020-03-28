import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: (): Observable<Type<PagesModule>> => from(import('./pages/pages.module')).pipe(pluck('PagesModule'))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
