import {
  Continue,
  Fn,
  If,
  Loop,
  abs,
  clamp,
  color,
  dot,
  exp,
  float,
  floor,
  fract,
  fwidth,
  max,
  min,
  mix,
  mod,
  screenUV,
  select,
  smoothstep,
  step,
  texture,
  uniform,
  uniformArray,
  vec2,
  vec4
} from 'three/tsl';
import {
  NodeMaterial,
  QuadMesh,
  Vector2,
  Vector3,
  type Color,
  type Node,
  type Renderer,
  type Texture,
  type TextureNode,
  type UniformArrayNode
} from 'three/webgpu';
import { type BackgroundPlanePoint } from '../../../declarations/interfaces/background-plane-point.interface';
import { type BackgroundWave } from '../../../declarations/interfaces/background-wave.interface';
import { type BackgroundPlaneNodes } from './background-plane-nodes';
import { EMPTY_FILL } from './empty-fill';
import { FADE_END_DEPTH_RATIO } from './fade-end-depth-ratio';
import { FILL_STATE_CELL_GRID_SIZE } from './fill-state-cell-grid-size';
import { FULL_ENERGY } from './full-energy';
import { FULL_FILL } from './full-fill';
import { getDepthVisibility } from './get-depth-visibility';
import { getStoredFillLevel } from './get-stored-fill-level';
import { HALF_FACTOR } from './half-factor';
import { MINIMUM_INVERSE_DEPTH_RATIO } from './minimum-inverse-depth-ratio';
import { NO_ENERGY } from './no-energy';
import { WAVE_SLOT_COUNT } from './wave-slot-count';

const enum GlowScope {
  None = 0,
  Charge = 1,
  ChargeAndWaves = 2
}

