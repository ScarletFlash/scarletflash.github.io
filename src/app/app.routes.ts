import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "referral",
    loadComponent: () =>
      import("./pages/referral/referral.component").then(
        ({ ReferralComponent }: typeof import("./pages/referral/referral.component")) =>
          ReferralComponent,
      ),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.routes").then(
        ({ homeRoutes }: typeof import("./pages/home/home.routes")) => homeRoutes,
      ),
  },
  {
    path: "*",
    redirectTo: "",
  },
];
