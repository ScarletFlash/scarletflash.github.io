import { type Routes } from '@angular/router';
import { BackgroundMotion } from '../../../declarations/enums/background-motion.enum';
import { RouteDataKey } from '../../../declarations/enums/route-data-key.enum';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { [RouteDataKey.IsPageSequence]: true },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/first-screen-page/first-screen-page.component').then(
            ({ FirstScreenPageComponent }: typeof import('./pages/first-screen-page/first-screen-page.component')) =>
              FirstScreenPageComponent
          ),
        data: { [RouteDataKey.BackgroundMotion]: BackgroundMotion.Opening }
      },
      {
        path: 'experience/sibe',
        title: 'Sibe',
        loadComponent: () =>
          import('./pages/sibe-page/sibe-page.component').then(
            ({ SibePageComponent }: typeof import('./pages/sibe-page/sibe-page.component')) => SibePageComponent
          ),
        data: { [RouteDataKey.BackgroundMotion]: BackgroundMotion.Content }
      },
      {
        path: 'experience/bimeister',
        title: 'Bimeister',
        loadComponent: () =>
          import('./pages/bimeister-page/bimeister-page.component').then(
            ({ BimeisterPageComponent }: typeof import('./pages/bimeister-page/bimeister-page.component')) =>
              BimeisterPageComponent
          ),
        data: { [RouteDataKey.BackgroundMotion]: BackgroundMotion.Content }
      },
      {
        path: 'contacts',
        title: 'Contacts',
        loadComponent: () =>
          import('./pages/contacts-page/contacts-page.component').then(
            ({ ContactsPageComponent }: typeof import('./pages/contacts-page/contacts-page.component')) =>
              ContactsPageComponent
          ),
        data: { [RouteDataKey.BackgroundMotion]: BackgroundMotion.Closing }
      }
    ]
  }
];
