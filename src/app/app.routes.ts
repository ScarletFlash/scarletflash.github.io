import { type Routes } from '@angular/router';
import type * as HomeRoutesModule from './pages/home/home.routes';
import type * as ReferralComponentModule from './pages/referral/referral.component';

export const routes: Routes = [
  {
    path: 'referral',
    title: 'Referral',
    loadComponent: () =>
      import('./pages/referral/referral.component').then(
        ({ ReferralComponent }: typeof ReferralComponentModule) => ReferralComponent
      )
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.routes').then(({ homeRoutes }: typeof HomeRoutesModule) => homeRoutes)
  },
  {
    path: '*',
    redirectTo: ''
  }
];
