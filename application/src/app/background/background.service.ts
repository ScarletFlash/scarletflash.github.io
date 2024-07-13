import { Injectable, type OnDestroy } from '@angular/core';
import type { Dimensions } from '../declarations/dimensions.interface';
import { SceneContentManager } from './scene/scene-content-manager';

@Injectable()
export class BackgroundService implements OnDestroy {
  private readonly sceneContentManager: SceneContentManager = new SceneContentManager();

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
