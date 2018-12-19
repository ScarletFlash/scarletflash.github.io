import { Component, HostBinding, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-design-system-color-palette-item',
  templateUrl: './design-system-color-palette-item.component.html',
  styleUrls: ['./design-system-color-palette-item.component.scss']
})
export class DesignSystemColorPaletteItemComponent implements OnChanges {
  @Input() public colorCode: string;
  @Input() public diameter: string;

  @HostBinding('style.width') get _getWidth(): string {
    return this.diameter;
  }

  @HostBinding('style.height') get _getHeight(): string {
    return this.diameter;
  }

  ngOnChanges(changes) {
    console.log(changes);
  }
}
