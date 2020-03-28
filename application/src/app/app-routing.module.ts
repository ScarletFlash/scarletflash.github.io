import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path: '*',
    loadChildren: (): Observable<Type<PagesRoutingModule>> => newFunction().pipe(map((file) => file.PagesRoutingModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
function newFunction(): Observable<any> {
  return from(import('./pages/pages-routing.module'));
}
