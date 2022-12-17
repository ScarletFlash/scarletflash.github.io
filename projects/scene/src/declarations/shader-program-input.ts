import type { shaderProgram } from '../shader-program';
import type { WebGlView } from './web-gl-view.interface';

export interface ShaderProgramInput {
  context: WebGL2RenderingContext;
  fragmentShader: WebGlView<shaderProgram>;
  vertexShader: WebGlView<shaderProgram>;
}
