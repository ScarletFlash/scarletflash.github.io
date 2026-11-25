import { Uniform, Vector2 } from "three";
import { BackgroundPlaneUniformName } from "../enums/background-plane-uniform-name.enum";

export interface BackgroundPlaneUniforms {
  readonly [BackgroundPlaneUniformName.CanvasSize]: Uniform<Vector2>;
  readonly [BackgroundPlaneUniformName.CellSize]: Uniform<number>;
  readonly [BackgroundPlaneUniformName.Tilt]: Uniform<number>;
  readonly [BackgroundPlaneUniformName.GridOffset]: Uniform<number>;
  readonly [BackgroundPlaneUniformName.RowShift]: Uniform<number>;
}
