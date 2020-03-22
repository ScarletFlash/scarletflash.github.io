import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-me-skills-page',
  templateUrl: './about-me-skills-page.component.html',
  styleUrls: ['./about-me-skills-page.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeSkillsPageComponent {}
