import type { ShaderProgramInput } from './declarations/shader-program-input.interface';
import type { WebGlView } from './declarations/web-gl-view.interface';

export class ShaderProgram implements WebGlView<WebGLProgram> {
  readonly #webGlProgram: WebGLProgram;
  readonly #context: WebGL2RenderingContext;

  constructor({ context, fragmentShader, vertexShader }: ShaderProgramInput) {
    const program: WebGLProgram | null = context.createProgram();
    if (program === null) {
      throw new Error('WebGL program creation failed');
    }

    context.attachShader(program, fragmentShader.view);
    context.attachShader(program, vertexShader.view);

    context.linkProgram(program);

    const isLinkedSuccessfully: unknown = context.getProgramParameter(program, context.LINK_STATUS);
    if (typeof isLinkedSuccessfully !== 'boolean' || !isLinkedSuccessfully) {
      context.deleteProgram(program);
      throw new Error('WebGL program linking failed');
    }

    this.#webGlProgram = program;
    this.#context = context;
  }

  public get view(): WebGLProgram {
    return this.#webGlProgram;
  }

  public run(): void {
    const positionAttributeLocation: number = this.#context.getAttribLocation(this.#webGlProgram, 'a_position');
    const positionBuffer: WebGLBuffer | null = this.#context.createBuffer();
    if (positionBuffer === null) {
      throw new Error('WebGL buffer creation failed');
    }
    this.#context.bindBuffer(this.#context.ARRAY_BUFFER, positionBuffer);

    const positions: Float32Array = new Float32Array([0, 0, 0, 0.5, 0.7, 0]);
    this.#context.bufferData(this.#context.ARRAY_BUFFER, positions, this.#context.STATIC_DRAW);

    const vertexArrayObject: WebGLVertexArrayObject | null = this.#context.createVertexArray();
    if (vertexArrayObject === null) {
      throw new Error('WebGL vertex array object creation failed');
    }

    this.#context.bindVertexArray(vertexArrayObject);
    this.#context.enableVertexAttribArray(positionAttributeLocation);

    const size: number = 2; // 2 components per iteration
    const type: number = this.#context.FLOAT; // the data is 32bit floats
    const normalize: boolean = false; // don't normalize the data
    const stride: number = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
    const offset: number = 0; // start at the beginning of the buffer
    this.#context.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

    this.#context.useProgram(this.#webGlProgram);
    this.#context.bindVertexArray(vertexArrayObject);

    this.#context.drawArrays(this.#context.TRIANGLES, 0, 3);
  }
}
