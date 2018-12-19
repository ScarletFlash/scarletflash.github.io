import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesignSystemRoutingModule } from '@app/pages/design-system/design-system-routing.module';
import { DesignSystemComponent } from '@app/pages/design-system/design-system.component';
import { SharedModule } from '@app/shared';
import { DesignSystemColorPaletteComponent } from './design-system-color-palette/design-system-color-palette.component';
import { DesignSystemColorPaletteItemComponent } from './design-system-color-palette/design-system-color-palette-item/design-system-color-palette-item.component';

@NgModule({
  declarations: [DesignSystemComponent, DesignSystemColorPaletteComponent, DesignSystemColorPaletteItemComponent],
  imports: [CommonModule, SharedModule, DesignSystemRoutingModule]
})
export class DesignSystemModule {}
