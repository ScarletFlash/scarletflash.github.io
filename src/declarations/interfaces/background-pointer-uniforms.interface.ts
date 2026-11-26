import { type Uniform, type Vector2 } from 'three';
import { type BackgroundPointerUniformName } from '../enums/background-pointer-uniform-name.enum';

export interface BackgroundPointerUniforms {
  readonly [BackgroundPointerUniformName.Position]: Uniform<Vector2>;
  readonly [BackgroundPointerUniformName.IsPresent]: Uniform<boolean>;
}
