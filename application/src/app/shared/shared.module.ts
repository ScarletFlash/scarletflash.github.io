import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './components';
import { IsNullOrUndefinedPipe } from './pipes/is-null-or-undefined.pipe';

const CORE_MODULES: any[] = [BrowserAnimationsModule];
const SHARED_COMPONENTS: any[] = [LayoutComponent];
const SHARED_PIPES: any[] = [IsNullOrUndefinedPipe];

@NgModule({
  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES],
  exports: [...CORE_MODULES, ...SHARED_COMPONENTS, ...SHARED_PIPES],
  imports: [...CORE_MODULES]
})
export class SharedModule {}
