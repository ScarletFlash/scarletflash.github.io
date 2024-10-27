import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-current-job-button",
  standalone: true,
  imports: [],
  templateUrl: "./current-job-button.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentJobButtonComponent {
  public readonly href: InputSignal<string> = input.required<string>();
}
