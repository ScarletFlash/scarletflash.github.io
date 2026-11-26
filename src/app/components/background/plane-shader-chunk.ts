import { BackgroundPlaneUniformName } from '../../../declarations/enums/background-plane-uniform-name.enum';
import { FILL_STATE_CELL_ROW_COUNT } from './fill-state-cell-row-count';
import { FILL_STATE_CELLS_PER_TEXEL } from './fill-state-cells-per-texel';
import { FILL_STATE_COLUMN_COUNT } from './fill-state-column-count';

export const planeShaderChunk = `
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
const ivec2 FILL_STATE_CELL_GRID_SIZE = ivec2(${FILL_STATE_COLUMN_COUNT}, ${FILL_STATE_CELL_ROW_COUNT});
const int FILL_STATE_CELLS_PER_TEXEL = ${FILL_STATE_CELLS_PER_TEXEL};

struct PlanePoint {
    vec2 gridPosition;
    float visibility;
    float depthRatio;
    vec3 cameraPosition;
};

float getDepthVisibility(float depthRatio) {
    return 1.0 - smoothstep(FADE_START_DEPTH_RATIO, FADE_END_DEPTH_RATIO, depthRatio);
}

PlanePoint getPlanePoint(vec2 canvasPosition, float planeTilt, float planeGridOffset) {
    vec2 halfCanvasSize = ${BackgroundPlaneUniformName.CanvasSize} * 0.5;
    vec2 screenPosition = canvasPosition - halfCanvasSize;
    float angle = planeTilt * FLOOR_ANGLE;
    float cameraDistance = halfCanvasSize.y / tan(HALF_VERTICAL_FIELD_OF_VIEW);

    float inverseDepthRatio = 1.0 - screenPosition.y * tan(angle) / cameraDistance;
    float planeHitFactor = step(MINIMUM_INVERSE_DEPTH_RATIO, inverseDepthRatio);
    float depthRatio = 1.0 / max(inverseDepthRatio, MINIMUM_INVERSE_DEPTH_RATIO);

    vec2 planePosition = vec2(screenPosition.x, screenPosition.y / cos(angle)) * depthRatio;

    return PlanePoint(
        planePosition + vec2(0.0, planeGridOffset),
        getDepthVisibility(depthRatio) * planeHitFactor,
        depthRatio,
        vec3(0.0, planeGridOffset - cameraDistance * sin(angle), cameraDistance * cos(angle))
    );
}

vec2 getShiftedCellIndex(vec2 gridPosition, float planeRowShift) {
    return floor(gridPosition / ${BackgroundPlaneUniformName.CellSize}) + vec2(0.0, planeRowShift);
}

ivec2 getFillStateCell(vec2 gridPosition, float planeRowShift) {
    return ivec2(mod(getShiftedCellIndex(gridPosition, planeRowShift), vec2(FILL_STATE_CELL_GRID_SIZE)));
}
`;
