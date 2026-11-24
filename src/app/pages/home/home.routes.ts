import { Route, Routes } from "@angular/router";
import { HomeOutletName } from "../../../declarations/enums/home-outlet-name.enum";
import { HomeRouteDataKey } from "../../../declarations/enums/home-route-data-key.enum";
import { HomeComponent } from "./home.component";
import { BimeisterPageComponent } from "./pages/bimeister-page/bimeister-page.component";
import { ContactsPageComponent } from "./pages/contacts-page/contacts-page.component";
import { FirstScreenPageComponent } from "./pages/first-screen-page/first-screen-page.component";
import { SibePageComponent } from "./pages/sibe-page/sibe-page.component";

const firstScreenAddressRoute: Route = { path: "", children: [] };

const sibeAddressRoute: Route = { path: "experience/sibe", children: [] };

const bimeisterAddressRoute: Route = { path: "experience/bimeister", children: [] };

const contactsAddressRoute: Route = { path: "contacts", children: [] };

export const homeRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        outlet: HomeOutletName.FirstScreen,
        component: FirstScreenPageComponent,
        data: { [HomeRouteDataKey.AddressRoute]: firstScreenAddressRoute },
      },
      {
        path: "",
        outlet: HomeOutletName.Sibe,
        component: SibePageComponent,
        data: { [HomeRouteDataKey.AddressRoute]: sibeAddressRoute },
      },
      {
        path: "",
        outlet: HomeOutletName.Bimeister,
        component: BimeisterPageComponent,
        data: { [HomeRouteDataKey.AddressRoute]: bimeisterAddressRoute },
      },
      {
        path: "",
        outlet: HomeOutletName.Contacts,
        component: ContactsPageComponent,
        data: { [HomeRouteDataKey.AddressRoute]: contactsAddressRoute },
      },
      firstScreenAddressRoute,
      sibeAddressRoute,
      bimeisterAddressRoute,
      contactsAddressRoute,
    ],
  },
];
