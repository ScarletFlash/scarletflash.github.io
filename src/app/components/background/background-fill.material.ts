import { ShaderMaterial, Uniform, Vector2, Vector3, type Texture } from 'three';
import { type BackgroundPlaneState } from '../../../declarations/interfaces/background-plane-state.interface';
import { type BackgroundPlaneUniforms } from '../../../declarations/interfaces/background-plane-uniforms.interface';
import { type BackgroundPointerUniforms } from '../../../declarations/interfaces/background-pointer-uniforms.interface';
import { getPlaneStateVector } from '../../../utilities/get-plane-state-vector.utility';
import { fillLevelShaderChunk } from './fill-level-shader-chunk';
import { fullScreenVertexShader } from './full-screen-vertex-shader';
import { planeShaderChunk } from './plane-shader-chunk';
import { pointerCellShaderChunk } from './pointer-cell-shader-chunk';

const enum UniformName {
  PreviousFillState = 'previousFillState',
  ElapsedTimeMilliseconds = 'elapsedTimeMilliseconds',
  CellFillDurationMilliseconds = 'cellFillDurationMilliseconds',
  CellFadeDurationMilliseconds = 'cellFadeDurationMilliseconds',
  IsPressed = 'isPressed',
  PreviousPointerPosition = 'previousPointerPosition',
  IsPreviousPointerPresent = 'isPreviousPointerPresent',
  PreviousPlaneState = 'previousPlaneState'
}

interface BackgroundFillMaterialParameters {
  readonly planeUniforms: BackgroundPlaneUniforms;
  readonly pointerUniforms: BackgroundPointerUniforms;
  readonly cellFillDurationMilliseconds: number;
  readonly cellFadeDurationMilliseconds: number;
}

interface BackgroundFillMaterialFrameState {
  readonly elapsedTimeMilliseconds: number;
  readonly previousFillState: Texture;
  readonly isPressed: boolean;
  readonly previousPointerPosition: Vector2;
  readonly isPreviousPointerPresent: boolean;
  readonly previousPlaneState: BackgroundPlaneState;
}

const MAXIMUM_ELAPSED_TIME_MILLISECONDS = 250;

const fragmentShader = `
uniform sampler2D ${UniformName.PreviousFillState};
uniform float ${UniformName.ElapsedTimeMilliseconds};
uniform float ${UniformName.CellFillDurationMilliseconds};
uniform float ${UniformName.CellFadeDurationMilliseconds};
uniform bool ${UniformName.IsPressed};
uniform vec2 ${UniformName.PreviousPointerPosition};
uniform bool ${UniformName.IsPreviousPointerPresent};
uniform vec3 ${UniformName.PreviousPlaneState};

${planeShaderChunk}
${fillLevelShaderChunk}
${pointerCellShaderChunk}

void main() {
    ivec2 texel = ivec2(gl_FragCoord.xy);
    PointerCell pointerCell = getCurrentPointerCell();
    PointerCell previousPointerCell = getPointerCellAtPlaneState(
        ${UniformName.PreviousPointerPosition},
        ${UniformName.PreviousPlaneState}
    );
    float carriedFill = ${UniformName.IsPressed}
        && ${UniformName.IsPreviousPointerPresent}
        && previousPointerCell.isOnPlane
        ? getStoredFillLevel(${UniformName.PreviousFillState}, previousPointerCell.fillStateCell)
        : EMPTY_FILL;

    vec4 previousState = texelFetch(${UniformName.PreviousFillState}, texel, 0);
    vec4 nextState = vec4(EMPTY_FILL);
    for (int channel = 0; channel < FILL_STATE_CELLS_PER_TEXEL; channel++) {
        ivec2 cell = ivec2(texel.x, texel.y * FILL_STATE_CELLS_PER_TEXEL + channel);
        float cellState = previousState[channel];
        bool isHovered = pointerCell.isOnPlane && cell == pointerCell.fillStateCell;
        bool isFilling = isHovered || cellState >= FILLING_STATE_OFFSET;
        float fillRate = isFilling
            ? FULL_FILL / ${UniformName.CellFillDurationMilliseconds}
            : -FULL_FILL / ${UniformName.CellFadeDurationMilliseconds};
        float fill = max(
            clamp(getFillLevel(cellState) + fillRate * ${UniformName.ElapsedTimeMilliseconds}, EMPTY_FILL, FULL_FILL),
            isHovered ? carriedFill : EMPTY_FILL
        );

        nextState[channel] = fill + FILLING_STATE_OFFSET * float(isFilling && fill < FULL_FILL);
    }

    gl_FragColor = nextState;
}
`;

export class BackgroundFillMaterial extends ShaderMaterial {
  private readonly previousPlaneStateVector: Vector3;

  constructor({
    planeUniforms,
    pointerUniforms,
    cellFillDurationMilliseconds,
    cellFadeDurationMilliseconds
  }: BackgroundFillMaterialParameters) {
    const previousPlaneStateVector = new Vector3();

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
        [UniformName.IsPressed]: new Uniform(false),
        [UniformName.PreviousPointerPosition]: new Uniform(new Vector2()),
        [UniformName.IsPreviousPointerPresent]: new Uniform(false),
        [UniformName.PreviousPlaneState]: new Uniform(previousPlaneStateVector)
      }
    });

    this.previousPlaneStateVector = previousPlaneStateVector;
  }

  public setFrameState({
    elapsedTimeMilliseconds,
    previousFillState,
    isPressed,
    previousPointerPosition,
    isPreviousPointerPresent,
    previousPlaneState
  }: BackgroundFillMaterialFrameState): void {
    this.uniforms[UniformName.ElapsedTimeMilliseconds].value = Math.min(
      elapsedTimeMilliseconds,
      MAXIMUM_ELAPSED_TIME_MILLISECONDS
    );
    this.uniforms[UniformName.PreviousFillState].value = previousFillState;
    this.uniforms[UniformName.IsPressed].value = isPressed;
    this.uniforms[UniformName.PreviousPointerPosition].value = previousPointerPosition;
    this.uniforms[UniformName.IsPreviousPointerPresent].value = isPreviousPointerPresent;
    this.previousPlaneStateVector.copy(getPlaneStateVector(previousPlaneState));
  }
}
