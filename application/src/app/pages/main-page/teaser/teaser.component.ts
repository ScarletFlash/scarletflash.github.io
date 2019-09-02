import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { isNullOrUndefined } from '@app-functions';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-teaser',
  styleUrls: ['./teaser.component.scss'],
  templateUrl: './teaser.component.html'
})
export class TeaserComponent implements OnChanges {
  public readonly currentValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  @Input() public values: string[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    if (
      isNullOrUndefined(changes) ||
      isNullOrUndefined(changes.values) ||
      isNullOrUndefined(changes.values.currentValue)
    ) {
      return;
    }
  }
}