interface BackgroundGridPassParameters {
  readonly planeNodes: BackgroundPlaneNodes;
  readonly fillState: Texture;
  readonly strokeWidth: number;
  readonly strokeColor: Color;
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

interface BackgroundGridPassFrameState {
  readonly fillState: Texture;
  readonly dentCenter: Vector2;
  readonly dentStrength: number;
  readonly timeStamp: DOMHighResTimeStamp;
  readonly chargeLevel: number;
  readonly chargeHeightLevel: number;
  readonly waves: readonly BackgroundWave[];
}

interface DentedPoint {
  readonly gridPosition: Node<'vec2'>;
  readonly strength: Node<'float'>;
}

interface GridSurface {
  readonly planePoint: BackgroundPlanePoint;
  readonly dentCenterGridPosition: Node<'vec2'>;
  readonly dentRadius: Node<'float'>;
  readonly dentedPoint: DentedPoint;
  readonly planeFootprint: Node<'vec2'>;
}

interface GlowRay {
  readonly basePosition: Node<'vec2'>;
  readonly displacement: Node<'vec2'>;
  readonly basePixelFootprint: Node<'vec2'>;
  readonly displacementPixelFootprint: Node<'vec2'>;
  readonly wallSlopes: Node<'vec4'>;
  readonly wallHeightRates: Node<'vec4'>;
  readonly lowestHeight: Node<'float'>;
  readonly highestHeight: Node<'float'>;
  readonly lowestPosition: Node<'vec2'>;
  readonly highestPosition: Node<'vec2'>;
  readonly depthRatio: Node<'float'>;
  readonly cameraHeight: Node<'float'>;
}

interface WallHits {
  readonly heights: Node<'vec4'>;
  readonly crossOffsets: Node<'vec4'>;
  readonly halfSpanLengths: Node<'vec4'>;
}

interface GridGlow {
  readonly glow: Node<'float'>;
  readonly waveFill: Node<'float'>;
}

interface GetDentedPointParameters {
  readonly gridPosition: Node<'vec2'>;
  readonly dentCenterGridPosition: Node<'vec2'>;
  readonly dentRadius: Node<'float'>;
}

interface GetNearestCellOriginParameters {
  readonly fillStateCell: Node<'ivec2'>;
  readonly anchorGridPosition: Node<'vec2'>;
}

interface GetWallHitsParameters {
  readonly ray: GlowRay;
  readonly cellOrigin: Node<'vec2'>;
  readonly frontDistance: Node<'float'>;
}

interface GetWallGlowParameters {
  readonly ray: GlowRay;
  readonly heights: Node<'vec4'>;
  readonly spanStartDistances: Node<'vec4'>;
  readonly spanEndDistances: Node<'vec4'>;
  readonly brightnessLevels: Node<'vec4'>;
  readonly heightLevels: Node<'vec4'>;
}

interface GetFrontGlowParameters {
  readonly ray: GlowRay;
  readonly cellOrigin: Node<'vec2'>;
  readonly frontDistance: Node<'float'>;
  readonly frontBrightnessLevels: Node<'vec4'>;
  readonly frontHeightLevels: Node<'vec4'>;
}

interface WaveLanePositions {
  readonly slot: Node<'int'>;
  readonly lanePositions: Node<'vec4'>;
}

interface GetChargeGlowParameters {
  readonly ray: GlowRay;
  readonly surface: GridSurface;
}

interface LoopIteration {
  readonly i: Node<'int'>;
}

interface RenderGlowScopeParameters {
  readonly renderer: Renderer;
  readonly glowScope: GlowScope;
}

interface GetGridGlowParameters {
  readonly glowScope: GlowScope;
  readonly surface: GridSurface;
}

const GLOW_SCOPES: readonly GlowScope[] = [GlowScope.ChargeAndWaves, GlowScope.Charge, GlowScope.None];
const RELEASE_AGE_MILLISECONDS = 0;
const STROKE_WIDTH_SCALE = 0.1;
const VERTICAL_SMOOTHNESS_FACTOR = 0.5;
const HORIZONTAL_SMOOTHNESS_FACTOR = 0.7;
const SMOOTHNESS_FACTOR_BY_AXIS = vec2(VERTICAL_SMOOTHNESS_FACTOR, HORIZONTAL_SMOOTHNESS_FACTOR);
const PIXEL_FOOTPRINT_SMOOTHNESS_FACTOR = 0.5;
const CELL_CENTER_OFFSET = 0.5;
const MINIMUM_DIVISOR_MAGNITUDE = 0.0001;
const NO_GLOW = 0;
const NO_GLOW_NODE = float(NO_GLOW);
const NO_FRONT_DISTANCE = float(0);
const EMPTY_FILL_NODE = float(EMPTY_FILL);
const NO_GLOW_HEIGHT = 0;
const NO_GAP = 0;
const NO_LANE_POSITION = 0;
const NO_ARRIVAL_AGE_MILLISECONDS = 0;
const NEXT_CELL_DISTANCE = 1;
const GLOW_WALL_EMISSION = vec4(1);
const HALF_COVERAGE = 0.5;
const NO_COVERAGE = 0;
const FULL_COVERAGE = 1;
const NEGATIVE_SIGNS = vec4(-1);
const POSITIVE_SIGNS = vec4(1);
const WALL_OUTWARD_DIRECTIONS = vec4(1, -1, -1, 1);
const WALL_BASE_CELL_OFFSETS = max(WALL_OUTWARD_DIRECTIONS, 0);
const HALF_FILL_STATE_CELL_GRID_SIZE = FILL_STATE_CELL_GRID_SIZE.mul(HALF_FACTOR);
const HIGHEST_GLOW_HEIGHT_FACTOR = 1 - FADE_END_DEPTH_RATIO * MINIMUM_INVERSE_DEPTH_RATIO;

export class BackgroundGridPass {
  private readonly planeNodes: BackgroundPlaneNodes;

  private readonly fillState: TextureNode;

  private readonly strokeColor: Node<'color'>;

  private readonly strokeHalfWidth: number;

  private readonly dentCenter = uniform(new Vector2());

  private readonly dentStrength = uniform(0);

  private readonly dentDepth: Node<'float'>;

  private readonly dentRadiusFraction: Node<'float'>;

  private readonly dentShading: Node<'float'>;

  private readonly glowHeight: Node<'float'>;

  private readonly glowLeanTangent: Node<'float'>;

  private readonly chargeLevel = uniform(0);

  private readonly chargeHeightLevel = uniform(0);

  private readonly waveStepDurationMilliseconds: Node<'float'>;

  private readonly waveFadeDurationMilliseconds: Node<'float'>;

  private readonly waveFillFadeDurationMilliseconds: Node<'float'>;

  private readonly waveReachCellCount: Node<'float'>;

  private readonly waveCount = uniform(0, 'int');

  private readonly wavePointerPositionValues: Vector2[];

  private readonly wavePlaneStateValues: Vector3[];

  private readonly wavePowerValues = new Array<number>(WAVE_SLOT_COUNT).fill(NO_ENERGY);

