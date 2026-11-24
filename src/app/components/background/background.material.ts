import { Color, ShaderMaterial, Uniform, Vector2 } from "three";
import { RectSize } from "../../../declarations/types/rect-size.type";

const enum UniformName {
  CanvasSize = "canvasSize",
  StrokeWidth = "strokeWidth",
  StrokeColor = "strokeColor",
  CellSize = "cellSize",
  Tilt = "tilt",
  GridOffset = "gridOffset",
}

interface BackgroundMaterialParameters {
  readonly strokeWidth: number;
  readonly strokeColor: Color;
  readonly cellSize: number;
}

interface BackgroundMaterialFrameState {
  readonly tilt: number;
  readonly gridOffset: number;
}

const vertexShader: string = `
varying vec2 normalizedCanvasPosition;

void main() {
    normalizedCanvasPosition = uv;
    gl_Position = vec4(position, 1.0);
}`;

const fragmentShader: string = `
uniform vec2 ${UniformName.CanvasSize};
uniform vec3 ${UniformName.StrokeColor};
uniform float ${UniformName.CellSize};
uniform float ${UniformName.StrokeWidth};
uniform float ${UniformName.Tilt};
uniform float ${UniformName.GridOffset};

varying vec2 normalizedCanvasPosition;

const float FLOOR_ANGLE = radians(67.0);
const float HALF_VERTICAL_FIELD_OF_VIEW = radians(22.5);
const float FADE_START_DEPTH_RATIO = 1.0;
const float FADE_END_DEPTH_RATIO = 3.0;
const float MINIMUM_INVERSE_DEPTH_RATIO = 0.001;
const float STROKE_WIDTH_SCALE = 0.1;
const float VERTICAL_SMOOTHNESS_FACTOR = 0.5;
const float HORIZONTAL_SMOOTHNESS_FACTOR = 0.7;
const vec2 SMOOTHNESS_FACTOR_BY_AXIS = vec2(VERTICAL_SMOOTHNESS_FACTOR, HORIZONTAL_SMOOTHNESS_FACTOR);
const float PIXEL_FOOTPRINT_SMOOTHNESS_FACTOR = 0.5;

void main() {
    vec2 halfCanvasSize = ${UniformName.CanvasSize} * 0.5;
    vec2 screenPosition = normalizedCanvasPosition * ${UniformName.CanvasSize} - halfCanvasSize;
    float angle = ${UniformName.Tilt} * FLOOR_ANGLE;
    float cameraDistance = halfCanvasSize.y / tan(HALF_VERTICAL_FIELD_OF_VIEW);

    float inverseDepthRatio = 1.0 - screenPosition.y * tan(angle) / cameraDistance;
    float planeHitFactor = step(MINIMUM_INVERSE_DEPTH_RATIO, inverseDepthRatio);
    float depthRatio = 1.0 / max(inverseDepthRatio, MINIMUM_INVERSE_DEPTH_RATIO);

    vec2 planePosition = vec2(screenPosition.x, screenPosition.y / cos(angle)) * depthRatio;
    vec2 gridPosition = planePosition + vec2(0.0, ${UniformName.GridOffset});

    vec2 antialiasingWidth = fwidth(gridPosition) * PIXEL_FOOTPRINT_SMOOTHNESS_FACTOR;
    float strokeHalfWidth = ${UniformName.StrokeWidth} * STROKE_WIDTH_SCALE;
    vec2 drawnHalfWidth = max(antialiasingWidth, strokeHalfWidth);
    vec2 smoothWidth = max(antialiasingWidth, strokeHalfWidth * SMOOTHNESS_FACTOR_BY_AXIS);

    vec2 cellPosition = fract(gridPosition / ${UniformName.CellSize});
    vec2 lineDistance = min(cellPosition, 1.0 - cellPosition) * ${UniformName.CellSize};
    vec2 lineFactor = (1.0 - smoothstep(drawnHalfWidth - smoothWidth, drawnHalfWidth + smoothWidth, lineDistance))
        * strokeHalfWidth / drawnHalfWidth;

    float gridFactor = min(1.0, lineFactor.x + lineFactor.y);
    float fadeFactor = 1.0 - smoothstep(FADE_START_DEPTH_RATIO, FADE_END_DEPTH_RATIO, depthRatio);

    gl_FragColor = vec4(${UniformName.StrokeColor}, gridFactor * fadeFactor * planeHitFactor);
}
`;

export class BackgroundMaterial extends ShaderMaterial {
  constructor({ strokeWidth, strokeColor, cellSize }: BackgroundMaterialParameters) {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        [UniformName.CanvasSize]: new Uniform(new Vector2()),
        [UniformName.StrokeWidth]: new Uniform(strokeWidth),
        [UniformName.StrokeColor]: new Uniform(strokeColor),
        [UniformName.CellSize]: new Uniform(cellSize),
        [UniformName.Tilt]: new Uniform(0),
        [UniformName.GridOffset]: new Uniform(0),
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
  }

  public setFrameState({ tilt, gridOffset }: BackgroundMaterialFrameState): void {
    this.uniforms[UniformName.Tilt].value = tilt;
    this.uniforms[UniformName.GridOffset].value = gridOffset;
  }
}
