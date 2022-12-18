import { Context } from './context';

export class Scene {
  readonly #canvas: HTMLCanvasElement;
  readonly #canvasResizeObserver: ResizeObserver;

  readonly #renderingContext: Context;

  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas;
    this.#renderingContext = new Context(canvas);

    this.#canvasResizeObserver = new ResizeObserver(() => {
      Scene.#syncWebGlCanvasDimensionsWithCSS(canvas);

      this.#renderingContext.updateSize({
        widthPx: canvas.width,
        heightPx: canvas.height,
      });
    });
  }

  static #applyShaders(_context: WebGL2RenderingContext): void {
    // const vertexShader: VertexShader = new VertexShader(context, vertexShaderSourceCode);
    // const fragmentShader: FragmentShader = new FragmentShader(context, fragmentShaderSourceCode);
    // const shaderProgram: ShaderProgram = new ShaderProgram({
    //   context,
    //   vertexShader,
    //   fragmentShader,
    // });
    // shaderProgram.run();
  }

  static #syncWebGlCanvasDimensionsWithCSS(canvas: HTMLCanvasElement): void {
    const displayWidthPx: number = canvas.clientWidth;
    const displayHeightPx: number = canvas.clientHeight;

    const dimensionsAreValid: boolean = canvas.width === displayWidthPx && canvas.height === displayHeightPx;

    if (dimensionsAreValid) {
      return;
    }

    // // eslint-disable-next-line no-console
    // console.log('need resize');

    // canvas.width = displayWidthPx;
    // canvas.height = displayHeightPx;
  }

  public run(): void {
    this.#canvasResizeObserver.observe(this.#canvas, {
      box: 'border-box',
    });

    if (this.#renderingContext === null) {
      throw new Error('WebGL is unavailable');
    }

    Scene.#applyShaders(this.#renderingContext.view);
    this.#makeCanvasVisible();
  }

  public destroy(): void {
    this.#canvasResizeObserver.unobserve(this.#canvas);
  }

  #makeCanvasVisible(): void {
    this.#canvas.classList.remove('background-animation_hidden');
  }
}
