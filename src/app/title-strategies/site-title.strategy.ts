import { Service, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleStrategy, type RouterStateSnapshot } from '@angular/router';

const SITE_TITLE = 'Fedor Usakov';

@Service({ autoProvided: false })
export class SiteTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  public override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    this.title.setTitle(pageTitle === undefined ? SITE_TITLE : `${pageTitle} — ${SITE_TITLE}`);
  }
}
