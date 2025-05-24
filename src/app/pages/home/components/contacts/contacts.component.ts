import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation,
} from "@angular/core";
import { ContactButton } from "../../../../../declarations/interfaces/contact-button.interface";
import { ContactsItemComponent } from "../contacts-item/contacts-item.component";

@Component({
    selector: "app-contacts",
    imports: [ContactsItemComponent],
    templateUrl: "./contacts.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
  public readonly contacts = input.required<ContactButton[]>();
}
