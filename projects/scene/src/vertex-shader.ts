import type { WebGlView } from './declarations/web-gl-view.interface';
import { Shader } from './shader';

export class VertexShader extends Shader implements WebGlView<WebGLShader> {
  constructor(context: WebGL2RenderingContext, sourceCode: string) {
    super(context, sourceCode, context.VERTEX_SHADER);
  }
}
