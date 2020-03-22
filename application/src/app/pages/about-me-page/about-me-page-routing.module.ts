import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeSkillsPageModule } from '../about-me-skills-page/about-me-skills-page.module';
import { AboutMePageComponent } from './about-me-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutMePageComponent,
    children: [
      {
        path: 'skills',
        loadChildren: (): Promise<Type<AboutMeSkillsPageModule>> =>
          import('./../about-me-skills-page/about-me-skills-page.module').then(module => module.AboutMeSkillsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMePageRoutingModule {}
