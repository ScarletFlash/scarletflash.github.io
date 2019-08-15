import { state, style, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isNullOrUndefined } from '@helpers';
import { BehaviorSubject, combineLatest, interval, Observable, of } from 'rxjs';
import { map, shareReplay, takeWhile, tap } from 'rxjs/operators';

enum TickerAnimationState {
  collapsed = 'collapsed',
  updated = 'updated',
  expanded = 'expanded'
}

@Component({
  animations: [
    trigger('tickerAnimation', [
      state(
        TickerAnimationState.collapsed,
        style({
          width: 0
        })
      ),
      state(
        TickerAnimationState.updated,
        style({
          width: '*'
        })
      ),
      state(
        TickerAnimationState.expanded,
        style({
          width: '*'
        })
      )
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ticker',
  styleUrls: ['./ticker.component.scss'],
  templateUrl: './ticker.component.html'
})
export class TickerComponent implements AfterViewInit {
  public currentState$: BehaviorSubject<TickerAnimationState> = new BehaviorSubject<TickerAnimationState>(
    TickerAnimationState.collapsed
  );

  @Input() public set values(newData: string[]) {
    const newData$: Observable<string[]> = of(newData).pipe(shareReplay(1));
    this._values$ = newData$;
  }

  public visibleText$: Observable<string> = of('');

  private _currentValue$: Observable<string> = of('');
  private _values$: Observable<string[]> = of([]);
  private readonly _currentValueIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public ngAfterViewInit(): void {
    this._initializeAnimation();
  }

  public processStateChange(event: AnimationEvent): void {
    console.log(event);
  }

  private _initializeAnimation(): void {
    this._switchValue();
  }

  private _switchValue(): void {
    this._currentValue$ = this._getNewValue(this._values$, this._currentValue$);
    this.visibleText$ = this._getTickerText(this._currentValue$, 100);
  }

  private _getNewValue(values$: Observable<string[]>, currentValue$: Observable<string>): Observable<string> {
    enum AggregatedData {
      values,
      curent
    }
    const nextValue$: Observable<string> = combineLatest([values$, currentValue$]).pipe(
      map((innerData: [string[], string]) => {
        const values: string[] = innerData[AggregatedData.values];
        const currentValue: string = innerData[AggregatedData.curent];
        const currentIndex: number = values.indexOf(currentValue);
        const maxIndex: number = values.length - 1;
        return Object.is(currentIndex, maxIndex) ? values[0] : values[currentIndex + 1];
      })
    );
    return nextValue$;
  }

  private _getTickerText(fullText$: Observable<string>, delayMs: number): Observable<string> {
    enum AggregatedData {
      emitCount,
      fullText
    }
    const emitTrigger$: Observable<number> = interval(delayMs);
    const updatedVisibleText$: Observable<string> = combineLatest([emitTrigger$, fullText$]).pipe(
      map((innerData: [number, string]) => {
        const emitCount: number = innerData[AggregatedData.emitCount] + 1;
        const fullText: string = innerData[AggregatedData.fullText];
        const appending: boolean = emitCount <= fullText.length;
        if (appending) {
          return fullText.substring(0, emitCount);
        }
        const subtractingLettersCount: number = emitCount - fullText.length;
        return fullText.substring(0, fullText.length - subtractingLettersCount);
      }),
      takeWhile((innerValue: string) => !isNullOrUndefined(innerValue) && !Object.is(innerValue.length, 0), true),
      tap((innerValue: string) => {
        if (Object.is(innerValue.length, 0)) {
          this._switchValue();
        }
      }),
      shareReplay(1)
    );
    return updatedVisibleText$;
  }
}
