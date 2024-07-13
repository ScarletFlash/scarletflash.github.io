import { Injectable, type OnDestroy } from '@angular/core';
import { SceneContentManager } from '@repo_/lib-background';
import type { Dimensions } from '../declarations/dimensions.interface';

@Injectable()
export class BackgroundService implements OnDestroy {
  private readonly sceneContentManager: SceneContentManager =
    new SceneContentManager();

  public attachCanvas(canvas: HTMLCanvasElement): void {
    if (typeof window === 'undefined') {
      return;
    }
    this.sceneContentManager.initialize(canvas);
  }

  public setContainerSize(dimensions: Dimensions): void {
    this.sceneContentManager.setContainerSize(dimensions);
  }

  public ngOnDestroy(): void {
    this.sceneContentManager.destroy();
  }
}
