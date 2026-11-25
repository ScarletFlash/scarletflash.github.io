import { Component, computed, inject, Signal, ViewEncapsulation } from "@angular/core";
import { ROUTER_OUTLET_DATA } from "@angular/router";
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
    class: "block",
  },
})
export class FirstScreenPageComponent {
  private readonly routerOutletData: Signal<unknown> = inject(ROUTER_OUTLET_DATA);

  protected readonly isAligned: Signal<boolean> = computed(() => {
    const isAligned: unknown = this.routerOutletData();
    if (typeof isAligned !== "boolean") {
      throw new Error(
        `Expected the first screen outlet data to be the alignment flag, but got [${isAligned}]`,
      );
    }

    return isAligned;
  });
}
