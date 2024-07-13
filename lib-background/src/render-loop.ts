import { type Camera, Color, type Scene, WebGLRenderer } from 'three';
import type { Dimensions } from './dimensions.interface';

class NotInitializedError extends Error {
  constructor() {
    super('WebGLRenderer is not initialized');
  }
}

class NotDestroyedError extends Error {
  constructor() {
    super('WebGLRenderer is not destroyed');
  }
}

export class RenderLoop {
  private webGLRenderer: WebGLRenderer | null = null;

  constructor(
    private readonly scene: Scene,
    private readonly camera: Camera,
  ) {}

  public initialize(canvas: HTMLCanvasElement): void {
    if (this.webGLRenderer !== null) {
      throw new NotDestroyedError();
    }

    const webGLRenderer: WebGLRenderer = new WebGLRenderer({
      canvas,
      antialias: true,
    });
    webGLRenderer.setClearColor(new Color(0x000000), 0);
    this.webGLRenderer = webGLRenderer;
  }

  public destroy(): void {
    if (this.webGLRenderer === null) {
      return;
    }

    this.webGLRenderer.dispose();
    this.webGLRenderer = null;
  }

  public setDimensions({ widthPx, heightPx }: Dimensions): void {
    if (this.webGLRenderer === null) {
      throw new NotInitializedError();
    }

    this.webGLRenderer.setSize(widthPx, heightPx);
  }

  public start(
    onRender?: (timeSinceLastFrameMs?: DOMHighResTimeStamp) => void,
  ): void {
    if (this.webGLRenderer === null) {
      throw new NotInitializedError();
    }

    const webGLRenderer: WebGLRenderer = this.webGLRenderer;
    webGLRenderer.setAnimationLoop(
      (timeSinceLastFrameMs: DOMHighResTimeStamp) => {
        webGLRenderer.render(this.scene, this.camera);

        if (typeof onRender !== 'function') {
          return;
        }
        onRender(timeSinceLastFrameMs);
      },
    );
  }

  public stop(): void {
    if (this.webGLRenderer === null) {
      throw new NotInitializedError();
    }

    this.webGLRenderer.setAnimationLoop(null);
  }
}
