import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  LogoComponent,
  NotificationComponent,
  SearchInputComponent,
  SidebarComponent,
  SidebarLangSwitcherComponent,
  SidebarNavigationComponent,
} from '@app/shared/components';
import { ObjectArrayFilterPipe } from '@app/shared/pipes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    LogoComponent,
    NotificationComponent,
    SearchInputComponent,
    SidebarComponent,
    SidebarLangSwitcherComponent,
    SidebarNavigationComponent,
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
    ObjectArrayFilterPipe,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
