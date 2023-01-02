import type { PageConstructor } from 'framework';
import { ExperiencePage } from './experience.page';

export class EPage extends ExperiencePage {
  public override readonly path: string = '/e';

  protected override getContent(): PageConstructor {
    return ExperiencePage;
  }
}
