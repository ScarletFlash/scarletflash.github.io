export class BackgroundAnimation {
  readonly #canvas: HTMLCanvasElement;
  readonly #renderingContext: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas;
    this.#renderingContext = this.#canvas.getContext('2d');
    // this.#renderingContext = this.#canvas.getContext('webgl2', {
    //   antialias: true,
    //   failIfMajorPerformanceCaveat: true,
    // });
  }

  public run(): void {
    if (this.#renderingContext === null) {
      throw new Error('WebGL is unavailable');
    }

    this.#applyShader();
    this.#makeCanvasVisible();
  }

  #applyShader(): void {
    this.#renderingContext.fillStyle = '#ffffff';
    this.#renderingContext.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  #makeCanvasVisible(): void {
    this.#canvas.classList.remove('background-animation_hidden');
  }
}