  private readonly waveAgeMillisecondsValues = new Array<number>(WAVE_SLOT_COUNT).fill(RELEASE_AGE_MILLISECONDS);

  private readonly wavePointerPositions: UniformArrayNode<'vec2'>;

  private readonly wavePlaneStates: UniformArrayNode<'vec3'>;

  private readonly wavePowers = uniformArray<'float'>(this.wavePowerValues, 'float');

  private readonly waveAgesMilliseconds = uniformArray<'float'>(this.waveAgeMillisecondsValues, 'float');

  private readonly materialByGlowScope: ReadonlyMap<GlowScope, NodeMaterial>;

  private readonly quad: QuadMesh;

  private glowScope = GlowScope.None;

  constructor({
    planeNodes,
    fillState,
    strokeWidth,
    strokeColor,
    dentDepth,
    dentRadiusFraction,
    dentShading,
    glowHeight,
    glowLeanTangent,
    waveStepDurationMilliseconds,
    waveFadeDurationMilliseconds,
    waveFillFadeDurationMilliseconds,
    waveReachCellCount
  }: BackgroundGridPassParameters) {
    this.planeNodes = planeNodes;
    this.fillState = texture(fillState);
    this.strokeColor = color(strokeColor);
    this.strokeHalfWidth = strokeWidth * STROKE_WIDTH_SCALE;
    this.dentDepth = float(dentDepth);
    this.dentRadiusFraction = float(dentRadiusFraction);
    this.dentShading = float(dentShading);
    this.glowHeight = float(glowHeight);
    this.glowLeanTangent = float(glowLeanTangent);
    this.waveStepDurationMilliseconds = float(waveStepDurationMilliseconds);
    this.waveFadeDurationMilliseconds = float(waveFadeDurationMilliseconds);
    this.waveFillFadeDurationMilliseconds = float(waveFillFadeDurationMilliseconds);
    this.waveReachCellCount = float(waveReachCellCount);
    this.wavePointerPositionValues = Array.from({ length: WAVE_SLOT_COUNT }, () => new Vector2());
    this.wavePlaneStateValues = Array.from({ length: WAVE_SLOT_COUNT }, () => new Vector3());
    this.wavePointerPositions = uniformArray<'vec2'>(this.wavePointerPositionValues, 'vec2');
    this.wavePlaneStates = uniformArray<'vec3'>(this.wavePlaneStateValues, 'vec3');
    this.materialByGlowScope = new Map(
      GLOW_SCOPES.map((glowScope: GlowScope) => [glowScope, this.createMaterial(glowScope)])
    );
    this.quad = new QuadMesh(this.getMaterial(this.glowScope));
  }

  public setFrameState({
    fillState,
    dentCenter,
    dentStrength,
    timeStamp,
    chargeLevel,
    chargeHeightLevel,
    waves
  }: BackgroundGridPassFrameState): void {
    if (waves.length > WAVE_SLOT_COUNT) {
      throw new Error(`Expected at most [${WAVE_SLOT_COUNT}] waves, but got [${waves.length}]`);
    }

    this.fillState.value = fillState;
    this.dentCenter.value.copy(dentCenter);
    this.dentStrength.value = dentStrength;
    this.chargeLevel.value = chargeLevel;
    this.chargeHeightLevel.value = chargeHeightLevel;
    this.waveCount.value = waves.length;
    waves.forEach((wave: BackgroundWave, slot: number) => {
      this.wavePointerPositionValues[slot].copy(wave.pointerPosition);
      this.wavePlaneStateValues[slot].set(wave.planeState.tilt, wave.planeState.gridOffset, wave.planeState.rowShift);
      this.wavePowerValues[slot] = wave.power;
      this.waveAgeMillisecondsValues[slot] = Math.max(RELEASE_AGE_MILLISECONDS, timeStamp - wave.timeStamp);
    });
    const chargeGlowScope = chargeLevel > NO_ENERGY ? GlowScope.Charge : GlowScope.None;
    this.glowScope = waves.length > 0 ? GlowScope.ChargeAndWaves : chargeGlowScope;
  }

  public render(renderer: Renderer): void {
    this.renderGlowScope({ renderer, glowScope: this.glowScope });
  }

  public renderEachGlowScope(renderer: Renderer): void {
    GLOW_SCOPES.forEach((glowScope: GlowScope) => {
      this.renderGlowScope({ renderer, glowScope });
    });
  }

