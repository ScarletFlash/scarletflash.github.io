import { Fn, clamp, float, int, ivec2, max, screenCoordinate, select, texture, uniform, vec4 } from 'three/tsl';
import { NodeMaterial, Vector2, Vector3, type Node, type Texture, type TextureNode } from 'three/webgpu';
import { TexelChannel } from '../../../declarations/enums/texel-channel.enum';
import { type BackgroundPlaneState } from '../../../declarations/interfaces/background-plane-state.interface';
import { type BackgroundPointerCell } from '../../../declarations/interfaces/background-pointer-cell.interface';
import { getPlaneStateVector } from '../../../utilities/get-plane-state-vector.utility';
import { type BackgroundPlaneNodes } from './background-plane-nodes';
import { EMPTY_FILL } from './empty-fill';
import { FILL_STATE_CELLS_PER_TEXEL_NODE } from './fill-state-cells-per-texel-node';
import { FILLING_STATE_OFFSET } from './filling-state-offset';
import { FULL_FILL } from './full-fill';
import { getFillLevel } from './get-fill-level';
import { getStoredFillLevel } from './get-stored-fill-level';

interface BackgroundFillMaterialParameters {
  readonly planeNodes: BackgroundPlaneNodes;
  readonly previousFillState: Texture;
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

interface GetNextCellStateParameters {
  readonly texel: Node<'ivec2'>;
  readonly channel: TexelChannel;
  readonly cellState: Node<'float'>;
  readonly pointerCell: BackgroundPointerCell;
  readonly carriedFill: Node<'float'>;
}

const MAXIMUM_ELAPSED_TIME_MILLISECONDS = 250;

export class BackgroundFillMaterial extends NodeMaterial {
  private readonly previousFillState: TextureNode;

  private readonly elapsedTimeMilliseconds = uniform(0);

  private readonly isPressed = uniform(false);

  private readonly previousPointerPosition = uniform(new Vector2());

  private readonly isPreviousPointerPresent = uniform(false);

  private readonly previousPlaneState = uniform(new Vector3());

  private readonly fillRate: Node<'float'>;

  private readonly fadeRate: Node<'float'>;

  constructor({
    planeNodes,
    previousFillState,
    cellFillDurationMilliseconds,
    cellFadeDurationMilliseconds
  }: BackgroundFillMaterialParameters) {
    super();

    this.previousFillState = texture(previousFillState);
    this.fillRate = float(FULL_FILL / cellFillDurationMilliseconds);
    this.fadeRate = float(-FULL_FILL / cellFadeDurationMilliseconds);
    this.fragmentNode = Fn(() => {
      const texel = ivec2(screenCoordinate).toVar();
      const pointerCell = planeNodes.getCurrentPointerCell();
      const previousPointerCell = planeNodes.getPointerCellAtPlaneState({
        canvasPosition: this.previousPointerPosition,
        planeState: this.previousPlaneState
      });
      const carriedFill = select(
        this.isPressed.and(this.isPreviousPointerPresent).and(previousPointerCell.isOnPlane),
        getStoredFillLevel({ fillState: this.previousFillState, fillStateCell: previousPointerCell.fillStateCell }),
        EMPTY_FILL
      ).toVar();
      const previousState = this.previousFillState.load(texel).toVar();

      return vec4(
        this.getNextCellState({
          texel,
          channel: TexelChannel.Red,
          cellState: previousState.x,
          pointerCell,
          carriedFill
        }),
        this.getNextCellState({
          texel,
          channel: TexelChannel.Green,
          cellState: previousState.y,
          pointerCell,
          carriedFill
        }),
        this.getNextCellState({
          texel,
          channel: TexelChannel.Blue,
          cellState: previousState.z,
          pointerCell,
          carriedFill
        }),
        this.getNextCellState({
          texel,
          channel: TexelChannel.Alpha,
          cellState: previousState.w,
          pointerCell,
          carriedFill
        })
      );
    })();
  }

  public setFrameState({
    elapsedTimeMilliseconds,
    previousFillState,
    isPressed,
    previousPointerPosition,
    isPreviousPointerPresent,
    previousPlaneState
  }: BackgroundFillMaterialFrameState): void {
    this.elapsedTimeMilliseconds.value = Math.min(elapsedTimeMilliseconds, MAXIMUM_ELAPSED_TIME_MILLISECONDS);
    this.previousFillState.value = previousFillState;
    this.isPressed.value = isPressed;
    this.previousPointerPosition.value.copy(previousPointerPosition);
    this.isPreviousPointerPresent.value = isPreviousPointerPresent;
    this.previousPlaneState.value.copy(getPlaneStateVector(previousPlaneState));
  }

  private getNextCellState({
    texel,
    channel,
    cellState,
    pointerCell,
    carriedFill
  }: GetNextCellStateParameters): Node<'float'> {
    const cell = ivec2(texel.x, texel.y.mul(FILL_STATE_CELLS_PER_TEXEL_NODE).add(int(channel)));
    const hoveredCellCondition = pointerCell.isOnPlane
      .and(cell.x.equal(pointerCell.fillStateCell.x))
      .and(cell.y.equal(pointerCell.fillStateCell.y))
      .toVar();
    const fillingCellCondition = hoveredCellCondition.or(cellState.greaterThanEqual(FILLING_STATE_OFFSET)).toVar();
    const fill = max(
      clamp(
        getFillLevel(cellState).add(
          select(fillingCellCondition, this.fillRate, this.fadeRate).mul(this.elapsedTimeMilliseconds)
        ),
        EMPTY_FILL,
        FULL_FILL
      ),
      select(hoveredCellCondition, carriedFill, EMPTY_FILL)
    ).toVar();

    return fill.add(select(fillingCellCondition.and(fill.lessThan(FULL_FILL)), FILLING_STATE_OFFSET, EMPTY_FILL));
  }
}
