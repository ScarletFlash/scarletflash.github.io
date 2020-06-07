import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

interface Link {
  title: string;
  url: string;
  iconSrc: string;
}

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsPageComponent {
  public readonly contactLinks: Link[] = [
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/usakov/',
      iconSrc: '/assets/images/logo-linkedin.svg#logo'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/ScarletFlash/',
      iconSrc: '/assets/images/logo-github.svg#logo'
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/fiodorusakov/',
      iconSrc: '/assets/images/logo-facebook.svg#logo'
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/f.usakov/',
      iconSrc: '/assets/images/logo-instagram.svg#logo'
    }
  ];
}
