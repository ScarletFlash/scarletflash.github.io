import { Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-current-job-button',
  imports: [],
  templateUrl: './current-job-button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CurrentJobButtonComponent {
  public readonly href = input.required<string>();
}
