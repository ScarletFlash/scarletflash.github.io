import type { WebGlView } from './declarations/web-gl-view.interface';

interface Size {
  widthPx: number;
  heightPx: number;
}

export class Context implements WebGlView<WebGL2RenderingContext> {
  readonly #webGlRenderingContext: WebGL2RenderingContext;

  constructor(canvas: HTMLCanvasElement) {
    const context: WebGL2RenderingContext | null = canvas.getContext('webgl2', {
      antialias: true,
      desynchronized: true,
      failIfMajorPerformanceCaveat: true,
    });

    if (context === null) {
      throw new Error('WebGL is unaccessible');
    }

    this.#webGlRenderingContext = context;

    const { COLOR_BUFFER_BIT, DEPTH_TEST, LEQUAL }: WebGL2RenderingContext = this.#webGlRenderingContext;
    this.#webGlRenderingContext.clearColor(1, 1, 1, 1);
    this.#webGlRenderingContext.enable(DEPTH_TEST);
    this.#webGlRenderingContext.depthFunc(LEQUAL);
    this.#webGlRenderingContext.clear(COLOR_BUFFER_BIT);

    this.updateSize({
      widthPx: canvas.width,
      heightPx: canvas.height,
    });
  }

  public get view(): WebGL2RenderingContext {
    return this.#webGlRenderingContext;
  }

  public updateSize({ widthPx, heightPx }: Size): void {
    this.#webGlRenderingContext.viewport(0, 0, widthPx, heightPx);
  }
}
