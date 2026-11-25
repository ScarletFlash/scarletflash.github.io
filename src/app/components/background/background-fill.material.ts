import { ShaderMaterial, Texture, Uniform, Vector2 } from "three";
import { BackgroundPointerUniformName } from "../../../declarations/enums/background-pointer-uniform-name.enum";
import { BackgroundPlaneUniforms } from "../../../declarations/interfaces/background-plane-uniforms.interface";
import { BackgroundPointerUniforms } from "../../../declarations/interfaces/background-pointer-uniforms.interface";
import { fillLevelShaderChunk } from "./fill-level-shader-chunk";
import { fullScreenVertexShader } from "./full-screen-vertex-shader";
import { planeShaderChunk } from "./plane-shader-chunk";
import { pointerCellShaderChunk } from "./pointer-cell-shader-chunk";
import { texelFillStateCellShaderChunk } from "./texel-fill-state-cell-shader-chunk";

const enum UniformName {
  PreviousFillState = "previousFillState",
  ElapsedTimeMilliseconds = "elapsedTimeMilliseconds",
  CellFillDurationMilliseconds = "cellFillDurationMilliseconds",
  CellFadeDurationMilliseconds = "cellFadeDurationMilliseconds",
}

interface BackgroundFillMaterialParameters {
  readonly planeUniforms: BackgroundPlaneUniforms;
  readonly cellFillDurationMilliseconds: number;
  readonly cellFadeDurationMilliseconds: number;
}

interface BackgroundFillMaterialFrameState {
  readonly elapsedTimeMilliseconds: number;
  readonly isPointerPresent: boolean;
  readonly pointerPosition: Vector2;
  readonly previousFillState: Texture;
}

const MAXIMUM_ELAPSED_TIME_MILLISECONDS: number = 250;

const fragmentShader: string = `
uniform sampler2D ${UniformName.PreviousFillState};
uniform float ${UniformName.ElapsedTimeMilliseconds};
uniform float ${UniformName.CellFillDurationMilliseconds};
uniform float ${UniformName.CellFadeDurationMilliseconds};

${planeShaderChunk}
${texelFillStateCellShaderChunk}
${fillLevelShaderChunk}
${pointerCellShaderChunk}

void main() {
    ivec2 texel = ivec2(gl_FragCoord.xy);
    PointerCell pointerCell = getCurrentPointerCell();

    vec4 previousState = texelFetch(${UniformName.PreviousFillState}, texel, 0);
    vec4 nextState = vec4(EMPTY_FILL);
    for (int channel = 0; channel < FILL_STATE_CELLS_PER_TEXEL; channel++) {
        float cellState = previousState[channel];
        bool isHovered = pointerCell.isOnPlane && getTexelFillStateCell(texel, channel) == pointerCell.fillStateCell;
        bool isFilling = isHovered || cellState >= FILLING_STATE_OFFSET;
        float fillRate = isFilling
            ? FULL_FILL / ${UniformName.CellFillDurationMilliseconds}
            : -FULL_FILL / ${UniformName.CellFadeDurationMilliseconds};
        float fill = clamp(
            getFillLevel(cellState) + fillRate * ${UniformName.ElapsedTimeMilliseconds},
            EMPTY_FILL,
            FULL_FILL
        );

        nextState[channel] = fill + FILLING_STATE_OFFSET * float(isFilling && fill < FULL_FILL);
    }

    gl_FragColor = nextState;
}
`;

export class BackgroundFillMaterial extends ShaderMaterial {
  public readonly pointerUniforms: BackgroundPointerUniforms;

  constructor({
    planeUniforms,
    cellFillDurationMilliseconds,
    cellFadeDurationMilliseconds,
  }: BackgroundFillMaterialParameters) {
    const pointerUniforms: BackgroundPointerUniforms = {
      [BackgroundPointerUniformName.Position]: new Uniform(new Vector2()),
      [BackgroundPointerUniformName.IsPresent]: new Uniform(false),
    };

    super({
      vertexShader: fullScreenVertexShader,
      fragmentShader,
      uniforms: {
        ...planeUniforms,
        ...pointerUniforms,
        [UniformName.PreviousFillState]: new Uniform(null),
        [UniformName.ElapsedTimeMilliseconds]: new Uniform(0),
        [UniformName.CellFillDurationMilliseconds]: new Uniform(cellFillDurationMilliseconds),
        [UniformName.CellFadeDurationMilliseconds]: new Uniform(cellFadeDurationMilliseconds),
      },
    });

    this.pointerUniforms = pointerUniforms;
  }

  public setFrameState({
    elapsedTimeMilliseconds,
    isPointerPresent,
    pointerPosition,
    previousFillState,
  }: BackgroundFillMaterialFrameState): void {
    this.uniforms[UniformName.ElapsedTimeMilliseconds].value = Math.min(
      elapsedTimeMilliseconds,
      MAXIMUM_ELAPSED_TIME_MILLISECONDS,
    );
    this.pointerUniforms[BackgroundPointerUniformName.IsPresent].value = isPointerPresent;
    this.pointerUniforms[BackgroundPointerUniformName.Position].value = pointerPosition;
    this.uniforms[UniformName.PreviousFillState].value = previousFillState;
  }
}
