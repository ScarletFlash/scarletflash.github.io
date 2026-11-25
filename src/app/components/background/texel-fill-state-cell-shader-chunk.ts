export const texelFillStateCellShaderChunk: string = `
ivec2 getTexelFillStateCell(ivec2 texel, int channel) {
    return ivec2(texel.x, texel.y * FILL_STATE_CELLS_PER_TEXEL + channel);
}
`;
