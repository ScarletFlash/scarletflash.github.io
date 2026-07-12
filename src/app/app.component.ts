import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UrlTagCaptureService } from "./services/url-tag-capture.service";

@Component({
    selector: "app-root",
    imports: [RouterOutlet],
    templateUrl: "./app.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private readonly urlTagCaptureService = inject(UrlTagCaptureService);

  constructor() {
    afterNextRender(() => this.urlTagCaptureService.captureAndClearTag());
  }
}
