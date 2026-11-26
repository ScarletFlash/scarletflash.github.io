import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation, input } from '@angular/core';
import { type ReferralCard } from '../../../../../declarations/interfaces/referral-card.interface';
import { type DataComponent } from '../../../../../declarations/types/data-component.type';

@Component({
  selector: 'app-referrals-list-item',
  imports: [NgOptimizedImage],
  templateUrl: './referrals-list-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ReferralsListItemComponent implements DataComponent<ReferralCard> {
  public readonly name = input.required<string>();
  public readonly imageSrc = input.required<string>();
  public readonly description = input.required<string>();
  public readonly url = input.required<string>();
}
