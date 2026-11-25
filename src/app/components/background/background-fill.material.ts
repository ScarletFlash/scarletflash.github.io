import { ShaderMaterial, Texture, Uniform, Vector2 } from "three";
import { BackgroundPlaneUniformName } from "../../../declarations/enums/background-plane-uniform-name.enum";
import { BackgroundPlaneUniforms } from "../../../declarations/interfaces/background-plane-uniforms.interface";
import { fullScreenVertexShader } from "./full-screen-vertex-shader";
import { planeShaderChunk } from "./plane-shader-chunk";

const enum UniformName {
  PreviousFillState = "previousFillState",
  PointerPosition = "pointerPosition",
  IsPointerPresent = "isPointerPresent",
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
uniform vec2 ${UniformName.PointerPosition};
uniform bool ${UniformName.IsPointerPresent};
uniform float ${UniformName.ElapsedTimeMilliseconds};
uniform float ${UniformName.CellFillDurationMilliseconds};
uniform float ${UniformName.CellFadeDurationMilliseconds};

${planeShaderChunk}

void main() {
    ivec2 texel = ivec2(gl_FragCoord.xy);
    bool isPointerOverCanvas = ${UniformName.IsPointerPresent}
        && all(greaterThanEqual(${UniformName.PointerPosition}, vec2(0.0)))
        && all(lessThan(${UniformName.PointerPosition}, ${BackgroundPlaneUniformName.CanvasSize}));
    PlanePoint pointerPlanePoint = getPlanePoint(vec2(
        ${UniformName.PointerPosition}.x,
        ${BackgroundPlaneUniformName.CanvasSize}.y - ${UniformName.PointerPosition}.y
    ));
    ivec2 pointerCell = getFillStateCell(pointerPlanePoint.gridPosition);
    bool isPointerOverTexel = isPointerOverCanvas
        && pointerPlanePoint.visibility > 0.0
        && getFillStateTexel(pointerCell) == texel;

    vec4 previousState = texelFetch(${UniformName.PreviousFillState}, texel, 0);
    vec4 nextState = vec4(EMPTY_FILL);
    for (int channel = 0; channel < FILL_STATE_CELLS_PER_TEXEL; channel++) {
        float cellState = previousState[channel];
        bool isHovered = isPointerOverTexel && getFillStateChannel(pointerCell) == channel;
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
  constructor({
    planeUniforms,
    cellFillDurationMilliseconds,
    cellFadeDurationMilliseconds,
  }: BackgroundFillMaterialParameters) {
    super({
      vertexShader: fullScreenVertexShader,
      fragmentShader,
      uniforms: {
        ...planeUniforms,
        [UniformName.PreviousFillState]: new Uniform(null),
        [UniformName.PointerPosition]: new Uniform(new Vector2()),
        [UniformName.IsPointerPresent]: new Uniform(false),
        [UniformName.ElapsedTimeMilliseconds]: new Uniform(0),
        [UniformName.CellFillDurationMilliseconds]: new Uniform(cellFillDurationMilliseconds),
        [UniformName.CellFadeDurationMilliseconds]: new Uniform(cellFadeDurationMilliseconds),
      },
    });
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
    this.uniforms[UniformName.IsPointerPresent].value = isPointerPresent;
    this.uniforms[UniformName.PointerPosition].value = pointerPosition;
    this.uniforms[UniformName.PreviousFillState].value = previousFillState;
  }
}