  public dispose(): void {
    this.materialByGlowScope.forEach((material: NodeMaterial) => {
      material.dispose();
    });
  }

  private renderGlowScope({ renderer, glowScope }: RenderGlowScopeParameters): void {
    this.quad.material = this.getMaterial(glowScope);
    this.quad.render(renderer);
  }

  private getMaterial(glowScope: GlowScope): NodeMaterial {
    const material = this.materialByGlowScope.get(glowScope);
    if (material === undefined) {
      throw new Error(`Expected a material for the glow scope [${glowScope}], but there is none`);
    }

    return material;
  }

  private createMaterial(glowScope: GlowScope): NodeMaterial {
    const material = new NodeMaterial();
    material.transparent = true;
    material.fragmentNode = Fn(() => {
      const { canvasSize, tilt, gridOffset, cellSize } = this.planeNodes;
      const planePoint = this.planeNodes.getPlanePoint({
        canvasPosition: vec2(screenUV.x, float(1).sub(screenUV.y)).mul(canvasSize),
        tilt,
        gridOffset
      });
      const dentCenterGridPosition = this.planeNodes.getPlanePoint({
        canvasPosition: this.dentCenter,
        tilt,
        gridOffset
      }).gridPosition;
      const dentRadius = max(canvasSize.x, canvasSize.y).mul(this.dentRadiusFraction).toVar();
      const dentedPoint = this.getDentedPoint({
        gridPosition: planePoint.gridPosition,
        dentCenterGridPosition,
        dentRadius
      });
      const planeFootprint = fwidth(dentedPoint.gridPosition).toVar();
      const antialiasingWidth = planeFootprint.mul(PIXEL_FOOTPRINT_SMOOTHNESS_FACTOR);
      const drawnHalfWidth = max(antialiasingWidth, this.strokeHalfWidth);
      const smoothWidth = max(antialiasingWidth, SMOOTHNESS_FACTOR_BY_AXIS.mul(this.strokeHalfWidth));
      const cellPosition = fract(dentedPoint.gridPosition.div(cellSize));
      const lineDistance = min(cellPosition, float(1).sub(cellPosition)).mul(cellSize);
      const lineFactor = float(1)
        .sub(smoothstep(drawnHalfWidth.sub(smoothWidth), drawnHalfWidth.add(smoothWidth), lineDistance))
        .mul(this.strokeHalfWidth)
        .div(drawnHalfWidth);
      const gridFactor = min(1, lineFactor.x.add(lineFactor.y));
      const dentShadingFactor = float(1).sub(this.dentShading.mul(dentedPoint.strength));
      const storedFill = getStoredFillLevel({
        fillState: this.fillState,
        fillStateCell: this.planeNodes.getFillStateCell({
          gridPosition: dentedPoint.gridPosition,
          rowShift: this.planeNodes.rowShift
        })
      });
      const easedFill = smoothstep(EMPTY_FILL, FULL_FILL, storedFill);
      const { glow, waveFill } = this.getGridGlow({
        glowScope,
        surface: { planePoint, dentCenterGridPosition, dentRadius, dentedPoint, planeFootprint }
      });
      const fillAlpha = min(max(easedFill, waveFill).mul(dentShadingFactor), 1);
      const lineAlpha = min(gridFactor.mul(dentShadingFactor), 1);
      const planeAlpha = lineAlpha.add(fillAlpha.mul(float(1).sub(lineAlpha))).mul(planePoint.visibility);

      return vec4(this.strokeColor, min(planeAlpha.add(glow), 1));
    })();

    return material;
  }

  private getDentedPoint({ gridPosition, dentCenterGridPosition, dentRadius }: GetDentedPointParameters): DentedPoint {
    const dentOffset = gridPosition.sub(dentCenterGridPosition);
    const strength = exp(dot(dentOffset, dentOffset).negate().div(dentRadius.mul(dentRadius)))
      .mul(this.dentStrength)
      .toVar();

    return {
      gridPosition: dentCenterGridPosition.add(dentOffset.mul(float(1).add(this.dentDepth.mul(strength)))).toVar(),
      strength
    };
  }

