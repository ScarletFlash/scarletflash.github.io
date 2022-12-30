import { Page, Node } from 'framework';

export class ExperiencePage extends Page {
  public readonly path: string = '/experience';
  public readonly title: string = 'Experience';

  protected getContent(): Node.Any {
    // eslint-disable-next-line no-console
    console.log(this);

    return {
      tagName: 'p',
      innerText: 'Welcome to experience page',
    };
  }
}
