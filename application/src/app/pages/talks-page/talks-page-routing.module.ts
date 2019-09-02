import { NgModule } from '@angular/core';
import { Data, Route, RouterModule, Routes } from '@angular/router';
import { SlidePosition } from '@app-declarations';

import { TalksPageComponent } from './talks-page.component';
import { WhyDoYouNeedWslComponent } from './why-do-you-need-wsl/why-do-you-need-wsl.component';
import { WslEighthSlideComponent } from './why-do-you-need-wsl/wsl-eighth-slide/wsl-eighth-slide.component';
import { WslFifthSlideComponent } from './why-do-you-need-wsl/wsl-fifth-slide/wsl-fifth-slide.component';
import { WslFirstSlideComponent } from './why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component';
import { WslForthSlideComponent } from './why-do-you-need-wsl/wsl-forth-slide/wsl-forth-slide.component';
import { WslNinthSlideComponent } from './why-do-you-need-wsl/wsl-ninth-slide/wsl-ninth-slide.component';
import { WslSecondSlideComponent } from './why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component';
import { WslSeventhSlideComponent } from './why-do-you-need-wsl/wsl-seventh-slide/wsl-seventh-slide.component';
import { WslSixthSlideComponent } from './why-do-you-need-wsl/wsl-sixth-slide/wsl-sixth-slide.component';
import { WslThirdSlideComponent } from './why-do-you-need-wsl/wsl-third-slide/wsl-third-slide.component';

const whyDoYouNeedWslRouteData: Data = {
  firstSlideIndex: 1,
  lastSlideIndex: 9,
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
    },
    {
      component: WslThirdSlideComponent,
      data: { ...whyDoYouNeedWslRouteData, animation: SlidePosition.Last },
      path: '3'
    },
    {
      component: WslForthSlideComponent,
      data: { ...whyDoYouNeedWslRouteData, animation: SlidePosition.Last },
      path: '4'
    },
    {
      component: WslFifthSlideComponent,
      data: { ...whyDoYouNeedWslRouteData, animation: SlidePosition.Last },
      path: '5'
    },
    {
      component: WslSixthSlideComponent,
      data: { ...whyDoYouNeedWslRouteData, animation: SlidePosition.Last },
      path: '6'
    },
    {
      component: WslSeventhSlideComponent,
      data: { ...whyDoYouNeedWslRouteData, animation: SlidePosition.Last },
      path: '7'
    },
    {
      component: WslEighthSlideComponent,
      data: { ...whyDoYouNeedWslRouteData, animation: SlidePosition.Last },
      path: '8'
    },
    {
      component: WslNinthSlideComponent,
      data: { ...whyDoYouNeedWslRouteData, animation: SlidePosition.Last },
      path: '9'
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
