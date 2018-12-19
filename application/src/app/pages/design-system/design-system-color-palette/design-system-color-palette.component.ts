import { Component } from '@angular/core';
import { ColorPaletteConst } from '@app/constants';
import { ColorPaletteItemInterface } from '@app/declarations';

@Component({
  selector: 'app-design-system-color-palette',
  templateUrl: './design-system-color-palette.component.html',
  styleUrls: ['./design-system-color-palette.component.scss']
})
export class DesignSystemColorPaletteComponent {
  public colors: ColorPaletteItemInterface[] = ColorPaletteConst;

  public diameter: string = '3rem';
}
