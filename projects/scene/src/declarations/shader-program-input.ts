import type { WebGlView } from './web-gl-view.interface';

export interface ShaderProgramInput {
  context: WebGL2RenderingContext;
  fragmentShader: WebGlView<WebGLShader>;
  vertexShader: WebGlView<WebGLShader>;
}