  private getNearestCellOrigin({ fillStateCell, anchorGridPosition }: GetNearestCellOriginParameters): Node<'vec2'> {
    const { cellSize, rowShift } = this.planeNodes;
    const anchorShiftedCell = this.planeNodes.getShiftedCellIndex({ gridPosition: anchorGridPosition, rowShift });
    const cellOffset = mod(
      vec2(fillStateCell).sub(anchorShiftedCell).add(HALF_FILL_STATE_CELL_GRID_SIZE),
      FILL_STATE_CELL_GRID_SIZE
    ).sub(HALF_FILL_STATE_CELL_GRID_SIZE);

    return anchorShiftedCell.add(cellOffset).sub(vec2(0, rowShift)).mul(cellSize).toVar();
  }

  private getGlowRay({ planePoint, dentCenterGridPosition, dentRadius }: GridSurface): GlowRay {
    const cameraHeight = planePoint.cameraPosition.z;
    const lowestHeight = max(
      NO_GLOW_HEIGHT,
      cameraHeight.mul(float(1).sub(float(FADE_END_DEPTH_RATIO).div(planePoint.depthRatio)))
    ).toVar();
    const highestHeight = min(this.glowHeight, cameraHeight.mul(HIGHEST_GLOW_HEIGHT_FACTOR)).toVar();
    const heightSpan = max(highestHeight.sub(lowestHeight), MINIMUM_DIVISOR_MAGNITUDE);
    const planeRayDisplacement = planePoint.cameraPosition.xy.sub(planePoint.gridPosition).div(cameraHeight);
    const lowestPosition = this.getDentedPoint({
      gridPosition: planePoint.gridPosition.add(planeRayDisplacement.mul(lowestHeight)),
      dentCenterGridPosition,
      dentRadius
    }).gridPosition;
    const highestPosition = this.getDentedPoint({
      gridPosition: planePoint.gridPosition.add(planeRayDisplacement.mul(lowestHeight.add(heightSpan))),
      dentCenterGridPosition,
      dentRadius
    }).gridPosition;
    const displacement = highestPosition.sub(lowestPosition).div(heightSpan).toVar();
    const basePosition = lowestPosition.sub(displacement.mul(lowestHeight)).toVar();
    const wallSlopes = displacement.yyxx.sub(WALL_OUTWARD_DIRECTIONS.mul(this.glowLeanTangent)).toVar();

    return {
      basePosition,
      displacement,
      basePixelFootprint: fwidth(basePosition).toVar(),
      displacementPixelFootprint: fwidth(displacement).toVar(),
      wallSlopes,
      wallHeightRates: mix(NEGATIVE_SIGNS, POSITIVE_SIGNS, step(0, wallSlopes))
        .div(max(abs(wallSlopes), MINIMUM_DIVISOR_MAGNITUDE))
        .toVar(),
      lowestHeight,
      highestHeight,
      lowestPosition,
      highestPosition,
      depthRatio: planePoint.depthRatio,
      cameraHeight
    };
  }

  private getWallHits({ ray, cellOrigin, frontDistance }: GetWallHitsParameters): WallHits {
    const { cellSize } = this.planeNodes;
    const halfCellSize = cellSize.mul(HALF_FACTOR);
    const heights = cellOrigin.yyxx
      .add(WALL_BASE_CELL_OFFSETS.mul(cellSize))
      .add(WALL_OUTWARD_DIRECTIONS.mul(frontDistance))
      .sub(ray.basePosition.yyxx)
      .mul(ray.wallHeightRates)
      .toVar();

    return {
      heights,
      crossOffsets: ray.basePosition.xxyy
        .add(heights.mul(ray.displacement.xxyy))
        .sub(cellOrigin.xxyy)
        .sub(halfCellSize)
        .toVar(),
      halfSpanLengths: heights.mul(this.glowLeanTangent).add(halfCellSize).toVar()
    };
  }

