import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NavigationPosition } from '@src/declarations/enums/navigation-position.enum';

import type { Nullable } from '@src/declarations/types/nullable.type';

interface Link {
  title: string;
  url: string;
  disabled: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  @Input() public position: Nullable<NavigationPosition> = NavigationPosition.Bottom;
  public readonly navigationPosition: typeof NavigationPosition = NavigationPosition;

  public readonly links: Link[] = [
    {
      title: 'Start',
      url: '/',
      disabled: false
    },
    {
      title: 'Skills',
      url: '/skills',
      disabled: true
    },
    {
      title: 'Contacts',
      url: '/contacts',
      disabled: true
    },
    {
      title: 'Home projects',
      url: '/home-projects',
      disabled: true
    }
  ];
}
