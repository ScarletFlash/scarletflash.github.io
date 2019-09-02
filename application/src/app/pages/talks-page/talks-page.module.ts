import { NgModule } from '@angular/core';
import { SharedModule } from '@app-shared';

import { TalksPageRoutingModule } from './talks-page-routing.module';
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

@NgModule({
  declarations: [
    TalksPageComponent,
    WhyDoYouNeedWslComponent,
    WslFirstSlideComponent,
    WslSecondSlideComponent,
    WslThirdSlideComponent,
    WslForthSlideComponent,
    WslFifthSlideComponent,
    WslSixthSlideComponent,
    WslSeventhSlideComponent,
    WslEighthSlideComponent,
    WslNinthSlideComponent
  ],
  imports: [SharedModule, TalksPageRoutingModule]
})
export class TalksPageModule {}
