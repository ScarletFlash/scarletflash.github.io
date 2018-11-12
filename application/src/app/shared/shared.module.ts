import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '@app/shared/components';

import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    SidebarComponent,
    NotificationComponent,
  ],
  exports: [
    HttpClientModule,
    SidebarComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
