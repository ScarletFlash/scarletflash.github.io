import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import type { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import type { AssetsRequestsService } from '@_app/services';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();

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
    private readonly domSanitizer: DomSanitizer,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.subscription.add(this.backgroundImageSafeStyle$.subscribe(() => this.changeDetectorRef.detectChanges()));
  }

  public ngOnInit(): void {
    this.changeDetectorRef.detach();
  }

  public ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
