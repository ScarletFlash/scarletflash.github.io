import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { ContactsRoutingModule } from '@app/pages/contacts/contacts-routing.module';
import { ContactsComponent } from '@app/pages/contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent
  ]
})
export class ContactsModule { }
