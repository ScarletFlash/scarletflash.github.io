import { Vector3 } from "three";
import { BackgroundPlaneState } from "../declarations/interfaces/background-plane-state.interface";

export function getPlaneStateVector({ tilt, gridOffset, rowShift }: BackgroundPlaneState): Vector3 {
  return new Vector3(tilt, gridOffset, rowShift);
}
