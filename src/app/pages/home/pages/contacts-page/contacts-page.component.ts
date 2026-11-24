import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-contacts-page",
  template: `<h2 class="p-5">Contacts</h2>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "grow border-t border-gray-300",
  },
})
export class ContactsPageComponent {}
