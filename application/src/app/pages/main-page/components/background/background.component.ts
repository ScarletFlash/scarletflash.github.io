import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { AssetsRequestsService } from '@app/services';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundComponent {
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
}
