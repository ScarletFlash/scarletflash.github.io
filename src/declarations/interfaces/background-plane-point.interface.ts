import { type Node } from 'three/webgpu';

export interface BackgroundPlanePoint {
  readonly gridPosition: Node<'vec2'>;
  readonly visibility: Node<'float'>;
  readonly depthRatio: Node<'float'>;
  readonly cameraPosition: Node<'vec3'>;
}
