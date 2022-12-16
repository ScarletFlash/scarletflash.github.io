import fragmentShaderSourceCode from './shaders/fragment.glsl';
import vertexShaderSourceCode from './shaders/vertex.glsl';

interface ShaderProgramInput {
  context: WebGL2RenderingContext;
  fragmentShader: WebGLShader;
  vertexShader: WebGLShader;
}

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

    const shaderProgram: WebGLProgram = BackgroundAnimation.#getShaderProgram({
      context,
      vertexShader,
      fragmentShader,
    });
    context.useProgram(shaderProgram);

    // // eslint-disable-next-line no-console
    // console.log(vertexShaderSourceCode, fragmentShaderSourceCode);
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
    const isCompiledSuccessfully: unknown = context.getShaderParameter(shader, context.COMPILE_STATUS);

    if (typeof isCompiledSuccessfully !== 'boolean' || !isCompiledSuccessfully) {
      context.deleteShader(shader);
      throw new Error('WebGL shader compilation failed');
    }

    return shader;
  }

  static #getShaderProgram({ fragmentShader, vertexShader, context }: ShaderProgramInput): WebGLProgram {
    const program: WebGLProgram | null = context.createProgram();
    if (program === null) {
      throw new Error('WebGL program creation failed');
    }

    context.attachShader(program, fragmentShader);
    context.attachShader(program, vertexShader);

    context.linkProgram(program);

    const isLinkedSuccessfully: unknown = context.getProgramParameter(program, context.LINK_STATUS);
    if (typeof isLinkedSuccessfully !== 'boolean' || !isLinkedSuccessfully) {
      context.deleteProgram(program);
      throw new Error('WebGL program linking failed');
    }

    return program;
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
