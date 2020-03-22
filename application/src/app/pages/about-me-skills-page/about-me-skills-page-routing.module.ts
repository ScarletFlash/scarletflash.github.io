import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeSkillsPageComponent } from './about-me-skills-page.component';

const routes: Routes = [{ path: '', component: AboutMeSkillsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeSkillsPageRoutingModule {}
