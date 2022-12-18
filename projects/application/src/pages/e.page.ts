import { ExperiencePage } from './experience.page';

export class EPage extends ExperiencePage {
  public override readonly path: string = '/e';

  protected override getContent(): HTMLElement {
    history.pushState(null, '', super.path);
    history.forward();

    return super.getContent();
  }
}
