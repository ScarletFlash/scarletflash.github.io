import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { getDeepestActivatedRoute } from '@app/app/utils';
import * as R from 'ramda';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AboutMePageStateService } from './services';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMePageComponent implements OnDestroy {
  private readonly _subscription: Subscription = new Subscription();

  private readonly _deepestActivatedRoute$: Observable<ActivatedRoute> = this._router.events.pipe(
    filter((event: RouterEvent) => event instanceof NavigationEnd || event instanceof ChildActivationEnd),
    map(() => this._activatedRoute),
    map((currentRoute: ActivatedRoute) => getDeepestActivatedRoute(currentRoute)),
    filter<ActivatedRoute>((deepestRoute: ActivatedRoute | null) => !R.isNil(deepestRoute))
  );

  private readonly _currentLocation$: Observable<Location> = this._deepestActivatedRoute$.pipe(
    map(() => this._location)
  );

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _location: Location,
    private readonly _aboutMePageStateService: AboutMePageStateService
  ) {
    this._subscription.add(this._updateBarExpansionOnRouteChanges());
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private _updateBarExpansionOnRouteChanges(): Subscription {
    return this._currentLocation$
      .pipe(map((currentLocation: Location) => currentLocation.isCurrentPathEqualTo('/')))
      .subscribe((pathIsEmpty: boolean) => {
        if (pathIsEmpty) {
          this._aboutMePageStateService.collapseDrawer();
          return;
        }

        this._aboutMePageStateService.expandDrawer();
      });
  }
}
