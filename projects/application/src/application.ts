import { BackgroundAnimation } from './background-animation';

export class Application {
  readonly #backgroundAnimation: BackgroundAnimation;
  readonly #contentElement: HTMLElement;

  constructor() {
    const canvas: HTMLCanvasElement | null = document.querySelector('canvas.background-animation');
    if (canvas === null) {
      throw new Error('Canvas element is missing');
    }
    this.#backgroundAnimation = new BackgroundAnimation(canvas);

    const contentElement: HTMLElement | null = document.querySelector('main.content');
    if (contentElement === null) {
      throw new Error('Contnet element is missing');
    }
    this.#contentElement = contentElement;
  }

  public start(): void {
    this.#backgroundAnimation.run();

    this.#makeTextContentVisible();
  }

  #makeTextContentVisible(): void {
    this.#contentElement.classList.remove('content_hidden');
  }
}
