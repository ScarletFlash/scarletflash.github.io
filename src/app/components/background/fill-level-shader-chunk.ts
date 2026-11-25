export const fillLevelShaderChunk: string = `
const float FILLING_STATE_OFFSET = 2.0;
const float EMPTY_FILL = 0.0;
const float FULL_FILL = 1.0;

float getFillLevel(float cellState) {
    return cellState - FILLING_STATE_OFFSET * step(FILLING_STATE_OFFSET, cellState);
}
`;
