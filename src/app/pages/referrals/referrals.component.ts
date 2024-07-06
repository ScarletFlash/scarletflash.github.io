import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { XGlitchDirective } from './x-glitch.directive';

@Component({
  selector: 'app-referrals',
  standalone: true,
  imports: [XGlitchDirective],
  templateUrl: './referrals.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferralsComponent {}
