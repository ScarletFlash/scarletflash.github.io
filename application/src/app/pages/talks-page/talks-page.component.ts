import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-talks-page',
  styleUrls: ['./talks-page.component.scss'],
  templateUrl: './talks-page.component.html'
})
export class TalksPageComponent {}
