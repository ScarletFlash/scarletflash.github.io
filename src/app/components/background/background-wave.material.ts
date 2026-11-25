import { ShaderMaterial, Uniform, Vector2, Vector3 } from "three";
import { BackgroundPlaneUniforms } from "../../../declarations/interfaces/background-plane-uniforms.interface";
import { BackgroundPointerUniforms } from "../../../declarations/interfaces/background-pointer-uniforms.interface";
import { BackgroundWave } from "../../../declarations/interfaces/background-wave.interface";
import { fullScreenVertexShader } from "./full-screen-vertex-shader";
import { planeShaderChunk } from "./plane-shader-chunk";
import { pointerCellShaderChunk } from "./pointer-cell-shader-chunk";
import { texelFillStateCellShaderChunk } from "./texel-fill-state-cell-shader-chunk";
import { waveLevelShaderChunk } from "./wave-level-shader-chunk";
import { WAVE_SLOT_COUNT } from "./wave-slot-count";

const enum UniformName {
  ChargeLevel = "chargeLevel",
  StepDurationMilliseconds = "stepDurationMilliseconds",
  FadeDurationMilliseconds = "fadeDurationMilliseconds",
  ReachCellCount = "reachCellCount",
  BurstRadiusCellCount = "burstRadiusCellCount",
  BurstBrightness = "burstBrightness",
  Count = "count",
  PointerPositions = "pointerPositions",
  PlaneStates = "planeStates",
  Powers = "powers",
  AgesMilliseconds = "agesMilliseconds",
}

interface BackgroundWaveMaterialParameters {
  readonly planeUniforms: BackgroundPlaneUniforms;
  readonly pointerUniforms: BackgroundPointerUniforms;
  readonly stepDurationMilliseconds: number;
  readonly fadeDurationMilliseconds: number;
  readonly reachCellCount: number;
  readonly burstRadiusCellCount: number;
  readonly burstBrightness: number;
}

interface BackgroundWaveMaterialFrameState {
  readonly timeStamp: DOMHighResTimeStamp;
  readonly chargeLevel: number;
  readonly waves: readonly BackgroundWave[];
}

const RELEASE_AGE_MILLISECONDS: number = 0;

const fragmentShader: string = `
uniform float ${UniformName.ChargeLevel};
uniform float ${UniformName.StepDurationMilliseconds};
uniform float ${UniformName.FadeDurationMilliseconds};
uniform float ${UniformName.ReachCellCount};
uniform float ${UniformName.BurstRadiusCellCount};
uniform float ${UniformName.BurstBrightness};
uniform int ${UniformName.Count};
uniform vec2 ${UniformName.PointerPositions}[${WAVE_SLOT_COUNT}];
uniform vec3 ${UniformName.PlaneStates}[${WAVE_SLOT_COUNT}];
uniform float ${UniformName.Powers}[${WAVE_SLOT_COUNT}];
uniform float ${UniformName.AgesMilliseconds}[${WAVE_SLOT_COUNT}];

${planeShaderChunk}
${texelFillStateCellShaderChunk}
${pointerCellShaderChunk}
${waveLevelShaderChunk}

void main() {
    ivec2 texel = ivec2(gl_FragCoord.xy);
    PointerCell chargedCell = getCurrentPointerCell();

    vec4 levels = vec4(NO_WAVE);
    for (int channel = 0; channel < FILL_STATE_CELLS_PER_TEXEL; channel++) {
        bool isCharged = chargedCell.isOnPlane && getTexelFillStateCell(texel, channel) == chargedCell.fillStateCell;
        levels[channel] = isCharged ? ${UniformName.ChargeLevel} : NO_WAVE;
    }

    for (int slot = 0; slot < ${UniformName.Count}; slot++) {
        vec3 planeState = ${UniformName.PlaneStates}[slot];
        PointerCell originCell = getPointerCell(
            ${UniformName.PointerPositions}[slot],
            planeState.x,
            planeState.y,
            planeState.z
        );
        for (int channel = 0; channel < FILL_STATE_CELLS_PER_TEXEL; channel++) {
            ivec2 cellOffset = abs(getTexelFillStateCell(texel, channel) - originCell.fillStateCell);
            ivec2 axisCellDistance = min(cellOffset, FILL_STATE_CELL_GRID_SIZE - cellOffset);
            float cellDistance = float(max(axisCellDistance.x, axisCellDistance.y));
            bool isOnCross = min(axisCellDistance.x, axisCellDistance.y) == 0;
            bool isInBurst = cellDistance <= ${UniformName.BurstRadiusCellCount};
            float arrivalAgeMilliseconds = ${UniformName.AgesMilliseconds}[slot]
                - cellDistance * ${UniformName.StepDurationMilliseconds};
            bool isLit = originCell.isOnPlane && (isOnCross || isInBurst) && arrivalAgeMilliseconds >= 0.0;
            float level = (isOnCross ? FULL_WAVE : ${UniformName.BurstBrightness})
                * max(NO_WAVE, ${UniformName.Powers}[slot] - cellDistance / ${UniformName.ReachCellCount})
                * max(NO_WAVE, FULL_WAVE - arrivalAgeMilliseconds / ${UniformName.FadeDurationMilliseconds});

            levels[channel] = max(levels[channel], isLit ? level : NO_WAVE);
        }
    }

    gl_FragColor = levels;
}
`;

