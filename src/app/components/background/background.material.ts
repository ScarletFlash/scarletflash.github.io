import { Color, ShaderMaterial, Texture, Uniform, Vector2 } from "three";
import { BackgroundPlaneUniformName } from "../../../declarations/enums/background-plane-uniform-name.enum";
import { BackgroundPlaneState } from "../../../declarations/interfaces/background-plane-state.interface";
import { BackgroundPlaneUniforms } from "../../../declarations/interfaces/background-plane-uniforms.interface";
import { RectSize } from "../../../declarations/types/rect-size.type";
import { fillLevelShaderChunk } from "./fill-level-shader-chunk";
import { fullScreenVertexShader } from "./full-screen-vertex-shader";
import { planeShaderChunk } from "./plane-shader-chunk";
import { waveLevelShaderChunk } from "./wave-level-shader-chunk";

const enum UniformName {
  StrokeWidth = "strokeWidth",
  StrokeColor = "strokeColor",
  FillState = "fillState",
  WaveState = "waveState",
  WaveColor = "waveColor",
  DentCenter = "dentCenter",
  DentStrength = "dentStrength",
  DentDepth = "dentDepth",
  DentRadiusFraction = "dentRadiusFraction",
  DentShading = "dentShading",
}

interface BackgroundMaterialParameters {
  readonly strokeWidth: number;
  readonly strokeColor: Color;
  readonly cellSize: number;
  readonly waveState: Texture;
  readonly waveColor: Color;
  readonly dentDepth: number;
  readonly dentRadiusFraction: number;
  readonly dentShading: number;
}

interface BackgroundMaterialFrameState extends BackgroundPlaneState {
  readonly fillState: Texture;
  readonly dentCenter: Vector2;
  readonly dentStrength: number;
}

