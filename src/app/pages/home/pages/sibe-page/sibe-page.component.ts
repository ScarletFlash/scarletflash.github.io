import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sibe-page',
  template: `<h2 class="p-5">Sibe</h2>`,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'block h-[10000px] border-t border-gray-300'
  }
})
export class SibePageComponent {}
