import type { WebGlView } from './declarations/web-gl-view.interface';

export class Context implements WebGlView<WebGL2RenderingContext> {
  readonly #webGlRenderingContext: WebGL2RenderingContext;

  constructor(canvas: HTMLCanvasElement) {
    const context: WebGL2RenderingContext | null = canvas.getContext('webgl2', {
      antialias: true,
      failIfMajorPerformanceCaveat: true,
    });

    if (context === null) {
      throw new Error('WebGL is unaccessible');
    }

    context.viewport(0, 0, context.canvas.width, context.canvas.height);
    const { COLOR_BUFFER_BIT, DEPTH_TEST, LEQUAL }: WebGL2RenderingContext = context;
    context.clearColor(1, 1, 1, 1);
    context.enable(DEPTH_TEST);
    context.depthFunc(LEQUAL);
    context.clear(COLOR_BUFFER_BIT);

    this.#webGlRenderingContext = context;
  }

  public get view(): WebGL2RenderingContext {
    return this.#webGlRenderingContext;
  }
}