  private getWallGlow({
    ray,
    heights,
    spanStartDistances,
    spanEndDistances,
    brightnessLevels,
    heightLevels
  }: GetWallGlowParameters): Node<'float'> {
    const brightnesses = smoothstep(NO_ENERGY, FULL_ENERGY, brightnessLevels);
    const glowHeights = smoothstep(NO_ENERGY, FULL_ENERGY, heightLevels).mul(this.glowHeight);
    const spanFootprints = ray.basePixelFootprint.xxyy.add(heights.mul(ray.displacementPixelFootprint.xxyy));
    const spanCoverages = clamp(
      min(spanStartDistances.div(spanFootprints), HALF_COVERAGE).add(
        min(spanEndDistances.div(spanFootprints), HALF_COVERAGE)
      ),
      NO_COVERAGE,
      FULL_COVERAGE
    );
    const baseCoverages = clamp(
      heights
        .mul(abs(ray.wallSlopes))
        .div(ray.basePixelFootprint.yyxx.add(heights.mul(ray.displacementPixelFootprint.yyxx)))
        .add(HALF_COVERAGE),
      NO_COVERAGE,
      FULL_COVERAGE
    );
    const profiles = float(1).sub(heights.div(max(glowHeights, MINIMUM_DIVISOR_MAGNITUDE)));
    const depthRatios = float(1).sub(heights.div(ray.cameraHeight)).mul(ray.depthRatio).toVar();
    const visibilities = vec4(
      getDepthVisibility(depthRatios.x),
      getDepthVisibility(depthRatios.y),
      getDepthVisibility(depthRatios.z),
      getDepthVisibility(depthRatios.w)
    );
    const hitFactors = step(ray.lowestHeight, heights).mul(step(heights, min(glowHeights, ray.highestHeight)));

    return dot(
      brightnesses.mul(hitFactors).mul(profiles).mul(visibilities).mul(spanCoverages).mul(baseCoverages),
      GLOW_WALL_EMISSION
    );
  }

  private getFrontGlow({
    ray,
    cellOrigin,
    frontDistance,
    frontBrightnessLevels,
    frontHeightLevels
  }: GetFrontGlowParameters): Node<'float'> {
    const frontHits = this.getWallHits({ ray, cellOrigin, frontDistance });

    return this.getWallGlow({
      ray,
      heights: frontHits.heights,
      spanStartDistances: frontHits.halfSpanLengths.add(frontHits.crossOffsets),
      spanEndDistances: frontHits.halfSpanLengths.sub(frontHits.crossOffsets),
      brightnessLevels: frontBrightnessLevels,
      heightLevels: frontHeightLevels
    });
  }

  private getPassageLevels({ slot, lanePositions }: WaveLanePositions): Node<'vec4'> {
    return max(this.wavePowers.element(slot).sub(lanePositions.div(this.waveReachCellCount)), NO_ENERGY);
  }

  private getArrivalAgesMilliseconds({ slot, lanePositions }: WaveLanePositions): Node<'vec4'> {
    return this.waveAgesMilliseconds.element(slot).sub(lanePositions.mul(this.waveStepDurationMilliseconds));
  }

  private getWaveLevels(parameters: WaveLanePositions): Node<'vec4'> {
    const fadeLevels = float(FULL_ENERGY).sub(
      this.getArrivalAgesMilliseconds(parameters).div(this.waveFadeDurationMilliseconds)
    );

    return this.getPassageLevels(parameters).mul(max(fadeLevels, NO_ENERGY));
  }

  private getGridGlow({ glowScope, surface }: GetGridGlowParameters): GridGlow {
    switch (glowScope) {
      case GlowScope.None:
        return { glow: NO_GLOW_NODE, waveFill: EMPTY_FILL_NODE };
      case GlowScope.Charge:
        return { glow: this.getChargeGlow({ ray: this.getGlowRay(surface), surface }), waveFill: EMPTY_FILL_NODE };
      case GlowScope.ChargeAndWaves:
        return this.getChargeAndWavesGlow(surface);
      default:
        throw new Error(`Expected a known glow scope, but got [${String(glowScope)}]`);
    }
  }

  private getChargeGlow({ ray, surface }: GetChargeGlowParameters): Node<'float'> {
    const chargedCell = this.planeNodes.getCurrentPointerCell();

    return select(
      chargedCell.isOnPlane,
      this.getFrontGlow({
        ray,
        cellOrigin: this.getNearestCellOrigin({
          fillStateCell: chargedCell.fillStateCell,
          anchorGridPosition: surface.planePoint.cameraPosition.xy
        }),
        frontDistance: NO_FRONT_DISTANCE,
        frontBrightnessLevels: vec4(this.chargeLevel),
        frontHeightLevels: vec4(this.chargeHeightLevel)
      }),
      NO_GLOW
    );
  }

