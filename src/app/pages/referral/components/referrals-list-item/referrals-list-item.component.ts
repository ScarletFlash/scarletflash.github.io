import { NgOptimizedImage } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  ViewEncapsulation,
} from "@angular/core";
import { ReferralCard } from "../../../../../declarations/interfaces/referral-card.interface";
import { DataComponent } from "../../../../../declarations/types/data-component.type";

@Component({
  selector: "app-referrals-list-item",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./referrals-list-item.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferralsListItemComponent implements DataComponent<ReferralCard> {
  public name: InputSignal<string> = input.required();
  public imageSrc: InputSignal<string> = input.required();
  public description: InputSignal<string> = input.required();
  public url: InputSignal<string> = input.required();
}
