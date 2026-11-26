import { ShaderMaterial, Uniform, Vector2, Vector3, type Color, type Texture } from 'three';
import { BackgroundPlaneUniformName } from '../../../declarations/enums/background-plane-uniform-name.enum';
import { BackgroundPointerUniformName } from '../../../declarations/enums/background-pointer-uniform-name.enum';
import { type BackgroundPlaneState } from '../../../declarations/interfaces/background-plane-state.interface';
import { type BackgroundPlaneUniforms } from '../../../declarations/interfaces/background-plane-uniforms.interface';
import { type BackgroundPointerUniforms } from '../../../declarations/interfaces/background-pointer-uniforms.interface';
import { type BackgroundWave } from '../../../declarations/interfaces/background-wave.interface';
import { type RectSize } from '../../../declarations/types/rect-size.type';
import { getPlaneStateVector } from '../../../utilities/get-plane-state-vector.utility';
import { fillLevelShaderChunk } from './fill-level-shader-chunk';
import { FULL_ENERGY } from './full-energy';
import { fullScreenVertexShader } from './full-screen-vertex-shader';
import { NO_ENERGY } from './no-energy';
import { planeShaderChunk } from './plane-shader-chunk';
import { pointerCellShaderChunk } from './pointer-cell-shader-chunk';
import { WAVE_SLOT_COUNT } from './wave-slot-count';

const enum DefineName {
  GlowScope = 'GLOW_SCOPE'
}

const enum GlowScope {
  None = 0,
  Charge = 1,
  ChargeAndWaves = 2
}

const enum UniformName {
  StrokeWidth = 'strokeWidth',
  StrokeColor = 'strokeColor',
  FillState = 'fillState',
  DentCenter = 'dentCenter',
  DentStrength = 'dentStrength',
  DentDepth = 'dentDepth',
  DentRadiusFraction = 'dentRadiusFraction',
  DentShading = 'dentShading',
  GlowHeight = 'glowHeight',
  GlowLeanTangent = 'glowLeanTangent',
  ChargeLevel = 'chargeLevel',
  ChargeHeightLevel = 'chargeHeightLevel',
  WaveStepDurationMilliseconds = 'waveStepDurationMilliseconds',
  WaveFadeDurationMilliseconds = 'waveFadeDurationMilliseconds',
  WaveFillFadeDurationMilliseconds = 'waveFillFadeDurationMilliseconds',
  WaveReachCellCount = 'waveReachCellCount',
  WaveCount = 'waveCount',
  WavePointerPositions = 'wavePointerPositions',
  WavePlaneStates = 'wavePlaneStates',
  WavePowers = 'wavePowers',
  WaveAgesMilliseconds = 'waveAgesMilliseconds'
}

interface BackgroundMaterialParameters {
  readonly strokeWidth: number;
  readonly strokeColor: Color;
  readonly cellSize: number;
  readonly dentDepth: number;
  readonly dentRadiusFraction: number;
  readonly dentShading: number;
  readonly glowHeight: number;
  readonly glowLeanTangent: number;
  readonly waveStepDurationMilliseconds: number;
  readonly waveFadeDurationMilliseconds: number;
  readonly waveFillFadeDurationMilliseconds: number;
  readonly waveReachCellCount: number;
}

interface BackgroundMaterialFrameState extends BackgroundPlaneState {
  readonly fillState: Texture;
  readonly dentCenter: Vector2;
  readonly dentStrength: number;
  readonly isPointerPresent: boolean;
  readonly pointerPosition: Vector2;
  readonly timeStamp: DOMHighResTimeStamp;
  readonly chargeLevel: number;
  readonly chargeHeightLevel: number;
  readonly waves: readonly BackgroundWave[];
}

const RELEASE_AGE_MILLISECONDS = 0;
const GLOW_SCOPES: readonly GlowScope[] = [GlowScope.ChargeAndWaves, GlowScope.Charge, GlowScope.None];

