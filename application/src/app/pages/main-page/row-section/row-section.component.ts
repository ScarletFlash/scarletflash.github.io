import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-row-section',
  styleUrls: ['./row-section.component.scss'],
  templateUrl: './row-section.component.html'
})
export class RowSectionComponent {
  @Input() public type: 'dark' | 'light' | 'primary' = 'light';
  @Input() public backgroundTemplateRef?: TemplateRef<HTMLDivElement>;
}