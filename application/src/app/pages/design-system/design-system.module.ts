import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DesignSystemColorPaletteItemComponent,
} from '@app/pages/design-system/design-system-color-palette/design-system-color-palette-item/design-system-color-palette-item.component';
import {
  DesignSystemColorPaletteComponent,
} from '@app/pages/design-system/design-system-color-palette/design-system-color-palette.component';
import {
  DesignSystemRoutingModule,
} from '@app/pages/design-system/design-system-routing.module';
import {
  DesignSystemComponent,
} from '@app/pages/design-system/design-system.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    DesignSystemComponent,
    DesignSystemColorPaletteComponent,
    DesignSystemColorPaletteItemComponent
  ],
  imports: [CommonModule, SharedModule, DesignSystemRoutingModule]
})
export class DesignSystemModule {}
