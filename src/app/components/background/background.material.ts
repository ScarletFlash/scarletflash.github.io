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

vec2 applyPerspective(vec2 uv) {
    const float PERSPECTIVE_STRENGTH = 0.9;
    const float CENTER_OFFSET = 0.5;
    const float X_DISTORTION_FACTOR = 0.5;

    float x = uv.x - CENTER_OFFSET;
    float y = uv.y;

    float yDistorted = pow(1.0 - y, PERSPECTIVE_STRENGTH);
    y = 1.0 - yDistorted;

    float distortionAmount = (1.0 - y) * X_DISTORTION_FACTOR + CENTER_OFFSET;
    x = x / distortionAmount;
    x = x * CENTER_OFFSET + CENTER_OFFSET;

    return vec2(x, y);
}

float getGridFactor(vec2 canvasUv) {
    const float MIN_PERSPECTIVE_SCALE = 0.1;
    const float MAX_PERSPECTIVE_SCALE = 1.0;
    const float STROKE_WIDTH_SCALE = 0.1;
    const float VERTICAL_SMOOTHNESS_FACTOR = 0.5;
    const float HORIZONTAL_SMOOTHNESS_FACTOR = 0.7;

    vec2 normalizedUv = canvasUv / ${UniformName.CanvasSize};
    vec2 perspectiveUv = applyPerspective(normalizedUv);

    vec2 cellOffset = mod(${UniformName.CanvasSize}, ${UniformName.CellSize}) * 0.5;

    vec2 gridUv = perspectiveUv * ${UniformName.CanvasSize} - cellOffset;
    vec2 normalizedCellUv = gridUv / ${UniformName.CellSize};
    vec2 cellPosition = fract(normalizedCellUv);

    float depthFactor = 1.0 - perspectiveUv.y;
    float perspectiveScale = mix(
        MIN_PERSPECTIVE_SCALE,
        MAX_PERSPECTIVE_SCALE,
        smoothstep(0.0, 1.0, depthFactor)
    );

    float baseStrokeWidth = ${UniformName.StrokeWidth} * STROKE_WIDTH_SCALE;
    float scaledStrokeWidth = (baseStrokeWidth / ${UniformName.CellSize}) * perspectiveScale;

    float horizontalSmoothWidth = scaledStrokeWidth * HORIZONTAL_SMOOTHNESS_FACTOR;
    float horizontalLine = smoothstep(
      1.0 -scaledStrokeWidth - horizontalSmoothWidth,
      1.0 - scaledStrokeWidth + horizontalSmoothWidth,
      cellPosition.y
    ) + smoothstep(
      scaledStrokeWidth + horizontalSmoothWidth,
      scaledStrokeWidth - horizontalSmoothWidth,
      cellPosition.y
    );

    float verticalSmoothWidth = scaledStrokeWidth * VERTICAL_SMOOTHNESS_FACTOR;
    float verticalLine = smoothstep(
      1.0 - scaledStrokeWidth - verticalSmoothWidth,
      1.0 - scaledStrokeWidth + verticalSmoothWidth,
      cellPosition.x
    ) + smoothstep(
      scaledStrokeWidth + verticalSmoothWidth,
      scaledStrokeWidth - verticalSmoothWidth,
      cellPosition.x
    );

    return min(1.0, horizontalLine + verticalLine);
}

void main() {
    vec2 canvasUv = vUv * ${UniformName.CanvasSize};
    float gridFactor = getGridFactor(canvasUv);

    vec2 perspectiveUv = applyPerspective(vUv);
    float fadeout = smoothstep(1.0, 0.0, perspectiveUv.y);

    gl_FragColor = vec4(${UniformName.StrokeColor}, gridFactor * fadeout);
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
