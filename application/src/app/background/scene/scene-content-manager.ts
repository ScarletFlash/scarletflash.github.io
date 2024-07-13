import { AmbientLight, PerspectiveCamera, Scene } from 'three';
import type { Dimensions } from '../../declarations/dimensions.interface';
import { GridPlane } from './grid-plane';
import { RenderLoop } from './render-loop';

export class SceneContentManager {
  private readonly camera: PerspectiveCamera = new PerspectiveCamera();
  private readonly scene: Scene = new Scene();
  private gridPlane: GridPlane | null = null;

  private readonly renderLoop: RenderLoop = new RenderLoop(this.scene, this.camera);

  private isInitialized: boolean = false;

  constructor() {
    this.scene.add(this.camera);
    this.camera.position.z = 3;

    const light: AmbientLight = new AmbientLight(0xffffff, 1);
    this.scene.add(light);
  }

  public setContainerSize(dimensions: Dimensions): void {
    const { widthPx, heightPx }: Dimensions = dimensions;
    this.renderLoop.setDimensions(dimensions);

    this.camera.aspect = widthPx / heightPx;
    this.camera.updateProjectionMatrix();
  }

  public initialize(canvas: HTMLCanvasElement): void {
    if (this.isInitialized) {
      return;
    }

    this.renderLoop.initialize(canvas);
    const canvasDimensions: Dimensions = {
      widthPx: canvas.clientWidth,
      heightPx: canvas.clientHeight
    };
    this.setContainerSize(canvasDimensions);

    const gridPlane: GridPlane = new GridPlane(canvasDimensions);

    if (this.gridPlane !== null) {
      this.gridPlane.dispose();
    }
    this.gridPlane = gridPlane;
    this.scene.add(gridPlane);

    this.renderLoop.start(() => {
      gridPlane.material.nextFrame();
    });

    this.isInitialized = true;
  }

  public destroy(): void {
    this.gridPlane?.dispose();
    this.renderLoop.destroy();
  }
}
