import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  LogoComponent,
  NotificationComponent,
  SidebarComponent,
  SidebarLangSwitcherComponent,
  SidebarNavigationComponent,
  TileComponent,
} from '@app/shared/components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    LogoComponent,
    NotificationComponent,
    SidebarComponent,
    SidebarLangSwitcherComponent,
    SidebarNavigationComponent,
    TileComponent,
  ],
  exports: [
    HttpClientModule,
    LogoComponent,
    NotificationComponent,
    SidebarComponent,
    SidebarLangSwitcherComponent,
    SidebarNavigationComponent,
    TileComponent
  ]
})
export class SharedModule { }
