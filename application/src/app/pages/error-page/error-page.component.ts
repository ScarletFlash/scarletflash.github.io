import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent {}
