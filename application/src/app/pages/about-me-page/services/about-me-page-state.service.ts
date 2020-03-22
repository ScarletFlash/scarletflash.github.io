import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, shareReplay } from 'rxjs/operators';

@Injectable()
export class AboutMePageStateService {
  private readonly _isDrawerExpanded$: Readonly<BehaviorSubject<boolean>> = new BehaviorSubject<boolean>(false);
  public readonly isDrawerExpanded$: Observable<boolean> = this._isDrawerExpanded$.pipe(
    distinctUntilChanged(),
    shareReplay(1)
  );

  public expandDrawer(): void {
    this._isDrawerExpanded$.next(true);
  }

  public collapseDrawer(): void {
    this._isDrawerExpanded$.next(false);
  }
}
