import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contacts-page',
  template: `
    <section class="sticky top-0 min-h-svh border-t border-gray-300">
      <h2 class="p-5">Contacts</h2>
    </section>

    <div
      class="h-svh"
      aria-hidden="true"
    ></div>
  `,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'block'
  }
})
export class ContactsPageComponent {}
