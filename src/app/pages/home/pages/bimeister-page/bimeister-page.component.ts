import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bimeister-page',
  template: `<h2 class="p-5">Bimeister</h2>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'block h-[20000px] border-t border-gray-300'
  }
})
export class BimeisterPageComponent {}
