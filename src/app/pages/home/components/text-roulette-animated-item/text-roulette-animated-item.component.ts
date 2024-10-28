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
          transformOrigin: "right",
        })
      ),
      transition(":enter", [
        style({
          opacity: 0,
          position: "absolute",
          transform: "translate(10%, 180%) rotate(-1deg)",
        }),
        animate(
          "500ms ease-in-out",
          style({
            opacity: 1,
            position: "absolute",
            transform: "translate(0, 0) rotate(0deg)",
          })
        ),
      ]),
      transition(":leave", [
        style({
          opacity: 1,
          position: "absolute",
          transform: "translate(0, 0) rotate(0deg)",
        }),
        animate(
          "500ms ease-in-out",
          style({
            opacity: 0,
            transform: "translate(10%, -180%) rotate(1deg)",
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
