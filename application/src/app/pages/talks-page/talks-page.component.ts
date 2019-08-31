import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filterNotNullOrUndefined, getDeepestActivatedRoute } from '@app-functions';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, startWith, switchMap } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-talks-page',
  styleUrls: ['./talks-page.component.scss'],
  templateUrl: './talks-page.component.html'
})
export class TalksPageComponent {
  public subtitle$: Observable<string> = this._router.events.pipe(
    filter((innerEvent: RouterEvent) => innerEvent instanceof NavigationEnd),
    startWith(this._activatedRoute),
    map(() => getDeepestActivatedRoute(this._activatedRoute)),
    switchMap((innerActivatedRoute: ActivatedRoute) => innerActivatedRoute.data),
    filterNotNullOrUndefined(),
    filter((innerData: Data) => innerData.hasOwnProperty('subtitle')),
    map((innerData: Data) => innerData.subtitle),
    distinctUntilChanged(),
    shareReplay(1)
  );
  constructor(private readonly _activatedRoute: ActivatedRoute, private readonly _router: Router) {}
}
