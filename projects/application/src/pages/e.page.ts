import { NavigationHandler, PageConstructor } from 'framework';
import { ExperiencePage } from './experience.page';

export class EPage extends ExperiencePage {
  public override readonly path: string = '/e';

  constructor() {
    super();
  }

  protected override getContent(): PageConstructor {
    return ExperiencePage;
  }

  protected override onInit(): void {
    NavigationHandler.goTo('/experience');
  }
}
