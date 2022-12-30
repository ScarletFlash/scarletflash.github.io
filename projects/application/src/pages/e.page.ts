import type { Node } from 'framework';
import { ExperiencePage } from './experience.page';

export class EPage extends ExperiencePage {
  public override readonly path: string = '/e';

  protected override getContent(): Node.Any {
    history.pushState(null, '', super.path);
    history.forward();

    return super.getContent();
  }
}
