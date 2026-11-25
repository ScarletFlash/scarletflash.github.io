import { inject, Service } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

const SITE_TITLE: string = "Fedor Usakov";

@Service({ autoProvided: false })
export class SiteTitleStrategy extends TitleStrategy {
  private readonly title: Title = inject(Title);

  public override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle: string | undefined = this.buildTitle(snapshot);
    this.title.setTitle(pageTitle === undefined ? SITE_TITLE : `${pageTitle} — ${SITE_TITLE}`);
  }
}
