import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import * as R from 'ramda';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements AfterViewInit {
  @ViewChild('titleElement') private readonly _titleElement: ElementRef<HTMLElement>;

  public ngAfterViewInit(): void {
    this._observeTitleHeightChanges();
  }

  private _observeTitleHeightChanges(): void {
    if (R.isNil(this._titleElement.nativeElement)) {
      return;
    }
    const target: HTMLElement = this._titleElement.nativeElement;
    const configuration: MutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true
    };
    const observer: MutationObserver = new MutationObserver((mutations: MutationRecord[]) => console.log(mutations));

    observer.observe(target, configuration);
  }
}
