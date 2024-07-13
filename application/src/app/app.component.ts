import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './background/background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundComponent],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public readonly title: string = 'frontend';
}
