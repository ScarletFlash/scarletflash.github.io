import { NgModule } from '@angular/core';
import { SharedModule } from '@src/app/shared/shared.module';

import { ContactsPageRoutingModule } from './contacts-page-routing.module';
import { ContactsPageComponent } from './contacts-page.component';

@NgModule({
  declarations: [ContactsPageComponent],
  imports: [SharedModule, ContactsPageRoutingModule]
})
export class ContactsPageModule {}
