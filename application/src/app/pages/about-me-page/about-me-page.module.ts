import { NgModule } from '@angular/core';
import { SharedModule } from '@app/app/shared';

import { AboutMePageRoutingModule } from './about-me-page-routing.module';
import { AboutMePageComponent } from './about-me-page.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [AboutMePageComponent, SkillsComponent],
  imports: [SharedModule, AboutMePageRoutingModule]
})
export class AboutMePageModule {}
