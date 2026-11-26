import { cos, float, floor, ivec2, max, mod, sin, step, tan, uniform, vec2, vec3 } from 'three/tsl';
import { MathUtils, Vector2, type Node } from 'three/webgpu';
import { type BackgroundPlanePoint } from '../../../declarations/interfaces/background-plane-point.interface';
import { type BackgroundPlaneState } from '../../../declarations/interfaces/background-plane-state.interface';
import { type BackgroundPointerCell } from '../../../declarations/interfaces/background-pointer-cell.interface';
import { type RectSize } from '../../../declarations/types/rect-size.type';
import { FILL_STATE_CELL_GRID_SIZE } from './fill-state-cell-grid-size';
import { getDepthVisibility } from './get-depth-visibility';
import { HALF_FACTOR } from './half-factor';
import { MINIMUM_INVERSE_DEPTH_RATIO } from './minimum-inverse-depth-ratio';

const FLOOR_ANGLE = MathUtils.degToRad(67);
const HALF_VERTICAL_FIELD_OF_VIEW_TANGENT = Math.tan(MathUtils.degToRad(22.5));

interface BackgroundPlaneNodesFrameState extends BackgroundPlaneState {
  readonly isPointerPresent: boolean;
  readonly pointerPosition: Vector2;
}

interface GetPlanePointParameters {
  readonly canvasPosition: Node<'vec2'>;
  readonly tilt: Node<'float'>;
  readonly gridOffset: Node<'float'>;
}

interface GetCellParameters {
  readonly gridPosition: Node<'vec2'>;
  readonly rowShift: Node<'float'>;
}

interface GetPointerCellParameters extends GetPlanePointParameters {
  readonly rowShift: Node<'float'>;
}

interface GetPointerCellAtPlaneStateParameters {
  readonly canvasPosition: Node<'vec2'>;
  readonly planeState: Node<'vec3'>;
}

export class BackgroundPlaneNodes {
  public readonly canvasSize = uniform(new Vector2());

  public readonly tilt = uniform(0);

  public readonly gridOffset = uniform(0);

  public readonly rowShift = uniform(0);

  public readonly cellSize: Node<'float'>;

  private readonly pointerPosition = uniform(new Vector2());

  private readonly isPointerPresent = uniform(false);

  constructor(cellSize: number) {
    this.cellSize = float(cellSize);
  }

  public setSize({ width, height }: RectSize): void {
    this.canvasSize.value.set(width, height);
  }

  public setFrameState({
    tilt,
    gridOffset,
    rowShift,
    isPointerPresent,
    pointerPosition
  }: BackgroundPlaneNodesFrameState): void {
    this.tilt.value = tilt;
    this.gridOffset.value = gridOffset;
    this.rowShift.value = rowShift;
    this.isPointerPresent.value = isPointerPresent;
    this.pointerPosition.value.copy(pointerPosition);
  }

  public getPlanePoint({ canvasPosition, tilt, gridOffset }: GetPlanePointParameters): BackgroundPlanePoint {
    const halfCanvasSize = this.canvasSize.mul(HALF_FACTOR);
    const screenPosition = canvasPosition.sub(halfCanvasSize);
    const angle = tilt.mul(FLOOR_ANGLE);
    const cameraDistance = halfCanvasSize.y.div(HALF_VERTICAL_FIELD_OF_VIEW_TANGENT);
    const inverseDepthRatio = float(1).sub(screenPosition.y.mul(tan(angle)).div(cameraDistance));
    const planeHitFactor = step(MINIMUM_INVERSE_DEPTH_RATIO, inverseDepthRatio);
    const depthRatio = float(1).div(max(inverseDepthRatio, MINIMUM_INVERSE_DEPTH_RATIO)).toVar();
    const planePosition = vec2(screenPosition.x, screenPosition.y.div(cos(angle))).mul(depthRatio);

    return {
      gridPosition: planePosition.add(vec2(0, gridOffset)).toVar(),
      visibility: getDepthVisibility(depthRatio).mul(planeHitFactor).toVar(),
      depthRatio,
      cameraPosition: vec3(0, gridOffset.sub(cameraDistance.mul(sin(angle))), cameraDistance.mul(cos(angle))).toVar()
    };
  }

  public getShiftedCellIndex({ gridPosition, rowShift }: GetCellParameters): Node<'vec2'> {
    return floor(gridPosition.div(this.cellSize)).add(vec2(0, rowShift));
  }

  public getFillStateCell(parameters: GetCellParameters): Node<'ivec2'> {
    return ivec2(mod(this.getShiftedCellIndex(parameters), FILL_STATE_CELL_GRID_SIZE));
  }

  public getPointerCellAtPlaneState({
    canvasPosition,
    planeState
  }: GetPointerCellAtPlaneStateParameters): BackgroundPointerCell {
    return this.getPointerCell({
      canvasPosition,
      tilt: planeState.x,
      gridOffset: planeState.y,
      rowShift: planeState.z
    });
  }

  public getCurrentPointerCell(): BackgroundPointerCell {
    const pointerCell = this.getPointerCell({
      canvasPosition: this.pointerPosition,
      tilt: this.tilt,
      gridOffset: this.gridOffset,
      rowShift: this.rowShift
    });

    return {
      isOnPlane: this.isPointerPresent.and(pointerCell.isOnPlane).toVar(),
      fillStateCell: pointerCell.fillStateCell
    };
  }

  private getPointerCell({
    canvasPosition,
    tilt,
    gridOffset,
    rowShift
  }: GetPointerCellParameters): BackgroundPointerCell {
    const planePoint = this.getPlanePoint({ canvasPosition, tilt, gridOffset });
    const canvasContainmentCondition = canvasPosition.x
      .greaterThanEqual(0)
      .and(canvasPosition.y.greaterThanEqual(0))
      .and(canvasPosition.x.lessThan(this.canvasSize.x))
      .and(canvasPosition.y.lessThan(this.canvasSize.y));

    return {
      isOnPlane: canvasContainmentCondition.and(planePoint.visibility.greaterThan(0)).toVar(),
      fillStateCell: this.getFillStateCell({ gridPosition: planePoint.gridPosition, rowShift }).toVar()
    };
  }
}
