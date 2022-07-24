import { ChangeDetectionStrategy, Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { NavigationPosition } from '@src/declarations/enums/navigation-position.enum';

import type { Router } from '@angular/router';
import type { Nullable } from '@src/declarations/types/nullable.type';

interface Link {
  title: string;
  url: string;
  disabled: boolean;
  keyboardCode: string;
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
      title: '[M] Main',
      url: '/',
      disabled: false,
      keyboardCode: 'KeyM'
    },
    {
      title: '[S] Skills',
      url: '/skills',
      disabled: true,
      keyboardCode: 'KeyS'
    },
    {
      title: '[C] Contacts',
      url: '/contacts',
      disabled: false,
      keyboardCode: 'KeyC'
    },
    {
      title: '[H] Home projects',
      url: '/home-projects',
      disabled: true,
      keyboardCode: 'KeyH'
    }
  ];

  private readonly usedKeyboardCodes: Set<string> = new Set<string>(this.links.map((link: Link) => link.keyboardCode));

  constructor(private readonly router: Router) {}

  @HostListener('window:keypress', ['$event'])
  public processKeyPress(event: KeyboardEvent): void {
    const pressedKeyCode: string = event.code;
    if (!this.usedKeyboardCodes.has(pressedKeyCode)) {
      return;
    }
    const targetLink: Link | undefined = this.links.find((link: Link) => link.keyboardCode === pressedKeyCode);
    if (targetLink === undefined || targetLink.disabled) {
      return;
    }
    this.router.navigateByUrl(targetLink.url);
  }
}
