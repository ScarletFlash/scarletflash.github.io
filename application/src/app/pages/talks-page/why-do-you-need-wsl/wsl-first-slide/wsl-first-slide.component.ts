import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-wsl-first-slide',
  styleUrls: ['./wsl-first-slide.component.scss'],
  templateUrl: './wsl-first-slide.component.html'
})
export class WslFirstSlideComponent {}
