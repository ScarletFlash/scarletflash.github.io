import { Page } from 'framework';

export class ExperiencePage extends Page {
  public readonly path: string = '/experience';
  public readonly title: string = 'Experience';

  protected getContent(): HTMLElement {
    const paragraphElement: HTMLElement = document.createElement('p');
    paragraphElement.innerText = `${this.constructor.name} is created`;
    return paragraphElement;
  }
}
