import { NgModule } from '@angular/core';
import { SharedModule } from '@app/app/shared';

import { AboutMeSkillsPageRoutingModule } from './about-me-skills-page-routing.module';
import { AboutMeSkillsPageComponent } from './about-me-skills-page.component';

@NgModule({
  declarations: [AboutMeSkillsPageComponent],
  imports: [SharedModule, AboutMeSkillsPageRoutingModule]
})
export class AboutMeSkillsPageModule {}
