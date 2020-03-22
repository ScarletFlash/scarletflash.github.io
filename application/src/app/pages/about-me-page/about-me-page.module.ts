import { NgModule } from '@angular/core';
import { SharedModule } from '@app/app/shared';

import { AboutMePageRoutingModule } from './about-me-page-routing.module';
import { AboutMePageComponent } from './about-me-page.component';
import { BackgroundComponent, BarComponent, BarContentComponent, TitleComponent } from './components';
import { AboutMePageStateService } from './services';
import { BarContentCollapseButtonComponent } from './components/bar-content-collapse-button/bar-content-collapse-button.component';

@NgModule({
  declarations: [AboutMePageComponent, BarComponent, BackgroundComponent, TitleComponent, BarContentComponent, BarContentCollapseButtonComponent],
  imports: [SharedModule, AboutMePageRoutingModule],
  providers: [AboutMePageStateService]
})
export class AboutMePageModule {}
