import { ChangeDetectionStrategy, Component, TrackByFunction, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as R from 'ramda';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent {
  public readonly barItems: string[] = ['skills'];

  constructor(private readonly _router: Router) {}

  public selectTabByName(tabName: string): void {
    const noTabWithSuchName: boolean = !this.barItems.includes(tabName);
    if (noTabWithSuchName) {
      return;
    }

    this._router.navigate([tabName]);
  }

  public readonly trackByName: TrackByFunction<string> = (_: number, item: string): string => item;

  private static _getDeepestActivatedRoute(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (R.isNil(activatedRoute?.firstChild)) {
      return activatedRoute;
    }
    return BarComponent._getDeepestActivatedRoute(activatedRoute?.firstChild);
  }
}
