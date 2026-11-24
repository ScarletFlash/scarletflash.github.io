import { Component, ViewEncapsulation } from "@angular/core";
import { AvatarComponent } from "../../components/avatar/avatar.component";
import { ContactsComponent } from "../../components/contacts/contacts.component";
import { CurrentJobButtonComponent } from "../../components/current-job-button/current-job-button.component";
import { TextRouletteComponent } from "../../components/text-roulette/text-roulette.component";

@Component({
  selector: "app-first-screen-page",
  imports: [
    AvatarComponent,
    TextRouletteComponent,
    CurrentJobButtonComponent,
    ContactsComponent,
  ],
  templateUrl: "./first-screen-page.component.html",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "flex grow flex-col items-center justify-center py-5",
  },
})
export class FirstScreenPageComponent {}