const fragmentShader = `
uniform vec3 ${UniformName.StrokeColor};
uniform float ${UniformName.StrokeWidth};
uniform sampler2D ${UniformName.FillState};
uniform vec2 ${UniformName.DentCenter};
uniform float ${UniformName.DentStrength};
uniform float ${UniformName.DentDepth};
uniform float ${UniformName.DentRadiusFraction};
uniform float ${UniformName.DentShading};
uniform float ${UniformName.GlowHeight};
uniform float ${UniformName.GlowLeanTangent};
uniform float ${UniformName.ChargeLevel};
uniform float ${UniformName.ChargeHeightLevel};
uniform float ${UniformName.WaveStepDurationMilliseconds};
uniform float ${UniformName.WaveFadeDurationMilliseconds};
uniform float ${UniformName.WaveFillFadeDurationMilliseconds};
uniform float ${UniformName.WaveReachCellCount};
uniform int ${UniformName.WaveCount};
uniform vec2 ${UniformName.WavePointerPositions}[${WAVE_SLOT_COUNT}];
uniform vec3 ${UniformName.WavePlaneStates}[${WAVE_SLOT_COUNT}];
uniform float ${UniformName.WavePowers}[${WAVE_SLOT_COUNT}];
uniform float ${UniformName.WaveAgesMilliseconds}[${WAVE_SLOT_COUNT}];

varying vec2 normalizedCanvasPosition;

${planeShaderChunk}
${fillLevelShaderChunk}
${pointerCellShaderChunk}

const float STROKE_WIDTH_SCALE = 0.1;
const float VERTICAL_SMOOTHNESS_FACTOR = 0.5;
const float HORIZONTAL_SMOOTHNESS_FACTOR = 0.7;
const vec2 SMOOTHNESS_FACTOR_BY_AXIS = vec2(VERTICAL_SMOOTHNESS_FACTOR, HORIZONTAL_SMOOTHNESS_FACTOR);
const float PIXEL_FOOTPRINT_SMOOTHNESS_FACTOR = 0.5;
const float NO_ENERGY = float(${NO_ENERGY});
const float FULL_ENERGY = float(${FULL_ENERGY});
const vec2 HALF_FILL_STATE_CELL_GRID_SIZE = vec2(FILL_STATE_CELL_GRID_SIZE / 2);
const float CELL_CENTER_OFFSET = 0.5;
const float MINIMUM_DIVISOR_MAGNITUDE = 0.0001;
const float NO_GLOW = 0.0;
const float NO_FRONT_DISTANCE = 0.0;
const float GLOW_WALL_EMISSION = 1.0;
const float HALF_COVERAGE = 0.5;
const float NEGATIVE_SIGN = -1.0;
const float POSITIVE_SIGN = 1.0;
const vec4 WALL_OUTWARD_DIRECTIONS = vec4(1.0, -1.0, -1.0, 1.0);
const vec4 WALL_BASE_CELL_OFFSETS = max(WALL_OUTWARD_DIRECTIONS, 0.0);

struct DentedPoint {
    vec2 gridPosition;
    float strength;
};

struct GlowRay {
    vec2 basePosition;
    vec2 drift;
    vec2 basePixelFootprint;
    vec2 driftPixelFootprint;
    vec4 wallSlopes;
    vec4 wallHeightRates;
    float lowestHeight;
    float highestHeight;
    float depthRatio;
    float cameraHeight;
};

struct WallHits {
    vec4 heights;
    vec4 crossOffsets;
    vec4 halfSpanLengths;
};

DentedPoint getDentedPoint(vec2 gridPosition, vec2 dentCenterGridPosition, float dentRadius) {
    vec2 dentOffset = gridPosition - dentCenterGridPosition;
    float strength = exp(-dot(dentOffset, dentOffset) / (dentRadius * dentRadius)) * ${UniformName.DentStrength};

    return DentedPoint(dentCenterGridPosition + dentOffset * (1.0 + ${UniformName.DentDepth} * strength), strength);
}

vec2 getNearestCellOrigin(ivec2 fillStateCell, vec2 anchorGridPosition) {
    vec2 anchorShiftedCell = getShiftedCellIndex(anchorGridPosition, ${BackgroundPlaneUniformName.RowShift});
    vec2 cellOffset = mod(
        vec2(fillStateCell) - anchorShiftedCell + HALF_FILL_STATE_CELL_GRID_SIZE,
        vec2(FILL_STATE_CELL_GRID_SIZE)
    ) - HALF_FILL_STATE_CELL_GRID_SIZE;

    return (anchorShiftedCell + cellOffset - vec2(0.0, ${BackgroundPlaneUniformName.RowShift}))
        * ${BackgroundPlaneUniformName.CellSize};
}

WallHits getWallHits(GlowRay ray, vec2 cellOrigin, float frontDistance) {
    float halfCellSize = ${BackgroundPlaneUniformName.CellSize} * CELL_CENTER_OFFSET;
    vec4 heights = (
        cellOrigin.yyxx
            + WALL_BASE_CELL_OFFSETS * ${BackgroundPlaneUniformName.CellSize}
            + WALL_OUTWARD_DIRECTIONS * frontDistance
            - ray.basePosition.yyxx
    ) * ray.wallHeightRates;

    return WallHits(
        heights,
        ray.basePosition.xxyy + heights * ray.drift.xxyy - cellOrigin.xxyy - halfCellSize,
        halfCellSize + heights * ${UniformName.GlowLeanTangent}
    );
}

float getWallGlow(
    GlowRay ray,
    vec4 heights,
    vec4 spanStartDistances,
    vec4 spanEndDistances,
    vec4 brightnessLevels,
    vec4 heightLevels
) {
    vec4 brightnesses = smoothstep(NO_ENERGY, FULL_ENERGY, brightnessLevels);
    vec4 glowHeights = smoothstep(NO_ENERGY, FULL_ENERGY, heightLevels) * ${UniformName.GlowHeight};
    vec4 spanFootprints = ray.basePixelFootprint.xxyy + heights * ray.driftPixelFootprint.xxyy;
    vec4 spanCoverages = clamp(
        min(spanStartDistances / spanFootprints, HALF_COVERAGE)
            + min(spanEndDistances / spanFootprints, HALF_COVERAGE),
        0.0,
        1.0
    );
    vec4 baseCoverages = clamp(
        HALF_COVERAGE
            + heights * abs(ray.wallSlopes) / (ray.basePixelFootprint.yyxx + heights * ray.driftPixelFootprint.yyxx),
        0.0,
        1.0
    );
    vec4 profiles = 1.0 - heights / max(glowHeights, MINIMUM_DIVISOR_MAGNITUDE);
    vec4 depthRatios = ray.depthRatio * (1.0 - heights / ray.cameraHeight);
    vec4 visibilities = vec4(
        getDepthVisibility(depthRatios.x),
        getDepthVisibility(depthRatios.y),
        getDepthVisibility(depthRatios.z),
        getDepthVisibility(depthRatios.w)
    );
    vec4 hitFactors = step(ray.lowestHeight, heights) * step(heights, min(glowHeights, ray.highestHeight));

    return dot(
        brightnesses * hitFactors * profiles * visibilities * spanCoverages * baseCoverages,
        vec4(GLOW_WALL_EMISSION)
    );
}

float getFrontGlow(
    GlowRay ray,
    vec2 cellOrigin,
    float frontDistance,
    vec4 frontBrightnessLevels,
    vec4 frontHeightLevels
) {
    WallHits frontHits = getWallHits(ray, cellOrigin, frontDistance);

    return getWallGlow(
        ray,
        frontHits.heights,
        frontHits.halfSpanLengths + frontHits.crossOffsets,
        frontHits.halfSpanLengths - frontHits.crossOffsets,
        frontBrightnessLevels,
        frontHeightLevels
    );
}

vec4 getPassageLevels(int slot, vec4 armPositions) {
    return max(${UniformName.WavePowers}[slot] - armPositions / ${UniformName.WaveReachCellCount}, NO_ENERGY);
}

vec4 getArrivalAgesMilliseconds(int slot, vec4 armPositions) {
    return ${UniformName.WaveAgesMilliseconds}[slot] - armPositions * ${UniformName.WaveStepDurationMilliseconds};
}

vec4 getWaveLevels(int slot, vec4 armPositions) {
    vec4 fadeLevels = FULL_ENERGY
        - getArrivalAgesMilliseconds(slot, armPositions) / ${UniformName.WaveFadeDurationMilliseconds};

    return getPassageLevels(slot, armPositions) * max(fadeLevels, NO_ENERGY);
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
    float dentRadius = ${UniformName.DentRadiusFraction}
        * max(${BackgroundPlaneUniformName.CanvasSize}.x, ${BackgroundPlaneUniformName.CanvasSize}.y);
    DentedPoint dentedPoint = getDentedPoint(planePoint.gridPosition, dentCenterPoint.gridPosition, dentRadius);
    float dentShadingFactor = 1.0 - ${UniformName.DentShading} * dentedPoint.strength;

    vec2 planeFootprint = fwidth(dentedPoint.gridPosition);
    vec2 antialiasingWidth = planeFootprint * PIXEL_FOOTPRINT_SMOOTHNESS_FACTOR;
    float strokeHalfWidth = ${UniformName.StrokeWidth} * STROKE_WIDTH_SCALE;
    vec2 drawnHalfWidth = max(antialiasingWidth, strokeHalfWidth);
    vec2 smoothWidth = max(antialiasingWidth, strokeHalfWidth * SMOOTHNESS_FACTOR_BY_AXIS);

    vec2 cellPosition = fract(dentedPoint.gridPosition / ${BackgroundPlaneUniformName.CellSize});
    vec2 lineDistance = min(cellPosition, 1.0 - cellPosition) * ${BackgroundPlaneUniformName.CellSize};
    vec2 lineFactor = (1.0 - smoothstep(drawnHalfWidth - smoothWidth, drawnHalfWidth + smoothWidth, lineDistance))
        * strokeHalfWidth / drawnHalfWidth;

    float gridFactor = min(1.0, lineFactor.x + lineFactor.y);
    float storedFill = getStoredFillLevel(
        ${UniformName.FillState},
        getFillStateCell(dentedPoint.gridPosition, ${BackgroundPlaneUniformName.RowShift})
    );
    float easedFill = smoothstep(EMPTY_FILL, FULL_FILL, storedFill);

    float waveFill = EMPTY_FILL;
    float glow = NO_GLOW;
#if ${DefineName.GlowScope} >= ${GlowScope.Charge}
    float cameraHeight = planePoint.cameraPosition.z;
    float lowestGlowHeight = max(0.0, cameraHeight * (1.0 - FADE_END_DEPTH_RATIO / planePoint.depthRatio));
    float highestGlowHeight = min(
        ${UniformName.GlowHeight},
        cameraHeight * (1.0 - FADE_END_DEPTH_RATIO * MINIMUM_INVERSE_DEPTH_RATIO)
    );
    float glowHeightSpan = max(highestGlowHeight - lowestGlowHeight, MINIMUM_DIVISOR_MAGNITUDE);
    vec2 planeRayDrift = (planePoint.cameraPosition.xy - planePoint.gridPosition) / cameraHeight;
    vec2 lowestGlowPosition = getDentedPoint(
        planePoint.gridPosition + planeRayDrift * lowestGlowHeight,
        dentCenterPoint.gridPosition,
        dentRadius
    ).gridPosition;
    vec2 highestGlowPosition = getDentedPoint(
        planePoint.gridPosition + planeRayDrift * (lowestGlowHeight + glowHeightSpan),
        dentCenterPoint.gridPosition,
        dentRadius
    ).gridPosition;
    vec2 rayDrift = (highestGlowPosition - lowestGlowPosition) / glowHeightSpan;
    vec2 rayBasePosition = lowestGlowPosition - rayDrift * lowestGlowHeight;
    vec4 wallSlopes = rayDrift.yyxx - WALL_OUTWARD_DIRECTIONS * ${UniformName.GlowLeanTangent};
    GlowRay glowRay = GlowRay(
        rayBasePosition,
        rayDrift,
        fwidth(rayBasePosition),
        fwidth(rayDrift),
        wallSlopes,
        mix(vec4(NEGATIVE_SIGN), vec4(POSITIVE_SIGN), step(0.0, wallSlopes))
            / max(abs(wallSlopes), MINIMUM_DIVISOR_MAGNITUDE),
        lowestGlowHeight,
        highestGlowHeight,
        planePoint.depthRatio,
        cameraHeight
    );

    PointerCell chargedCell = getCurrentPointerCell();
    glow = chargedCell.isOnPlane
        ? getFrontGlow(
            glowRay,
            getNearestCellOrigin(chargedCell.fillStateCell, planePoint.cameraPosition.xy),
            NO_FRONT_DISTANCE,
            vec4(${UniformName.ChargeLevel}),
            vec4(${UniformName.ChargeHeightLevel})
        )
        : NO_GLOW;
#endif
#if ${DefineName.GlowScope} >= ${GlowScope.ChargeAndWaves}
    float rayRegionSpread = highestGlowHeight * ${UniformName.GlowLeanTangent};
    vec2 rayRegionMinimum = min(lowestGlowPosition, highestGlowPosition) - rayRegionSpread;
    vec2 rayRegionMaximum = max(lowestGlowPosition, highestGlowPosition) + rayRegionSpread;

    for (int slot = 0; slot < ${UniformName.WaveCount}; slot++) {
        PointerCell originCell = getPointerCellAtPlaneState(
            ${UniformName.WavePointerPositions}[slot],
            ${UniformName.WavePlaneStates}[slot]
        );
        vec2 originCellOrigin = getNearestCellOrigin(originCell.fillStateCell, planePoint.cameraPosition.xy);
        vec2 crossStripGaps = max(
            originCellOrigin - rayRegionMaximum,
            rayRegionMinimum - originCellOrigin - ${BackgroundPlaneUniformName.CellSize}
        );
        if (!originCell.isOnPlane || min(crossStripGaps.x, crossStripGaps.y) > 0.0) {
            continue;
        }

        float frontPosition = ${UniformName.WaveAgesMilliseconds}[slot] / ${UniformName.WaveStepDurationMilliseconds};
        float frontDistance = frontPosition * ${BackgroundPlaneUniformName.CellSize};
        WallHits sideHits = getWallHits(glowRay, originCellOrigin, NO_FRONT_DISTANCE);
        vec4 sideArmDistances = abs(sideHits.crossOffsets) - sideHits.halfSpanLengths;
        vec4 frontLevels = getWaveLevels(slot, vec4(frontPosition));
        vec4 sideLevels = getWaveLevels(slot, sideArmDistances / ${BackgroundPlaneUniformName.CellSize});
        vec2 planeArmOffsets = abs(
            (dentedPoint.gridPosition - originCellOrigin) / ${BackgroundPlaneUniformName.CellSize} - CELL_CENTER_OFFSET
        );
        float planeArmPosition = max(planeArmOffsets.x, planeArmOffsets.y) - CELL_CENTER_OFFSET;
        float planeArmFootprint = (planeArmOffsets.x > planeArmOffsets.y ? planeFootprint.x : planeFootprint.y)
            / ${BackgroundPlaneUniformName.CellSize};

        vec4 planeCellDistances = vec4(floor(planeArmPosition) + 1.0);
        float planeCellArrivalAgeMilliseconds = getArrivalAgesMilliseconds(slot, planeCellDistances).x;
        float passedLevel = step(0.0, planeCellArrivalAgeMilliseconds) * max(
            getPassageLevels(slot, planeCellDistances).x
                - planeCellArrivalAgeMilliseconds / ${UniformName.WaveFillFadeDurationMilliseconds},
            NO_ENERGY
        );
        float crossingFill = smoothstep(NO_ENERGY, FULL_ENERGY, frontLevels.x)
            * step(floor(frontPosition), planeArmPosition)
            * clamp(HALF_COVERAGE + (frontPosition - planeArmPosition) / planeArmFootprint, 0.0, 1.0);

        waveFill = max(
            waveFill,
            step(min(planeArmOffsets.x, planeArmOffsets.y), CELL_CENTER_OFFSET)
                * step(0.0, planeArmPosition)
                * max(smoothstep(NO_ENERGY, FULL_ENERGY, passedLevel), crossingFill)
        );

        glow += getFrontGlow(glowRay, originCellOrigin, frontDistance, frontLevels, frontLevels);
        glow += getWallGlow(
            glowRay,
            sideHits.heights,
            sideArmDistances,
            frontDistance - sideArmDistances,
            sideLevels,
            sideLevels
        );
    }
#endif

    float fillAlpha = min(max(easedFill, waveFill) * dentShadingFactor, 1.0);
    float lineAlpha = min(gridFactor * dentShadingFactor, 1.0);
    float planeAlpha = (lineAlpha + fillAlpha * (1.0 - lineAlpha)) * planePoint.visibility;

    gl_FragColor = vec4(${UniformName.StrokeColor}, min(planeAlpha + glow, 1.0));
}
`;

