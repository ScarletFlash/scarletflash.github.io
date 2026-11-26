import { int, ivec2, select } from 'three/tsl';
import { type Node, type TextureNode } from 'three/webgpu';
import { TexelChannel } from '../../../declarations/enums/texel-channel.enum';
import { FILL_STATE_CELLS_PER_TEXEL_NODE } from './fill-state-cells-per-texel-node';
import { getFillLevel } from './get-fill-level';

interface GetStoredFillLevelParameters {
  readonly fillState: TextureNode;
  readonly fillStateCell: Node<'ivec2'>;
}

export function getStoredFillLevel({ fillState, fillStateCell }: GetStoredFillLevelParameters): Node<'float'> {
  const storedState = fillState
    .load(ivec2(fillStateCell.x, fillStateCell.y.div(FILL_STATE_CELLS_PER_TEXEL_NODE)))
    .toVar();
  const channel = fillStateCell.y.mod(FILL_STATE_CELLS_PER_TEXEL_NODE).toVar();

  return getFillLevel(
    select(
      channel.equal(int(TexelChannel.Red)),
      storedState.x,
      select(
        channel.equal(int(TexelChannel.Green)),
        storedState.y,
        select(channel.equal(int(TexelChannel.Blue)), storedState.z, storedState.w)
      )
    )
  );
}
