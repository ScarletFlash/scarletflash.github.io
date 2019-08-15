import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-page',
  styleUrls: ['./main-page.component.scss'],
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  public tickerValues: string[] = [
    'Linter lover',
    'Frontend developer at SNH MeisterSoft',
    'Full-Stack developer at home'
  ];
}
