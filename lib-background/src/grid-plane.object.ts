import { Mesh, PlaneGeometry } from 'three';
import type { Dimensions } from './dimensions.interface';
import { GridMaterial } from './grid.material';

export class GridPlane extends Mesh<PlaneGeometry, GridMaterial> {
  constructor(dimensions: Dimensions) {
    const material: GridMaterial = new GridMaterial(dimensions);
    const geometry: PlaneGeometry = new PlaneGeometry(10, 10);
    super(geometry, material);
    this.rotation.x = -Math.PI / 3;
    this.translateZ(1);
  }

  public dispose(): void {
    this.removeFromParent();
    this.geometry.dispose();
    this.material.dispose();
  }
}
