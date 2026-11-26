import { type Node } from 'three/webgpu';

export interface BackgroundPointerCell {
  readonly isOnPlane: Node<'bool'>;
  readonly fillStateCell: Node<'ivec2'>;
}
