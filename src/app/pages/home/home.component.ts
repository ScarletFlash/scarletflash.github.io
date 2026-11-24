import {
  afterNextRender,
  Component,
  ElementRef,
  inject,
  Signal,
  viewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, RouterOutlet } from "@angular/router";
import { HomeOutletName } from "../../../declarations/enums/home-outlet-name.enum";
import { HomeRouteDataKey } from "../../../declarations/enums/home-route-data-key.enum";
import { BackgroundComponent } from "../../components/background/background.component";
import { ScrollStateService } from "../../services/scroll-state.service";

@Component({
  selector: "app-home",
  imports: [RouterOutlet, BackgroundComponent],
  providers: [ScrollStateService],
  templateUrl: "./home.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  protected readonly homeOutletName: typeof HomeOutletName = HomeOutletName;

  private readonly root: Signal<ElementRef<HTMLElement>> = viewChild.required("root");

  private readonly openingPinWrapper: Signal<ElementRef<HTMLElement>> =
    viewChild.required("openingPinWrapper");

  private readonly openingSpacer: Signal<ElementRef<HTMLElement>> =
    viewChild.required("openingSpacer");

  private readonly sibeBlock: Signal<ElementRef<HTMLElement>> = viewChild.required("sibeBlock");

  private readonly bimeisterBlock: Signal<ElementRef<HTMLElement>> =
    viewChild.required("bimeisterBlock");

  private readonly closingPinWrapper: Signal<ElementRef<HTMLElement>> =
    viewChild.required("closingPinWrapper");

  private readonly childRouteSnapshotByOutletName: ReadonlyMap<string, ActivatedRouteSnapshot> =
    new Map<string, ActivatedRouteSnapshot>(
      inject(ActivatedRoute).snapshot.children.map((childRouteSnapshot: ActivatedRouteSnapshot) => [
        childRouteSnapshot.outlet,
        childRouteSnapshot,
      ]),
    );

  private readonly scrollStateService: ScrollStateService = inject(ScrollStateService);

  constructor() {
    afterNextRender(() => {
      const openingPinWrapper: HTMLElement = this.openingPinWrapper().nativeElement;

      this.scrollStateService.observe({
        root: this.root().nativeElement,
        openingPinWrapper,
        openingSpacer: this.openingSpacer().nativeElement,
        closingPinWrapper: this.closingPinWrapper().nativeElement,
        blockByAddressPath: new Map<string, HTMLElement>([
          [this.getOutletAddressPath(HomeOutletName.FirstScreen), openingPinWrapper],
          [this.getOutletAddressPath(HomeOutletName.Sibe), this.sibeBlock().nativeElement],
          [
            this.getOutletAddressPath(HomeOutletName.Bimeister),
            this.bimeisterBlock().nativeElement,
          ],
        ]),
        closingAddressPath: this.getOutletAddressPath(HomeOutletName.Contacts),
      });
    });
  }

  private getOutletAddressPath(outletName: HomeOutletName): string {
    const outletRouteSnapshot: ActivatedRouteSnapshot | undefined =
      this.childRouteSnapshotByOutletName.get(outletName);
    if (outletRouteSnapshot === undefined) {
      throw new Error(`Expected the home route to have an active route in the [${outletName}] outlet`);
    }

    const addressRoute: unknown = outletRouteSnapshot.data[HomeRouteDataKey.AddressRoute];
    if (
      typeof addressRoute !== "object" ||
      addressRoute === null ||
      !("path" in addressRoute) ||
      typeof addressRoute.path !== "string"
    ) {
      throw new Error(
        `Expected the [${outletName}] outlet route data to refer to an address route with a path`,
      );
    }

    return addressRoute.path;
  }
}
