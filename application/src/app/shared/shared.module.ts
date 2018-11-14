import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  LogoComponent,
  NotificationComponent,
  SearchInputComponent,
  SidebarComponent,
  SidebarLangSwitcherComponent,
  SidebarNavigationComponent,
  TileComponent,
} from '@app/shared/components';
import { ObjectArrayFilterPipe } from '@app/shared/pipes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    LogoComponent,
    NotificationComponent,
    SearchInputComponent,
    SidebarComponent,
    SidebarLangSwitcherComponent,
    SidebarNavigationComponent,
    TileComponent,
    ObjectArrayFilterPipe,
  ],
  exports: [
    HttpClientModule,
    LogoComponent,
    NotificationComponent,
    SearchInputComponent,
    SidebarComponent,
    SidebarLangSwitcherComponent,
    SidebarNavigationComponent,
    TileComponent,
    ObjectArrayFilterPipe
  ]
})
export class SharedModule { }
