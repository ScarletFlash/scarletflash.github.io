import { Page, Node, PageConstructor } from 'framework';

export class ExperiencePage extends Page {
  public readonly path: string = '/experience';
  public readonly title: string = 'Experience';

  protected getContent(): Node.Any | PageConstructor {
    return {
      tagName: 'p',
      innerText: 'Welcome to experience page',
    };
  }
}
