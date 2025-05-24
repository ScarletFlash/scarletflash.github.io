import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from "@angular/core";
import { BackgroundComponent } from "../../components/background/background.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { CurrentJobButtonComponent } from "./components/current-job-button/current-job-button.component";
import { TextRouletteComponent } from "./components/text-roulette/text-roulette.component";

@Component({
    selector: "app-home",
    imports: [
        AvatarComponent,
        TextRouletteComponent,
        CurrentJobButtonComponent,
        ContactsComponent,
        BackgroundComponent,
    ],
    templateUrl: "./home.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
