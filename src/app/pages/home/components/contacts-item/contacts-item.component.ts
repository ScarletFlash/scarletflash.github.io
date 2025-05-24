import { NgOptimizedImage } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  ViewEncapsulation,
} from "@angular/core";
import { ContactButton } from "../../../../../declarations/interfaces/contact-button.interface";
import { DataComponent } from "../../../../../declarations/types/data-component.type";

@Component({
    selector: "app-contacts-item",
    imports: [NgOptimizedImage],
    templateUrl: "./contacts-item.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsItemComponent implements DataComponent<ContactButton> {
  public readonly iconSrc: InputSignal<string> = input.required<string>();
  public readonly href: InputSignal<string> = input.required<string>();
  public readonly title: InputSignal<string> = input.required<string>();
}
