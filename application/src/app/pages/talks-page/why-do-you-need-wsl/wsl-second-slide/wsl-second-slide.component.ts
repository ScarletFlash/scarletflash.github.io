import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-wsl-second-slide',
  styleUrls: ['./wsl-second-slide.component.scss'],
  templateUrl: './wsl-second-slide.component.html'
})
export class WslSecondSlideComponent {}
