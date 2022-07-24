import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Data, Event, NavigationEnd, Router } from '@angular/router';
import { NavigationPosition } from '@src/declarations/enums/navigation-position.enum';
import { getNestedRoutesData } from '@src/utils/get-nested-routes-data.util';
import { auditTime, distinctUntilChanged, filter, map, shareReplay, switchMap } from 'rxjs/operators';

import type { Observable } from 'rxjs';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesComponent {
  public readonly currentNavigationPosition$: Observable<NavigationPosition> = this.router.events.pipe(
    filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
    auditTime(500),
    switchMap(() => getNestedRoutesData(this.activatedRoute)),
    map((routeData: Data) =>
      routeData.hasOwnProperty('navigationPosition') ? routeData.navigationPosition : NavigationPosition.Bottom
    ),
    distinctUntilChanged(),
    shareReplay(1)
  );

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly router: Router) {}
}