  private getChargeAndWavesGlow(surface: GridSurface): GridGlow {
    const ray = this.getGlowRay(surface);
    const glow = this.getChargeGlow({ ray, surface }).toVar();
    const waveFill = EMPTY_FILL_NODE.toVar();
    const rayRegionSpread = ray.highestHeight.mul(this.glowLeanTangent);
    const rayRegionMinimum = min(ray.lowestPosition, ray.highestPosition).sub(rayRegionSpread).toVar();
    const rayRegionMaximum = max(ray.lowestPosition, ray.highestPosition).add(rayRegionSpread).toVar();

    Loop(this.waveCount, ({ i: slot }: LoopIteration) => {
      const { cellSize } = this.planeNodes;
      const { planePoint, dentedPoint, planeFootprint } = surface;
      const originCell = this.planeNodes.getPointerCellAtPlaneState({
        canvasPosition: this.wavePointerPositions.element(slot),
        planeState: this.wavePlaneStates.element(slot)
      });
      const originCellOrigin = this.getNearestCellOrigin({
        fillStateCell: originCell.fillStateCell,
        anchorGridPosition: planePoint.cameraPosition.xy
      });
      const crossRegionGaps = max(
        originCellOrigin.sub(rayRegionMaximum),
        rayRegionMinimum.sub(originCellOrigin).sub(cellSize)
      );

      If(originCell.isOnPlane.not().or(min(crossRegionGaps.x, crossRegionGaps.y).greaterThan(NO_GAP)), () => {
        Continue();
      });

      const frontPosition = this.waveAgesMilliseconds.element(slot).div(this.waveStepDurationMilliseconds).toVar();
      const frontDistance = frontPosition.mul(cellSize).toVar();
      const sideHits = this.getWallHits({ ray, cellOrigin: originCellOrigin, frontDistance: NO_FRONT_DISTANCE });
      const sideLaneDistances = abs(sideHits.crossOffsets).sub(sideHits.halfSpanLengths).toVar();
      const frontLevels = this.getWaveLevels({ slot, lanePositions: vec4(frontPosition) }).toVar();
      const sideLevels = this.getWaveLevels({ slot, lanePositions: sideLaneDistances.div(cellSize) }).toVar();
      const planeLaneOffsets = abs(
        dentedPoint.gridPosition.sub(originCellOrigin).div(cellSize).sub(CELL_CENTER_OFFSET)
      ).toVar();
      const planeLanePosition = max(planeLaneOffsets.x, planeLaneOffsets.y).sub(CELL_CENTER_OFFSET).toVar();
      const planeLaneFootprint = select(
        planeLaneOffsets.x.greaterThan(planeLaneOffsets.y),
        planeFootprint.x,
        planeFootprint.y
      ).div(cellSize);
      const planeCellDistances = vec4(floor(planeLanePosition).add(NEXT_CELL_DISTANCE));
      const planeCellArrivalAgeMilliseconds = this.getArrivalAgesMilliseconds({
        slot,
        lanePositions: planeCellDistances
      }).x.toVar();
      const passedLevel = step(NO_ARRIVAL_AGE_MILLISECONDS, planeCellArrivalAgeMilliseconds).mul(
        max(
          this.getPassageLevels({ slot, lanePositions: planeCellDistances }).x.sub(
            planeCellArrivalAgeMilliseconds.div(this.waveFillFadeDurationMilliseconds)
          ),
          NO_ENERGY
        )
      );
      const crossingFill = smoothstep(NO_ENERGY, FULL_ENERGY, frontLevels.x)
        .mul(step(floor(frontPosition), planeLanePosition))
        .mul(
          clamp(
            frontPosition.sub(planeLanePosition).div(planeLaneFootprint).add(HALF_COVERAGE),
            NO_COVERAGE,
            FULL_COVERAGE
          )
        );

      waveFill.assign(
        max(
          waveFill,
          step(min(planeLaneOffsets.x, planeLaneOffsets.y), CELL_CENTER_OFFSET)
            .mul(step(NO_LANE_POSITION, planeLanePosition))
            .mul(max(smoothstep(NO_ENERGY, FULL_ENERGY, passedLevel), crossingFill))
        )
      );
      glow.addAssign(
        this.getFrontGlow({
          ray,
          cellOrigin: originCellOrigin,
          frontDistance,
          frontBrightnessLevels: frontLevels,
          frontHeightLevels: frontLevels
        })
      );
      glow.addAssign(
        this.getWallGlow({
          ray,
          heights: sideHits.heights,
          spanStartDistances: sideLaneDistances,
          spanEndDistances: frontDistance.sub(sideLaneDistances),
          brightnessLevels: sideLevels,
          heightLevels: sideLevels
        })
      );
    });

    return { glow, waveFill };
  }
}
