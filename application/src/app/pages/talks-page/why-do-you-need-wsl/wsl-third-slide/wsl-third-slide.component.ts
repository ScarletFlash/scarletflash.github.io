import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-wsl-third-slide',
  styleUrls: ['./wsl-third-slide.component.scss'],
  templateUrl: './wsl-third-slide.component.html'
})
export class WslThirdSlideComponent {}
