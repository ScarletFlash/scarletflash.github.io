import { Component, inject, ViewEncapsulation } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Router, RouterOutlet } from "@angular/router";
import { filter, take } from "rxjs";
import { isNavigationEnd } from "../utilities/is-navigation-end.utility";
import { UrlTagCaptureService } from "./services/url-tag-capture.service";

@Component({
    selector: "app-root",
    imports: [RouterOutlet],
    templateUrl: "./app.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private readonly urlTagCaptureService: UrlTagCaptureService = inject(UrlTagCaptureService);

  constructor() {
    inject(Router)
      .events.pipe(
        filter(isNavigationEnd),
        take(1),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.urlTagCaptureService.captureAndClearTag());
  }
}
