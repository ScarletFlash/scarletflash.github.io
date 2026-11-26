import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation, input, type InputSignal } from '@angular/core';
import { type ReferralCard } from '../../../../../declarations/interfaces/referral-card.interface';
import { type DataComponent } from '../../../../../declarations/types/data-component.type';

@Component({
  selector: 'app-referrals-list-item',
  imports: [NgOptimizedImage],
  templateUrl: './referrals-list-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ReferralsListItemComponent implements DataComponent<ReferralCard> {
  public readonly name: InputSignal<string> = input.required();
  public readonly imageSrc: InputSignal<string> = input.required();
  public readonly description: InputSignal<string> = input.required();
  public readonly url: InputSignal<string> = input.required();
}