export class BackgroundWaveMaterial extends ShaderMaterial {
  private readonly pointerPositions: readonly Vector2[];

  private readonly planeStates: readonly Vector3[];

  private readonly powers: Float32Array;

  private readonly agesMilliseconds: Float32Array;

  constructor({
    planeUniforms,
    pointerUniforms,
    stepDurationMilliseconds,
    fadeDurationMilliseconds,
    reachCellCount,
    burstRadiusCellCount,
    burstBrightness,
  }: BackgroundWaveMaterialParameters) {
    const pointerPositions: readonly Vector2[] = Array.from(
      { length: WAVE_SLOT_COUNT },
      () => new Vector2(),
    );
    const planeStates: readonly Vector3[] = Array.from(
      { length: WAVE_SLOT_COUNT },
      () => new Vector3(),
    );
    const powers: Float32Array = new Float32Array(WAVE_SLOT_COUNT);
    const agesMilliseconds: Float32Array = new Float32Array(WAVE_SLOT_COUNT);

    super({
      vertexShader: fullScreenVertexShader,
      fragmentShader,
      uniforms: {
        ...planeUniforms,
        ...pointerUniforms,
        [UniformName.ChargeLevel]: new Uniform(0),
        [UniformName.StepDurationMilliseconds]: new Uniform(stepDurationMilliseconds),
        [UniformName.FadeDurationMilliseconds]: new Uniform(fadeDurationMilliseconds),
        [UniformName.ReachCellCount]: new Uniform(reachCellCount),
        [UniformName.BurstRadiusCellCount]: new Uniform(burstRadiusCellCount),
        [UniformName.BurstBrightness]: new Uniform(burstBrightness),
        [UniformName.Count]: new Uniform(0),
        [UniformName.PointerPositions]: new Uniform(pointerPositions),
        [UniformName.PlaneStates]: new Uniform(planeStates),
        [UniformName.Powers]: new Uniform(powers),
        [UniformName.AgesMilliseconds]: new Uniform(agesMilliseconds),
      },
    });

    this.pointerPositions = pointerPositions;
    this.planeStates = planeStates;
    this.powers = powers;
    this.agesMilliseconds = agesMilliseconds;
  }

  public setFrameState({ timeStamp, chargeLevel, waves }: BackgroundWaveMaterialFrameState): void {
    if (waves.length > WAVE_SLOT_COUNT) {
      throw new Error(`Expected at most [${WAVE_SLOT_COUNT}] waves, but got [${waves.length}]`);
    }

    this.uniforms[UniformName.ChargeLevel].value = chargeLevel;
    this.uniforms[UniformName.Count].value = waves.length;
    waves.forEach((wave: BackgroundWave, slot: number) => {
      this.pointerPositions[slot].copy(wave.pointerPosition);
      this.planeStates[slot].set(
        wave.planeState.tilt,
        wave.planeState.gridOffset,
        wave.planeState.rowShift,
      );
      this.powers[slot] = wave.power;
      this.agesMilliseconds[slot] = Math.max(RELEASE_AGE_MILLISECONDS, timeStamp - wave.timeStamp);
    });
  }
}
