import { Component, OnInit } from '@angular/core';
import { NavLinkModel } from '@app/models';
import { NavLinksConst } from '@app/constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public navLinks: NavLinkModel[] = NavLinksConst;

  constructor() { }

  ngOnInit() {
  }

}
