import { float, smoothstep } from 'three/tsl';
import { type Node } from 'three/webgpu';
import { FADE_END_DEPTH_RATIO } from './fade-end-depth-ratio';

const FADE_START_DEPTH_RATIO = 1;

export function getDepthVisibility(depthRatio: Node<'float'>): Node<'float'> {
  return float(1).sub(smoothstep(FADE_START_DEPTH_RATIO, FADE_END_DEPTH_RATIO, depthRatio));
}
