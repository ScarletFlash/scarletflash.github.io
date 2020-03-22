import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { AssetsRequestsService } from '@app/services';
import * as R from 'ramda';
import { merge, Notification, Observable, of } from 'rxjs';
import { dematerialize, filter, map, materialize, pluck, shareReplay, tap } from 'rxjs/operators';

import { AboutMePageStateService } from '../../services';

const INITIAL_BACKGROUND_STYLE: string = '#3d3d3d';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundComponent {
  public readonly isDrawerExpanded$: Observable<boolean> = this._aboutMePageStateService.isDrawerExpanded$.pipe(
    shareReplay(1)
  );

  private readonly _backgroundImageUrl$: Observable<string> = this._assetsRequestsService
    .getFileFromAssets('/images/background.jpg')
    .pipe(
      filter((event: HttpEvent<Blob>) => event.type === HttpEventType.Response),
      pluck<HttpResponse<Blob>, Blob>('body'),
      map((file: Blob) => URL.createObjectURL(file)),
      materialize(),
      map((notification: Notification<string>) =>
        notification.kind === 'E' ? Notification.createNext(null) : notification
      ),
      dematerialize(),
      filter<string>((objectUrl: string | null) => !R.isNil(objectUrl)),
      tap(console.warn)
    );

  private readonly _backgroundColor$: Observable<string> = of(INITIAL_BACKGROUND_STYLE);

  public readonly backgroundStyle$: Observable<SafeStyle> = merge(
    this._backgroundColor$,
    this._backgroundImageUrl$.pipe(map((imageUrl: string) => `url(${imageUrl}) no-repeat center center / cover`))
  ).pipe(map((unsafeStyle: string) => this._domSanitizer.bypassSecurityTrustStyle(unsafeStyle)));

  constructor(
    private readonly _assetsRequestsService: AssetsRequestsService,
    private readonly _domSanitizer: DomSanitizer,
    private readonly _aboutMePageStateService: AboutMePageStateService
  ) {}
}
