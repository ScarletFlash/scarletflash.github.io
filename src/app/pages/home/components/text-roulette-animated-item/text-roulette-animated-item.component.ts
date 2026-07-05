import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-text-roulette-animated-item",
  standalone: true,
  templateUrl: "./text-roulette-animated-item.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "absolute left-0",
  },
})
export class TextRouletteAnimatedItemComponent {}
