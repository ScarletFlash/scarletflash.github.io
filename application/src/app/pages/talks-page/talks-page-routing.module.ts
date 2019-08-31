import { NgModule } from '@angular/core';
import { Data, Route, RouterModule, Routes } from '@angular/router';
import { SlidePosition } from '@app-declarations';

import { TalksPageComponent } from './talks-page.component';
import { WhyDoYouNeedWslComponent } from './why-do-you-need-wsl/why-do-you-need-wsl.component';
import { WslFirstSlideComponent } from './why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component';
import { WslSecondSlideComponent } from './why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component';

const whyDoYouNeedWslRouteData: Data = {
  firstSlideIndex: 1,
  lastSlideIndex: 2,
  subtitle: 'Why Do You Need WSL'
};
const whyDoYouNeedWslRoute: Route = {
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '1'
    },
    {
      component: WslFirstSlideComponent,
      data: { ...whyDoYouNeedWslRouteData, animation: SlidePosition.First },
      path: '1'
    },
    {
      component: WslSecondSlideComponent,
      data: { ...whyDoYouNeedWslRouteData, animation: SlidePosition.Last },
      path: '2'
    }
  ],
  component: WhyDoYouNeedWslComponent,
  data: whyDoYouNeedWslRouteData,
  path: 'wsl'
};

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'wsl'
  },
  {
    children: [whyDoYouNeedWslRoute],
    component: TalksPageComponent,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TalksPageRoutingModule {}
