import { Scene } from 'scene';

export class Application {
  readonly #scene: Scene;
  readonly #contentElement: HTMLElement;

  constructor() {
    const canvas: HTMLCanvasElement | null = document.querySelector('canvas.background-animation');
    if (canvas === null) {
      throw new Error('Canvas element is missing');
    }
    this.#scene = new Scene(canvas);

    const contentElement: HTMLElement | null = document.querySelector('main.content');
    if (contentElement === null) {
      throw new Error('Content element is missing');
    }
    this.#contentElement = contentElement;
  }

  public start(): void {
    this.#scene.run();

    setTimeout(() => {
      this.#makeTextContentVisible();
    }, 1000);
  }

  #makeTextContentVisible(): void {
    this.#contentElement.classList.remove('content_hidden');
  }
}
