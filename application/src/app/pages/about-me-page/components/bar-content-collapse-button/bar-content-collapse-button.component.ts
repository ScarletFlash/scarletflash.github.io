import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { VOID } from '@app/app/constants';

@Component({
  selector: 'app-bar-content-collapse-button',
  templateUrl: './bar-content-collapse-button.component.html',
  styleUrls: ['./bar-content-collapse-button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('isAppeared', [
      state('true', style({ transform: 'translateY(-100%)' })),
      state('false', style({ transform: 'translateY(0)' })),
      transition('* <=> *', animate('2s ease-in'))
    ])
  ]
})
export class BarContentCollapseButtonComponent {
  @Input() public isVisible: boolean = false;

  @Output() public readonly close: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('window:keydown', ['$event'])
  public processKeyDownEvent(event: KeyboardEvent): void {
    const escapeButtonIsPressed: boolean = event.key === 'Escape';
    if (!escapeButtonIsPressed) {
      return;
    }

    this.emitCloseEvent();
  }

  public processButtonClick(event: MouseEvent): void {
    event.stopPropagation();
    this.emitCloseEvent();
  }

  private emitCloseEvent(): void {
    this.close.emit(VOID);
  }
}
