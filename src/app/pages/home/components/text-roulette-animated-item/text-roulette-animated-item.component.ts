import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
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
  animations: [
    trigger("pop", [
      state(
        "*",
        style({
          position: "absolute",
          left: "0",
        })
      ),
      transition(":enter", [
        style({
          opacity: 0,
          position: "absolute",
          transform: "translateY(180%)",
        }),
        animate(
          "500ms ease-in-out",
          style({
            opacity: 1,
            position: "absolute",
            transform: "translateY(0)",
          })
        ),
      ]),
      transition(":leave", [
        style({ opacity: 1, position: "absolute", transform: "translateY(0)" }),
        animate(
          "500ms ease-in-out",
          style({
            opacity: 0,
            transform: "translateY(-180%)",
            position: "absolute",
          })
        ),
      ]),
    ]),
  ],
  host: {
    "[@pop]": "",
  },
})
export class TextRouletteAnimatedItemComponent {}
