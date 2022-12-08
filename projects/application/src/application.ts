import { BackgroundAnimation } from './background-animation';

export class Application {
  readonly #backgroundAnimation: BackgroundAnimation;

  constructor() {
    const canvas: HTMLCanvasElement | null = document.querySelector('canvas.background-animation');

    if (canvas === null) {
      throw new Error('Canvas element is missing');
    }

    this.#backgroundAnimation = new BackgroundAnimation(canvas);
  }

  public start(): void {
    this.#backgroundAnimation.run();
  }
}
