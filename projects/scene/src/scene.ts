import { Context } from './context';
import { FragmentShader } from './fragment-shader';
import { ShaderProgram } from './shader-program';
import fragmentShaderSourceCode from './shaders/fragment.glsl';
import vertexShaderSourceCode from './shaders/vertex.glsl';
import { VertexShader } from './vertex-shader';

export class Scene {
  readonly #canvas: HTMLCanvasElement;
  readonly #renderingContext: WebGL2RenderingContext;

  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas;
    this.#renderingContext = new Context(canvas).view;
  }

  static #applyShaders(context: WebGL2RenderingContext): void {
    const vertexShader: VertexShader = new VertexShader(context, vertexShaderSourceCode);
    const fragmentShader: FragmentShader = new FragmentShader(context, fragmentShaderSourceCode);

    const shaderProgram: ShaderProgram = new ShaderProgram({
      context,
      vertexShader,
      fragmentShader,
    });

    shaderProgram.run();
  }

  public run(): void {
    if (this.#renderingContext === null) {
      throw new Error('WebGL is unavailable');
    }

    Scene.#applyShaders(this.#renderingContext);
    this.#makeCanvasVisible();
  }

  #makeCanvasVisible(): void {
    this.#canvas.classList.remove('background-animation_hidden');
  }
}
