import { Color, ShaderMaterial, Uniform, Vector2 } from "three";
import { RectSize } from "../../../declarations/types/rect-size.type";
import { Timer } from "three/examples/jsm/Addons.js";

const enum UniformName {
  CanvasSize = "canvasSize",
  MovementStepDurationMs = "movementStepDurationMs",
  StrokeWidth = "strokeWidth",
  StrokeColor = "strokeColor",
  CellSize = "cellSize",
  PassedTimeMs = "passedTimeMs",
}

interface BackgroundMaterialParams {
  strokeWidth: number;
  strokeColor: Color;
  [UniformName.MovementStepDurationMs]: number;
  [UniformName.CellSize]: number;
}

const vertexShader: string = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}`;

const fragmentShader: string = `
uniform vec2 ${UniformName.CanvasSize};
uniform vec3 ${UniformName.StrokeColor};
uniform float ${UniformName.MovementStepDurationMs};
uniform float ${UniformName.CellSize};
uniform float ${UniformName.StrokeWidth};

varying vec2 vUv;

float getGridFactor(vec2 canvasUv) {
  vec2 offset = mod(${UniformName.CanvasSize}, ${UniformName.CellSize}) * 0.5;
  vec2 centeredUv = canvasUv - offset;

  vec2 normalizedCellUv = centeredUv / ${UniformName.CellSize};
  vec2 cellPosition = fract(normalizedCellUv);
  float normalizedStrokeWidth = ${UniformName.StrokeWidth} / ${UniformName.CellSize};
  vec2 linePresenceFactor = step(1.0 - normalizedStrokeWidth, cellPosition) + step(cellPosition, vec2(normalizedStrokeWidth));
  return min(1.0, linePresenceFactor.x + linePresenceFactor.y);
}

void main() {
  vec2 canvasUv = vUv * ${UniformName.CanvasSize};
  float gridFactor = getGridFactor(canvasUv);
  gl_FragColor = vec4(${UniformName.StrokeColor}, gridFactor);
}
`;

export class BackgroundMaterial extends ShaderMaterial {
  private readonly timer: Timer = new Timer();

  constructor({
    strokeWidth,
    strokeColor,
    movementStepDurationMs,
    cellSize,
  }: BackgroundMaterialParams) {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        [UniformName.CanvasSize]: new Uniform(new Vector2()),
        [UniformName.MovementStepDurationMs]: new Uniform(
          movementStepDurationMs
        ),
        [UniformName.StrokeWidth]: new Uniform(strokeWidth),
        [UniformName.StrokeColor]: new Uniform(strokeColor),
        [UniformName.CellSize]: new Uniform(cellSize),
      },
      transparent: true,
    });
  }

  public setSize({ width, height }: RectSize): void {
    const canvasSize: unknown = this.uniforms[UniformName.CanvasSize].value;
    if (!(canvasSize instanceof Vector2)) {
      throw new Error(
        `Expected [${UniformName.CanvasSize}] to be an instance of Vector2, but got [${canvasSize}]`
      );
    }
    canvasSize.set(width, height);

    console.log("Canvas size set to", width, height);
  }

  public setFrameTimeStamp(timeStamp: DOMHighResTimeStamp): void {
    this.timer.update(timeStamp);
  }
}
