import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from "@angular/core";
import { ReferralsListComponent } from "./components/referrals-list/referrals-list.component";

@Component({
  selector: "app-referral",
  standalone: true,
  imports: [ReferralsListComponent],
  templateUrl: "./referral.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferralComponent {}
