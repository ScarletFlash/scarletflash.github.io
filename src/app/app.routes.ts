import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/home/home.component").then(
        ({ HomeComponent }) => HomeComponent
      ),
  },
  {
    path: "referral",
    loadComponent: () =>
      import("./pages/referral/referral.component").then(
        ({ ReferralComponent }) => ReferralComponent
      ),
  },
  {
    path: "*",
    redirectTo: "",
  },
];
