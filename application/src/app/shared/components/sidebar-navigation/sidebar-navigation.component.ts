import { Component } from '@angular/core';
import { NavLinksConst } from '@app/constants';
import { NavLinkModel } from '@app/models';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss']
})
export class SidebarNavigationComponent {
  public navLinks: NavLinkModel[] = NavLinksConst;
}
