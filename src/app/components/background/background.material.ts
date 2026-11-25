import { Color, ShaderMaterial, Texture, Uniform, Vector2 } from "three";
import { BackgroundPlaneUniformName } from "../../../declarations/enums/background-plane-uniform-name.enum";
import { BackgroundPlaneUniforms } from "../../../declarations/interfaces/background-plane-uniforms.interface";
import { RectSize } from "../../../declarations/types/rect-size.type";
import { fullScreenVertexShader } from "./full-screen-vertex-shader";
import { planeShaderChunk } from "./plane-shader-chunk";

const enum UniformName {
  StrokeWidth = "strokeWidth",
  StrokeColor = "strokeColor",
  FillState = "fillState",
}

interface BackgroundMaterialParameters {
  readonly strokeWidth: number;
  readonly strokeColor: Color;
  readonly cellSize: number;
}

interface BackgroundMaterialFrameState {
  readonly tilt: number;
  readonly gridOffset: number;
  readonly rowShift: number;
  readonly fillState: Texture;
}

const fragmentShader: string = `
uniform vec3 ${UniformName.StrokeColor};
uniform float ${UniformName.StrokeWidth};
uniform sampler2D ${UniformName.FillState};

varying vec2 normalizedCanvasPosition;

${planeShaderChunk}

const float STROKE_WIDTH_SCALE = 0.1;
const float VERTICAL_SMOOTHNESS_FACTOR = 0.5;
const float HORIZONTAL_SMOOTHNESS_FACTOR = 0.7;
const vec2 SMOOTHNESS_FACTOR_BY_AXIS = vec2(VERTICAL_SMOOTHNESS_FACTOR, HORIZONTAL_SMOOTHNESS_FACTOR);
const float PIXEL_FOOTPRINT_SMOOTHNESS_FACTOR = 0.5;

void main() {
    PlanePoint planePoint = getPlanePoint(normalizedCanvasPosition * ${BackgroundPlaneUniformName.CanvasSize});

    vec2 antialiasingWidth = fwidth(planePoint.gridPosition) * PIXEL_FOOTPRINT_SMOOTHNESS_FACTOR;
    float strokeHalfWidth = ${UniformName.StrokeWidth} * STROKE_WIDTH_SCALE;
    vec2 drawnHalfWidth = max(antialiasingWidth, strokeHalfWidth);
    vec2 smoothWidth = max(antialiasingWidth, strokeHalfWidth * SMOOTHNESS_FACTOR_BY_AXIS);

    vec2 cellPosition = fract(planePoint.gridPosition / ${BackgroundPlaneUniformName.CellSize});
    vec2 lineDistance = min(cellPosition, 1.0 - cellPosition) * ${BackgroundPlaneUniformName.CellSize};
    vec2 lineFactor = (1.0 - smoothstep(drawnHalfWidth - smoothWidth, drawnHalfWidth + smoothWidth, lineDistance))
        * strokeHalfWidth / drawnHalfWidth;

    float gridFactor = min(1.0, lineFactor.x + lineFactor.y);
    ivec2 fillStateCell = getFillStateCell(planePoint.gridPosition);
    vec4 fillStateTexel = texelFetch(${UniformName.FillState}, getFillStateTexel(fillStateCell), 0);
    float storedFill = getFillLevel(fillStateTexel[getFillStateChannel(fillStateCell)]);
    float easedFill = smoothstep(EMPTY_FILL, FULL_FILL, storedFill);

    gl_FragColor = vec4(${UniformName.StrokeColor}, max(gridFactor, easedFill) * planePoint.visibility);
}
`;

export class BackgroundMaterial extends ShaderMaterial {
  public readonly planeUniforms: BackgroundPlaneUniforms;

  constructor({ strokeWidth, strokeColor, cellSize }: BackgroundMaterialParameters) {
    const planeUniforms: BackgroundPlaneUniforms = {
      [BackgroundPlaneUniformName.CanvasSize]: new Uniform(new Vector2()),
      [BackgroundPlaneUniformName.CellSize]: new Uniform(cellSize),
      [BackgroundPlaneUniformName.Tilt]: new Uniform(0),
      [BackgroundPlaneUniformName.GridOffset]: new Uniform(0),
      [BackgroundPlaneUniformName.RowShift]: new Uniform(0),
    };

    super({
      vertexShader: fullScreenVertexShader,
      fragmentShader,
      uniforms: {
        ...planeUniforms,
        [UniformName.StrokeWidth]: new Uniform(strokeWidth),
        [UniformName.StrokeColor]: new Uniform(strokeColor),
        [UniformName.FillState]: new Uniform(null),
      },
      transparent: true,
    });

    this.planeUniforms = planeUniforms;
  }

  public setSize({ width, height }: RectSize): void {
    this.planeUniforms[BackgroundPlaneUniformName.CanvasSize].value.set(width, height);
  }

  public setFrameState({ tilt, gridOffset, rowShift, fillState }: BackgroundMaterialFrameState): void {
    this.planeUniforms[BackgroundPlaneUniformName.Tilt].value = tilt;
    this.planeUniforms[BackgroundPlaneUniformName.GridOffset].value = gridOffset;
    this.planeUniforms[BackgroundPlaneUniformName.RowShift].value = rowShift;
    this.uniforms[UniformName.FillState].value = fillState;
  }
}
