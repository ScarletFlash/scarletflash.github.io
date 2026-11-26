export const fillLevelShaderChunk: string = `
const float FILLING_STATE_OFFSET = 2.0;
const float EMPTY_FILL = 0.0;
const float FULL_FILL = 1.0;

float getFillLevel(float cellState) {
    return cellState - FILLING_STATE_OFFSET * step(FILLING_STATE_OFFSET, cellState);
}

float getStoredFillLevel(sampler2D fillState, ivec2 fillStateCell) {
    return getFillLevel(texelFetch(
        fillState,
        ivec2(fillStateCell.x, fillStateCell.y / FILL_STATE_CELLS_PER_TEXEL),
        0
    )[fillStateCell.y % FILL_STATE_CELLS_PER_TEXEL]);
}
`;
