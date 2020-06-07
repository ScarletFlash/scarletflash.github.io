import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPosition } from '@src/declarations/enums/navigation-position.enum';
import { from, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { PagesComponent } from './pages.component';

import type { ErrorPageModule } from './error-page/error-page.module';
import type { MainPageModule } from './main-page/main-page.module';
import type { ContactsPageModule } from './contacts-page/contacts-page.module';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    data: {
      navigationPosition: NavigationPosition.Bottom
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        data: {
          navigationPosition: NavigationPosition.Bottom
        },
        loadChildren: (): Observable<Type<MainPageModule>> =>
          from(import('./main-page/main-page.module')).pipe(pluck('MainPageModule'))
      },
      {
        path: 'contacts',
        pathMatch: 'full',
        data: {
          navigationPosition: NavigationPosition.Bottom
        },
        loadChildren: (): Observable<Type<ContactsPageModule>> =>
          from(import('./contacts-page/contacts-page.module')).pipe(pluck('ContactsPageModule'))
      },
      {
        path: '**',
        data: {
          navigationPosition: NavigationPosition.Bottom
        },
        loadChildren: (): Observable<Type<ErrorPageModule>> =>
          from(import('./error-page/error-page.module')).pipe(pluck('ErrorPageModule'))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
