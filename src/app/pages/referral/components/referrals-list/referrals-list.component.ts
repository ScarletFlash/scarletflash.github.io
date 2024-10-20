import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from "@angular/core";
import { ReferralCard } from "../../../../../declarations/interfaces/referral-card.interface";
import { ReferralsListItemComponent } from "../referrals-list-item/referrals-list-item.component";

@Component({
  selector: "app-referrals-list",
  standalone: true,
  imports: [ReferralsListItemComponent],
  templateUrl: "./referrals-list.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferralsListComponent {
  public readonly referrals: ReferralCard[] = [
    {
      name: "Arc",
      description:
        "A Chromium-based browser with AI enhancements and cool built-in tools",
      imageSrc: "/referrals/arc.svg",
      url: "https://arc.net/gift/dc4d6306",
    },
    {
      name: "Raycast",
      description:
        "AI-powered replacament for Spotlight with amazing integrations and extensions",
      imageSrc: "/referrals/raycast.svg",
      url: "https://raycast.com/?via=scarletflash",
    },
    {
      name: "Warp",
      description:
        "AI-powered terminal with scripts sharing and collaboration features",
      imageSrc: "/referrals/warp.svg",
      url: "https://app.warp.dev/referral/LQ9NGV",
    },
  ] as const;
}
