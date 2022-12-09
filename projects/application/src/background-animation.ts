import fragmentShaderSourceCode from './shaders/fragment.glsl';
import vertexShaderSourceCode from './shaders/vertex.glsl';

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

  static #applyShader(context: WebGL2RenderingContext): void {
    const { FRAGMENT_SHADER, VERTEX_SHADER }: WebGL2RenderingContext = context;

    const vertexShader: WebGLShader = BackgroundAnimation.#getShader(context, VERTEX_SHADER, vertexShaderSourceCode);
    const fragmentShader: WebGLShader = BackgroundAnimation.#getShader(
      context,
      FRAGMENT_SHADER,
      fragmentShaderSourceCode
    );

    const shaderProgram: WebGLProgram | null = context.createProgram();
    if (shaderProgram === null) {
      throw new Error('WebGL program creation failed');
    }

    context.attachShader(shaderProgram, vertexShader);
    context.attachShader(shaderProgram, fragmentShader);
    context.linkProgram(shaderProgram);
    context.useProgram(shaderProgram);

    // eslint-disable-next-line no-console
    console.log(vertexShaderSourceCode, fragmentShaderSourceCode);
  }

  static #getShader(
    context: WebGL2RenderingContext,
    type: WebGL2RenderingContext['SHADER_TYPE'],
    sourceCode: string
  ): WebGLShader {
    const shader: WebGLShader | null = context.createShader(type);
    if (shader === null) {
      throw new Error('WebGL shader creation failed');
    }
    context.shaderSource(shader, sourceCode);
    context.compileShader(shader);
    return shader;
  }

  public run(): void {
    if (this.#renderingContext === null) {
      throw new Error('WebGL is unavailable');
    }

    BackgroundAnimation.#setupRenderingContext(this.#renderingContext);
    BackgroundAnimation.#applyShader(this.#renderingContext);
    this.#makeCanvasVisible();
  }

  #makeCanvasVisible(): void {
    this.#canvas.classList.remove('background-animation_hidden');
  }
}
