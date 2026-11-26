import { Component, ViewEncapsulation, input } from '@angular/core';
import { type ContactButton } from '../../../../../declarations/interfaces/contact-button.interface';
import { ContactsItemComponent } from '../contacts-item/contacts-item.component';

@Component({
  selector: 'app-contacts',
  imports: [ContactsItemComponent],
  templateUrl: './contacts.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ContactsComponent {
  public readonly contacts = input.required<ContactButton[]>();
}
