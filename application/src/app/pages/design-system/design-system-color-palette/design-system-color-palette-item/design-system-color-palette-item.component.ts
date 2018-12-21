import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-design-system-color-palette-item',
  templateUrl: './design-system-color-palette-item.component.html',
  styleUrls: ['./design-system-color-palette-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignSystemColorPaletteItemComponent {
  @Input() public colorCode: string;
  @Input() public diameter: string;

  @HostBinding('style.width') get _getWidth(): string {
    return this.diameter;
  }

  @HostBinding('style.height') get _getHeight(): string {
    return this.diameter;
  }
}
