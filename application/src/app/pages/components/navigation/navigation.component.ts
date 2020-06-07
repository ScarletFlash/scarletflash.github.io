import { ChangeDetectionStrategy, Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { NavigationPosition } from '@src/declarations/enums/navigation-position.enum';

import type { Router } from '@angular/router';
import type { Nullable } from '@src/declarations/types/nullable.type';

interface Link {
  title: string;
  url: string;
  disabled: boolean;
  keyboardKey: string;
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
      title: 'Main',
      url: '/',
      disabled: false,
      keyboardKey: 'M'
    },
    {
      title: 'Skills',
      url: '/skills',
      disabled: true,
      keyboardKey: 'S'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      disabled: true,
      keyboardKey: 'C'
    },
    {
      title: 'Home projects',
      url: '/home-projects',
      disabled: true,
      keyboardKey: 'H'
    }
  ];

  private readonly usedKeyboardKeys: Set<string> = new Set<string>(
    this.links.map((link: Link) => link.keyboardKey.toLowerCase())
  );

  constructor(private readonly router: Router) {}

  @HostListener('window:keypress', ['$event'])
  public processKeyPress(event: KeyboardEvent): void {
    const pressedKey: string = event.key.toLowerCase();
    if (!this.usedKeyboardKeys.has(pressedKey)) {
      return;
    }
    const targetLink: Link | undefined = this.links.find((link: Link) => link.keyboardKey.toLowerCase() === pressedKey);
    if (targetLink === undefined || targetLink.disabled) {
      return;
    }
    this.router.navigateByUrl(targetLink.url);
  }
}
