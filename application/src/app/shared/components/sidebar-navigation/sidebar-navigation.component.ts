import { Component } from '@angular/core';
import { NavLinksConst } from '@app/constants';
import { NavLinkInterface } from '@app/declarations';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss']
})
export class SidebarNavigationComponent {
  public navLinks: Partial<NavLinkInterface>[] = NavLinksConst;
}
