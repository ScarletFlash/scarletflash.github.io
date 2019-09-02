import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-wsl-forth-slide',
  styleUrls: ['./wsl-forth-slide.component.scss'],
  templateUrl: './wsl-forth-slide.component.html'
})
export class WslForthSlideComponent {}
