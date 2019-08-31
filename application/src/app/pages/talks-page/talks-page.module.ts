import { NgModule } from '@angular/core';
import { SharedModule } from '@app-shared';

import { TalksPageRoutingModule } from './talks-page-routing.module';
import { TalksPageComponent } from './talks-page.component';
import { WhyDoYouNeedWslComponent } from './why-do-you-need-wsl/why-do-you-need-wsl.component';
import { WslFirstSlideComponent } from './why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component';
import { WslSecondSlideComponent } from './why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component';

@NgModule({
  declarations: [TalksPageComponent, WhyDoYouNeedWslComponent, WslFirstSlideComponent, WslSecondSlideComponent],
  imports: [SharedModule, TalksPageRoutingModule]
})
export class TalksPageModule {}
