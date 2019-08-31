import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router, RouterEvent, UrlSegment } from '@angular/router';
import { EventKey } from '@app-declarations';
import { filterNotNullOrUndefined, getDeepestActivatedRoute } from '@app-functions';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, startWith, switchMap, take } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-why-do-you-need-wsl',
  styleUrls: ['./why-do-you-need-wsl.component.scss'],
  templateUrl: './why-do-you-need-wsl.component.html'
})
export class WhyDoYouNeedWslComponent implements OnInit {
  public readonly slideHeightPx$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public readonly slideWidthPx$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private readonly _deepestActivatedRoute$: Observable<ActivatedRoute> = this._router.events.pipe(
    filter((innerEvent: RouterEvent) => innerEvent instanceof NavigationEnd),
    startWith(this._activatedRoute),
    map(() => getDeepestActivatedRoute(this._activatedRoute)),
    shareReplay(1)
  );
  private readonly _routeData$: Observable<Data> = this._deepestActivatedRoute$.pipe(
    switchMap((innerActivatedRoute: ActivatedRoute) => innerActivatedRoute.data),
    filterNotNullOrUndefined(),
    shareReplay(1)
  );

  private readonly _currentSlidePath$: Observable<number> = this._deepestActivatedRoute$.pipe(
    switchMap((innerActivatedRoute: ActivatedRoute) => innerActivatedRoute.url),
    map((innerUrlSegments: UrlSegment[]) => innerUrlSegments[0]),
    filterNotNullOrUndefined(),
    map((innerFirstSegment: UrlSegment) => {
      const decimalNumberSystemRadix: number = 10;
      return Number.parseInt(innerFirstSegment.path, decimalNumberSystemRadix);
    }),
    shareReplay(1)
  );

  private readonly _lastSlidePath$: Observable<number> = this._routeData$.pipe(
    filter((innerData: Data) => innerData.hasOwnProperty('lastSlideIndex')),
    map((innerData: Data) => innerData.lastSlideIndex),
    distinctUntilChanged(),
    shareReplay(1)
  );

  private readonly _firstSlidePath$: Observable<number> = this._routeData$.pipe(
    filter((innerData: Data) => innerData.hasOwnProperty('firstSlideIndex')),
    map((innerData: Data) => innerData.firstSlideIndex),
    distinctUntilChanged(),
    shareReplay(1)
  );

  constructor(
    private readonly _hostElement: ElementRef<HTMLElement>,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  @HostListener('window:resize') public updateSlideElementHeight(): void {
    this.updateSlideSize();
  }

  @HostListener('window:keydown', ['$event']) public processKeyPressEvent(event: KeyboardEvent): void {
    const arrowLeftPressed: boolean = event.key === EventKey.ArrowLeft;
    const arrowRightPressed: boolean = event.key === EventKey.ArrowRight;
    if (!arrowLeftPressed && !arrowRightPressed) {
      return;
    }
    if (arrowLeftPressed) {
      combineLatest([this._currentSlidePath$, this._firstSlidePath$])
        .pipe(
          map((innerData: [number, number]) => {
            enum Aggregated {
              currentSlidePath,
              firstSlidePath
            }
            const currentSlideIndex: number = innerData[Aggregated.currentSlidePath];
            const firstSlideIndex: number = innerData[Aggregated.firstSlidePath];
            return currentSlideIndex <= firstSlideIndex ? firstSlideIndex : currentSlideIndex - 1;
          }),
          take(1)
        )
        .subscribe((targetIndex: number) => this._router.navigateByUrl(`/talks/wsl/${targetIndex}`));
      return;
    }
    combineLatest([this._currentSlidePath$, this._lastSlidePath$])
      .pipe(
        map((innerData: [number, number]) => {
          enum Aggregated {
            currentSlidePath,
            lastSlidePath
          }
          const currentSlideIndex: number = innerData[Aggregated.currentSlidePath];
          const lastSlideIndex: number = innerData[Aggregated.lastSlidePath];
          return currentSlideIndex >= lastSlideIndex ? lastSlideIndex : currentSlideIndex + 1;
        }),
        take(1)
      )
      .subscribe((targetIndex: number) => this._router.navigateByUrl(`/talks/wsl/${targetIndex}`));

    this._lastSlidePath$.pipe();
  }

  public ngOnInit(): void {
    this.updateSlideSize();
  }

  private updateSlideSize(): void {
    const currentHostElementWidthPx: number = this._hostElement.nativeElement.getBoundingClientRect().width;
    const currentHostElementHeightPx: number = this._hostElement.nativeElement.getBoundingClientRect().height;
    const horizontalRatio: number = 16;
    const verticalRatio: number = 9;
    const slideWidthPx: number = currentHostElementWidthPx;
    const slideHeightPx: number = (currentHostElementWidthPx / horizontalRatio) * verticalRatio;
    if (slideHeightPx <= currentHostElementHeightPx) {
      this.slideWidthPx$.next(slideWidthPx);
      this.slideHeightPx$.next(slideHeightPx);
      return;
    }
    this.slideWidthPx$.next((currentHostElementHeightPx / verticalRatio) * horizontalRatio);
    this.slideHeightPx$.next(currentHostElementHeightPx);
  }
}
