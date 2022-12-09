export class BackgroundAnimation {
  readonly #canvas: HTMLCanvasElement;
  readonly #renderingContext: WebGL2RenderingContext | null;

  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas;
    this.#renderingContext = this.#canvas.getContext('webgl2', {
      antialias: true,
      failIfMajorPerformanceCaveat: true,
    });
  }

  static #setupRenderingContext(context: WebGL2RenderingContext): void {
    const { COLOR_BUFFER_BIT, DEPTH_BUFFER_BIT, DEPTH_TEST, LEQUAL }: WebGL2RenderingContext = context;
    context.clearColor(1, 1, 1, 1);
    context.enable(DEPTH_TEST);
    context.depthFunc(LEQUAL);
    // eslint-disable-next-line no-bitwise
    context.clear(COLOR_BUFFER_BIT | DEPTH_BUFFER_BIT);
  }

  public run(): void {
    if (this.#renderingContext === null) {
      throw new Error('WebGL is unavailable');
    }

    BackgroundAnimation.#setupRenderingContext(this.#renderingContext);
    this.#applyShader();
    this.#makeCanvasVisible();
  }

  #applyShader(): void {
    // this.#renderingContext.fillStyle = '#ffffff';
    // this.#renderingContext.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  #makeCanvasVisible(): void {
    this.#canvas.classList.remove('background-animation_hidden');
  }
}
