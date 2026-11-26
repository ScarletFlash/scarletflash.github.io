import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation, input } from '@angular/core';
import { type ContactButton } from '../../../../../declarations/interfaces/contact-button.interface';
import { type DataComponent } from '../../../../../declarations/types/data-component.type';

@Component({
  selector: 'app-contacts-item',
  imports: [NgOptimizedImage],
  templateUrl: './contacts-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ContactsItemComponent implements DataComponent<ContactButton> {
  public readonly iconSrc = input.required<string>();
  public readonly href = input.required<string>();
  public readonly title = input.required<string>();
}
