import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from "@angular/core";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { TextRouletteComponent } from "./components/text-roulette/text-roulette.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [AvatarComponent, TextRouletteComponent],
  templateUrl: "./home.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
