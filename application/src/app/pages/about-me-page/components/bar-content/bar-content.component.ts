import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AboutMePageStateService } from '../../services';

@Component({
  selector: 'app-bar-content',
  templateUrl: './bar-content.component.html',
  styleUrls: ['./bar-content.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarContentComponent {
  public readonly isCollapseButtonVisible$: Observable<boolean> = this._aboutMePageStateService.isDrawerExpanded$;

  constructor(private readonly _aboutMePageStateService: AboutMePageStateService, private readonly _router: Router) {}

  public collapseContent(): void {
    this._router.navigate(['.']);
  }
}
