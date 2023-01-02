import { NavigationHandler, Page } from 'framework';
import { ExperiencePage } from './experience.page';

export class EPage extends ExperiencePage {
  public override readonly path: string = '/e';

  protected override getContent(): Page {
    NavigationHandler.goTo('/experience');
    return super.self;
  }
}
