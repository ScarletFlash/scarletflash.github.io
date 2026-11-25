import { Vector2 } from "three";
import { BackgroundPlaneState } from "./background-plane-state.interface";

export interface BackgroundWave {
  readonly pointerPosition: Vector2;
  readonly planeState: BackgroundPlaneState;
  readonly power: number;
  readonly timeStamp: DOMHighResTimeStamp;
}