export class BackgroundMaterial extends ShaderMaterial {
  public readonly planeUniforms: BackgroundPlaneUniforms;

  public readonly pointerUniforms: BackgroundPointerUniforms;

  private readonly wavePointerPositions: readonly Vector2[];

  private readonly wavePlaneStates: readonly Vector3[];

  private readonly wavePowers: Float32Array;

  private readonly waveAgesMilliseconds: Float32Array;

  constructor({
    strokeWidth,
    strokeColor,
    cellSize,
    dentDepth,
    dentRadiusFraction,
    dentShading,
    glowHeight,
    glowLeanTangent,
    waveStepDurationMilliseconds,
    waveFadeDurationMilliseconds,
    waveFillFadeDurationMilliseconds,
    waveReachCellCount
  }: BackgroundMaterialParameters) {
    const planeUniforms: BackgroundPlaneUniforms = {
      [BackgroundPlaneUniformName.CanvasSize]: new Uniform(new Vector2()),
      [BackgroundPlaneUniformName.CellSize]: new Uniform(cellSize),
      [BackgroundPlaneUniformName.Tilt]: new Uniform(0),
      [BackgroundPlaneUniformName.GridOffset]: new Uniform(0),
      [BackgroundPlaneUniformName.RowShift]: new Uniform(0)
    };
    const pointerUniforms: BackgroundPointerUniforms = {
      [BackgroundPointerUniformName.Position]: new Uniform(new Vector2()),
      [BackgroundPointerUniformName.IsPresent]: new Uniform(false)
    };
    const wavePointerPositions: readonly Vector2[] = Array.from({ length: WAVE_SLOT_COUNT }, () => new Vector2());
    const wavePlaneStates: readonly Vector3[] = Array.from({ length: WAVE_SLOT_COUNT }, () => new Vector3());
    const wavePowers: Float32Array = new Float32Array(WAVE_SLOT_COUNT);
    const waveAgesMilliseconds: Float32Array = new Float32Array(WAVE_SLOT_COUNT);

    super({
      vertexShader: fullScreenVertexShader,
      fragmentShader,
      uniforms: {
        ...planeUniforms,
        ...pointerUniforms,
        [UniformName.StrokeWidth]: new Uniform(strokeWidth),
        [UniformName.StrokeColor]: new Uniform(strokeColor),
        [UniformName.FillState]: new Uniform(null),
        [UniformName.DentCenter]: new Uniform(new Vector2()),
        [UniformName.DentStrength]: new Uniform(0),
        [UniformName.DentDepth]: new Uniform(dentDepth),
        [UniformName.DentRadiusFraction]: new Uniform(dentRadiusFraction),
        [UniformName.DentShading]: new Uniform(dentShading),
        [UniformName.GlowHeight]: new Uniform(glowHeight),
        [UniformName.GlowLeanTangent]: new Uniform(glowLeanTangent),
        [UniformName.ChargeLevel]: new Uniform(0),
        [UniformName.ChargeHeightLevel]: new Uniform(0),
        [UniformName.WaveStepDurationMilliseconds]: new Uniform(waveStepDurationMilliseconds),
        [UniformName.WaveFadeDurationMilliseconds]: new Uniform(waveFadeDurationMilliseconds),
        [UniformName.WaveFillFadeDurationMilliseconds]: new Uniform(waveFillFadeDurationMilliseconds),
        [UniformName.WaveReachCellCount]: new Uniform(waveReachCellCount),
        [UniformName.WaveCount]: new Uniform(0),
        [UniformName.WavePointerPositions]: new Uniform(wavePointerPositions),
        [UniformName.WavePlaneStates]: new Uniform(wavePlaneStates),
        [UniformName.WavePowers]: new Uniform(wavePowers),
        [UniformName.WaveAgesMilliseconds]: new Uniform(waveAgesMilliseconds)
      },
      defines: { [DefineName.GlowScope]: GlowScope.None },
      transparent: true
    });

    this.planeUniforms = planeUniforms;
    this.pointerUniforms = pointerUniforms;
    this.wavePointerPositions = wavePointerPositions;
    this.wavePlaneStates = wavePlaneStates;
    this.wavePowers = wavePowers;
    this.waveAgesMilliseconds = waveAgesMilliseconds;
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
    isPointerPresent,
    pointerPosition,
    timeStamp,
    chargeLevel,
    chargeHeightLevel,
    waves
  }: BackgroundMaterialFrameState): void {
    if (waves.length > WAVE_SLOT_COUNT) {
      throw new Error(`Expected at most [${WAVE_SLOT_COUNT}] waves, but got [${waves.length}]`);
    }

    this.planeUniforms[BackgroundPlaneUniformName.Tilt].value = tilt;
    this.planeUniforms[BackgroundPlaneUniformName.GridOffset].value = gridOffset;
    this.planeUniforms[BackgroundPlaneUniformName.RowShift].value = rowShift;
    this.pointerUniforms[BackgroundPointerUniformName.IsPresent].value = isPointerPresent;
    this.pointerUniforms[BackgroundPointerUniformName.Position].value = pointerPosition;
    this.uniforms[UniformName.FillState].value = fillState;
    this.uniforms[UniformName.DentCenter].value = dentCenter;
    this.uniforms[UniformName.DentStrength].value = dentStrength;
    this.uniforms[UniformName.ChargeLevel].value = chargeLevel;
    this.uniforms[UniformName.ChargeHeightLevel].value = chargeHeightLevel;
    this.uniforms[UniformName.WaveCount].value = waves.length;
    waves.forEach((wave: BackgroundWave, slot: number) => {
      this.wavePointerPositions[slot].copy(wave.pointerPosition);
      this.wavePlaneStates[slot].copy(getPlaneStateVector(wave.planeState));
      this.wavePowers[slot] = wave.power;
      this.waveAgesMilliseconds[slot] = Math.max(RELEASE_AGE_MILLISECONDS, timeStamp - wave.timeStamp);
    });
    const glowScope: GlowScope = Math.max(
      chargeLevel > NO_ENERGY ? GlowScope.Charge : GlowScope.None,
      waves.length > 0 ? GlowScope.ChargeAndWaves : GlowScope.None
    );
    if (this.defines[DefineName.GlowScope] === glowScope) {
      return;
    }

    this.setGlowScope(glowScope);
  }

  public renderEachShaderVariant(render: () => void): void {
    GLOW_SCOPES.forEach((glowScope: GlowScope) => {
      this.setGlowScope(glowScope);
      render();
    });
  }

  private setGlowScope(glowScope: GlowScope): void {
    this.defines = { [DefineName.GlowScope]: glowScope };
    this.needsUpdate = true;
  }
}
