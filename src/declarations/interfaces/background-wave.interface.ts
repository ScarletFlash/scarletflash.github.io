import { type Vector2 } from 'three/webgpu';
import { type BackgroundPlaneState } from './background-plane-state.interface';

export interface BackgroundWave {
  readonly pointerPosition: Vector2;
  readonly planeState: BackgroundPlaneState;
  readonly power: number;
  readonly timeStamp: DOMHighResTimeStamp;
}
