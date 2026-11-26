import { step } from 'three/tsl';
import { type Node } from 'three/webgpu';
import { FILLING_STATE_OFFSET } from './filling-state-offset';

export function getFillLevel(cellState: Node<'float'>): Node<'float'> {
  return cellState.sub(step(FILLING_STATE_OFFSET, cellState).mul(FILLING_STATE_OFFSET));
}
