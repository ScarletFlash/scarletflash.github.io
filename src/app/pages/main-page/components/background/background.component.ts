import { state, style, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { filterNotNill } from '@src/utils/rxjs-operators/filter-not-nill.operator';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, map, shareReplay, take } from 'rxjs/operators';

import type { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import type { AssetsRequestsService } from '@src/app/services/assets-requests.service';
type PlaceHolderState = 'true' | 'false';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('placeHolderIsVisible', [
      state(
        'void',
        style({
          opacity: 1
        })
      ),
      state(
        'false',
        style({
          opacity: 0
        })
      ),
      state(
        'true',
        style({
          opacity: 1
        })
      )
    ])
  ]
})
export class BackgroundComponent implements AfterViewInit {
  public readonly placeHolderIsVisible$: BehaviorSubject<PlaceHolderState> = new BehaviorSubject<PlaceHolderState>(
    'true'
  );

  private readonly image$: Observable<Blob> = this.assetsRequestsService
    .getMainPageBackgroundImage()
    .pipe(shareReplay(1));

  private readonly imageUrl$: Observable<string> = this.image$.pipe(
    map((image: Blob) => URL.createObjectURL(image)),
    shareReplay(1)
  );

  public readonly backgroundImageSafeStyle$: Observable<SafeStyle> = this.imageUrl$.pipe(
    map((imageUrl: string) => this.domSanitizer.bypassSecurityTrustStyle(`url(${imageUrl})`)),
    shareReplay(1)
  );

  constructor(
    private readonly assetsRequestsService: AssetsRequestsService,
    private readonly domSanitizer: DomSanitizer
  ) {}

  public ngAfterViewInit(): void {
    this.hidePlaceholderOnBackgroundImageIsReady();
  }

  private hidePlaceholderOnBackgroundImageIsReady(): void {
    this.placeHolderIsVisible$
      .pipe(filterNotNill(), take(1), delay(1000))
      .subscribe(() => this.placeHolderIsVisible$.next('false'));
  }
}