const fragmentShader: string = `
uniform vec3 ${UniformName.StrokeColor};
uniform float ${UniformName.StrokeWidth};
uniform sampler2D ${UniformName.FillState};
uniform sampler2D ${UniformName.WaveState};
uniform vec3 ${UniformName.WaveColor};
uniform vec2 ${UniformName.DentCenter};
uniform float ${UniformName.DentStrength};
uniform float ${UniformName.DentDepth};
uniform float ${UniformName.DentRadiusFraction};
uniform float ${UniformName.DentShading};

varying vec2 normalizedCanvasPosition;

${planeShaderChunk}
${fillLevelShaderChunk}
${waveLevelShaderChunk}

const float STROKE_WIDTH_SCALE = 0.1;
const float VERTICAL_SMOOTHNESS_FACTOR = 0.5;
const float HORIZONTAL_SMOOTHNESS_FACTOR = 0.7;
const vec2 SMOOTHNESS_FACTOR_BY_AXIS = vec2(VERTICAL_SMOOTHNESS_FACTOR, HORIZONTAL_SMOOTHNESS_FACTOR);
const float PIXEL_FOOTPRINT_SMOOTHNESS_FACTOR = 0.5;
const float MINIMUM_COMPOSITE_ALPHA = 0.0001;

float getCompositeAlpha(float topAlpha, float bottomAlpha) {
    return topAlpha + bottomAlpha * (1.0 - topAlpha);
}

vec3 getCompositeColor(vec3 topColor, float topAlpha, vec3 bottomColor, float compositeAlpha) {
    return mix(bottomColor, topColor, topAlpha / max(compositeAlpha, MINIMUM_COMPOSITE_ALPHA));
}

void main() {
    PlanePoint planePoint = getPlanePoint(
        normalizedCanvasPosition * ${BackgroundPlaneUniformName.CanvasSize},
        ${BackgroundPlaneUniformName.Tilt},
        ${BackgroundPlaneUniformName.GridOffset}
    );
    PlanePoint dentCenterPoint = getPlanePoint(
        ${UniformName.DentCenter},
        ${BackgroundPlaneUniformName.Tilt},
        ${BackgroundPlaneUniformName.GridOffset}
    );
    vec2 dentOffset = planePoint.gridPosition - dentCenterPoint.gridPosition;
    float dentRadius = ${UniformName.DentRadiusFraction}
        * max(${BackgroundPlaneUniformName.CanvasSize}.x, ${BackgroundPlaneUniformName.CanvasSize}.y);
    float pointDentStrength = exp(-dot(dentOffset, dentOffset) / (dentRadius * dentRadius)) * ${UniformName.DentStrength};
    vec2 gridPosition = dentCenterPoint.gridPosition + dentOffset * (1.0 + ${UniformName.DentDepth} * pointDentStrength);
    float dentShadingFactor = 1.0 - ${UniformName.DentShading} * pointDentStrength;

    vec2 antialiasingWidth = fwidth(gridPosition) * PIXEL_FOOTPRINT_SMOOTHNESS_FACTOR;
    float strokeHalfWidth = ${UniformName.StrokeWidth} * STROKE_WIDTH_SCALE;
    vec2 drawnHalfWidth = max(antialiasingWidth, strokeHalfWidth);
    vec2 smoothWidth = max(antialiasingWidth, strokeHalfWidth * SMOOTHNESS_FACTOR_BY_AXIS);

    vec2 cellPosition = fract(gridPosition / ${BackgroundPlaneUniformName.CellSize});
    vec2 lineDistance = min(cellPosition, 1.0 - cellPosition) * ${BackgroundPlaneUniformName.CellSize};
    vec2 lineFactor = (1.0 - smoothstep(drawnHalfWidth - smoothWidth, drawnHalfWidth + smoothWidth, lineDistance))
        * strokeHalfWidth / drawnHalfWidth;

    float gridFactor = min(1.0, lineFactor.x + lineFactor.y);
    ivec2 fillStateCell = getFillStateCell(gridPosition, ${BackgroundPlaneUniformName.RowShift});
    ivec2 fillStateTexel = ivec2(fillStateCell.x, fillStateCell.y / FILL_STATE_CELLS_PER_TEXEL);
    int fillStateChannel = fillStateCell.y % FILL_STATE_CELLS_PER_TEXEL;
    float storedFill = getFillLevel(texelFetch(${UniformName.FillState}, fillStateTexel, 0)[fillStateChannel]);
    float storedWave = texelFetch(${UniformName.WaveState}, fillStateTexel, 0)[fillStateChannel];
    float easedFill = smoothstep(EMPTY_FILL, FULL_FILL, storedFill);
    float easedWave = smoothstep(NO_WAVE, FULL_WAVE, storedWave);

    float fillAlpha = min(easedFill * dentShadingFactor, 1.0);
    float lineAlpha = min(gridFactor * dentShadingFactor, 1.0);
    float cellAlpha = getCompositeAlpha(easedWave, fillAlpha);
    vec3 cellColor = getCompositeColor(${UniformName.WaveColor}, easedWave, ${UniformName.StrokeColor}, cellAlpha);
    float alpha = getCompositeAlpha(lineAlpha, cellAlpha);
    vec3 color = getCompositeColor(${UniformName.StrokeColor}, lineAlpha, cellColor, alpha);

    gl_FragColor = vec4(color, alpha * planePoint.visibility);
}
`;

export class BackgroundMaterial extends ShaderMaterial {
  public readonly planeUniforms: BackgroundPlaneUniforms;

  constructor({
    strokeWidth,
    strokeColor,
    cellSize,
    waveState,
    waveColor,
    dentDepth,
    dentRadiusFraction,
    dentShading,
  }: BackgroundMaterialParameters) {
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
        [UniformName.WaveState]: new Uniform(waveState),
        [UniformName.WaveColor]: new Uniform(waveColor),
        [UniformName.DentCenter]: new Uniform(new Vector2()),
        [UniformName.DentStrength]: new Uniform(0),
        [UniformName.DentDepth]: new Uniform(dentDepth),
        [UniformName.DentRadiusFraction]: new Uniform(dentRadiusFraction),
        [UniformName.DentShading]: new Uniform(dentShading),
      },
      transparent: true,
    });

    this.planeUniforms = planeUniforms;
  }

  public setSize({ width, height }: RectSize): void {
    this.planeUniforms[BackgroundPlaneUniformName.CanvasSize].value.set(width, height);
  }

  public setFrameState({
    tilt,
    gridOffset,
    rowShift,
    fillState,
    dentCenter,
    dentStrength,
  }: BackgroundMaterialFrameState): void {
    this.planeUniforms[BackgroundPlaneUniformName.Tilt].value = tilt;
    this.planeUniforms[BackgroundPlaneUniformName.GridOffset].value = gridOffset;
    this.planeUniforms[BackgroundPlaneUniformName.RowShift].value = rowShift;
    this.uniforms[UniformName.FillState].value = fillState;
    this.uniforms[UniformName.DentCenter].value = dentCenter;
    this.uniforms[UniformName.DentStrength].value = dentStrength;
  }
}
