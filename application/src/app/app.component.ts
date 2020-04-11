import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { getDeepestActivatedRoute } from '@_utils/get-deepest-activated-route.util';
import { filterByInstanceOf, filterNotNill } from '@_utils/rxjs-operators';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilKeyChanged, map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();

  private readonly navigationEndEvents$: Observable<RouterEvent> = this.router.events.pipe(
    filterNotNill(),
    filterByInstanceOf<Event, RouterEvent>(RouterEvent),
    filterByInstanceOf<RouterEvent, NavigationEnd>(NavigationEnd),
    distinctUntilKeyChanged('url'),
    shareReplay(1)
  );

  private readonly deepestActivatedRoute$: Observable<ActivatedRoute> = this.navigationEndEvents$.pipe(
    map(() => this.activatedRoute),
    filterNotNill(),
    map((activatedRoute: ActivatedRoute) => getDeepestActivatedRoute(activatedRoute)),
    filterNotNill()
  );

  private readonly deepestActivatedRouteData$: Observable<Data> = this.deepestActivatedRoute$.pipe(
    switchMap((deepestActivatedRoute: ActivatedRoute) => deepestActivatedRoute.data)
  );

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.subscription.add(this.deepestActivatedRouteData$.subscribe());
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
