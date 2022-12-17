import type { WebGlView } from './declarations/web-gl-view.interface';

export class Shader implements WebGlView<WebGLShader> {
  readonly #webGlShader: WebGLShader;

  constructor(context: WebGL2RenderingContext, sourceCode: string, type: number) {
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

    this.#webGlShader = shader;
  }

  public get view(): WebGLShader {
    return this.#webGlShader;
  }
}
