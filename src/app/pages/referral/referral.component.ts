import { Component, ViewEncapsulation } from '@angular/core';
import { ReferralsListComponent } from './components/referrals-list/referrals-list.component';

@Component({
  selector: 'app-referral',
  imports: [ReferralsListComponent],
  templateUrl: './referral.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ReferralComponent {}
