import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactsRoutingModule } from '@app/pages/contacts/contacts-routing.module';
import { ContactsComponent } from '@app/pages/contacts/contacts.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [CommonModule, SharedModule, ContactsRoutingModule],
  declarations: [ContactsComponent]
})
export class ContactsModule {}
