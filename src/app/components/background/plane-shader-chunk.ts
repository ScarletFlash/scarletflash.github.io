import { BackgroundPlaneUniformName } from "../../../declarations/enums/background-plane-uniform-name.enum";
import { FILL_STATE_CELL_ROW_COUNT } from "./fill-state-cell-row-count";
import { FILL_STATE_CELLS_PER_TEXEL } from "./fill-state-cells-per-texel";
import { FILL_STATE_COLUMN_COUNT } from "./fill-state-column-count";

export const planeShaderChunk: string = `
uniform vec2 ${BackgroundPlaneUniformName.CanvasSize};
uniform float ${BackgroundPlaneUniformName.CellSize};
uniform float ${BackgroundPlaneUniformName.Tilt};
uniform float ${BackgroundPlaneUniformName.GridOffset};
uniform float ${BackgroundPlaneUniformName.RowShift};

const float FLOOR_ANGLE = radians(67.0);
const float HALF_VERTICAL_FIELD_OF_VIEW = radians(22.5);
const float FADE_START_DEPTH_RATIO = 1.0;
const float FADE_END_DEPTH_RATIO = 3.0;
const float MINIMUM_INVERSE_DEPTH_RATIO = 0.001;
const vec2 FILL_STATE_CELL_GRID_SIZE = vec2(${FILL_STATE_COLUMN_COUNT}, ${FILL_STATE_CELL_ROW_COUNT});
const int FILL_STATE_CELLS_PER_TEXEL = ${FILL_STATE_CELLS_PER_TEXEL};
const float FILLING_STATE_OFFSET = 2.0;
const float EMPTY_FILL = 0.0;
const float FULL_FILL = 1.0;

struct PlanePoint {
    vec2 gridPosition;
    float visibility;
};

PlanePoint getPlanePoint(vec2 canvasPosition) {
    vec2 halfCanvasSize = ${BackgroundPlaneUniformName.CanvasSize} * 0.5;
    vec2 screenPosition = canvasPosition - halfCanvasSize;
    float angle = ${BackgroundPlaneUniformName.Tilt} * FLOOR_ANGLE;
    float cameraDistance = halfCanvasSize.y / tan(HALF_VERTICAL_FIELD_OF_VIEW);

    float inverseDepthRatio = 1.0 - screenPosition.y * tan(angle) / cameraDistance;
    float planeHitFactor = step(MINIMUM_INVERSE_DEPTH_RATIO, inverseDepthRatio);
    float depthRatio = 1.0 / max(inverseDepthRatio, MINIMUM_INVERSE_DEPTH_RATIO);

    vec2 planePosition = vec2(screenPosition.x, screenPosition.y / cos(angle)) * depthRatio;
    float fadeFactor = 1.0 - smoothstep(FADE_START_DEPTH_RATIO, FADE_END_DEPTH_RATIO, depthRatio);

    return PlanePoint(
        planePosition + vec2(0.0, ${BackgroundPlaneUniformName.GridOffset}),
        fadeFactor * planeHitFactor
    );
}

ivec2 getFillStateCell(vec2 gridPosition) {
    vec2 cellIndex = floor(gridPosition / ${BackgroundPlaneUniformName.CellSize})
        + vec2(0.0, ${BackgroundPlaneUniformName.RowShift});
    return ivec2(mod(cellIndex, FILL_STATE_CELL_GRID_SIZE));
}

ivec2 getFillStateTexel(ivec2 fillStateCell) {
    return ivec2(fillStateCell.x, fillStateCell.y / FILL_STATE_CELLS_PER_TEXEL);
}

int getFillStateChannel(ivec2 fillStateCell) {
    return fillStateCell.y % FILL_STATE_CELLS_PER_TEXEL;
}

float getFillLevel(float cellState) {
    return cellState - FILLING_STATE_OFFSET * step(FILLING_STATE_OFFSET, cellState);
}
`;
