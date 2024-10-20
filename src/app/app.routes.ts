import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "referral",
    loadComponent: () =>
      import("./pages/referral/referral.component").then(
        ({ ReferralComponent }) => ReferralComponent
      ),
  },
];
