import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import type { Referral } from '../../declarations/referral.interface';
import { XGlitchDirective } from './x-glitch.directive';

@Component({
  selector: 'app-referrals',
  standalone: true,
  imports: [XGlitchDirective, NgOptimizedImage],
  templateUrl: './referrals.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferralsComponent {
  public readonly referrals: Referral[] = [
    {
      name: 'Arc',
      description: 'A Chromium-based browser with AI enhancements and cool built-in tools',
      logoUrl: '/referrals/arc.svg',
      url: 'https://arc.net/gift/dc4d6306'
    },
    {
      name: 'Raycast',
      description: 'AI-powered replacament for Spotlight with amazing integrations and extensions',
      logoUrl: '/referrals/raycast.svg',
      url: 'https://raycast.com/?via=scarletflash'
    },
    {
      name: 'Warp',
      description: 'AI-powered terminal with scripts sharing and collaboration features',
      logoUrl: '/referrals/warp.svg',
      url: 'https://app.warp.dev/referral/LQ9NGV'
    }
  ];
}
