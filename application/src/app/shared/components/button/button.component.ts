import { DOCUMENT } from '@angular/common';
import { AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { fontsAreLoaded } from '@src/utils/fonts-are-loaded.util';
import { BehaviorSubject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import type { Nullable } from '@src/declarations/types/nullable.type';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit, AfterContentInit, OnDestroy {
  private readonly subscription: Subscription = new Subscription();

  @Input() public isActive: boolean = false;
  @Input() public disabled: boolean = false;

  @ViewChild('contentElement', { static: true }) private readonly contentElementRef:
    | ElementRef<HTMLDivElement>
    | undefined;

  public readonly isMouseOver$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly currentContentWidthPx$: BehaviorSubject<Nullable<number>> = new BehaviorSubject<Nullable<number>>(
    null
  );
  public readonly currentContentHeightPx$: BehaviorSubject<Nullable<number>> = new BehaviorSubject<Nullable<number>>(
    null
  );

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  @HostListener('window:resize')
  public processResize(): void {
    this.updateContentSize();
  }

  @HostListener('click', ['$event'])
  public processClick(event: MouseEvent): void {
    if (this.disabled) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  public ngOnInit(): void {
    this.updateContentSizeOnFontsLoadIsDone();
  }

  public ngAfterContentInit(): void {
    this.updateContentSize();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public processContentMutation(): void {
    this.updateContentSize();
  }

  public processMouseEnter(): void {
    this.isMouseOver$.next(true);
  }

  public processMouseLeave(): void {
    this.isMouseOver$.next(false);
  }

  private updateContentSizeOnFontsLoadIsDone(): void {
    this.subscription.add(
      fontsAreLoaded(this.document)
        .pipe(take(1))
        .subscribe(() => {
          this.updateContentSize();
        })
    );
  }

  private updateContentSize(): void {
    if (this.contentElementRef === undefined) {
      return;
    }
    const contentElement: Nullable<HTMLDivElement> = this.contentElementRef.nativeElement;
    const contentElementRect: Nullable<DOMRect> = contentElement.getBoundingClientRect();
    const { width, height }: DOMRect = contentElementRect;
    this.currentContentHeightPx$.next(height);
    this.currentContentWidthPx$.next(width);
  }
}
