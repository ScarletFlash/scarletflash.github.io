import { Page } from 'framework';

export class MainPage extends Page {
  public readonly path: string = '/';
  public readonly title: string = '';

  protected getContent(): HTMLElement {
    const paragraphElement: HTMLElement = document.createElement('p');
    paragraphElement.innerText = `${this.constructor.name} is created`;
    return paragraphElement;
  }
}
