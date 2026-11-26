import { BackgroundPlaneUniformName } from '../../../declarations/enums/background-plane-uniform-name.enum';
import { BackgroundPointerUniformName } from '../../../declarations/enums/background-pointer-uniform-name.enum';

export const pointerCellShaderChunk = `
uniform vec2 ${BackgroundPointerUniformName.Position};
uniform bool ${BackgroundPointerUniformName.IsPresent};

struct PointerCell {
    bool isOnPlane;
    ivec2 fillStateCell;
};

PointerCell getPointerCell(vec2 canvasPosition, float planeTilt, float planeGridOffset, float planeRowShift) {
    PlanePoint planePoint = getPlanePoint(canvasPosition, planeTilt, planeGridOffset);
    bool isOverCanvas = all(greaterThanEqual(canvasPosition, vec2(0.0)))
        && all(lessThan(canvasPosition, ${BackgroundPlaneUniformName.CanvasSize}));

    return PointerCell(
        isOverCanvas && planePoint.visibility > 0.0,
        getFillStateCell(planePoint.gridPosition, planeRowShift)
    );
}

PointerCell getPointerCellAtPlaneState(vec2 canvasPosition, vec3 planeState) {
    return getPointerCell(canvasPosition, planeState.x, planeState.y, planeState.z);
}

PointerCell getCurrentPointerCell() {
    PointerCell pointerCell = getPointerCell(
        ${BackgroundPointerUniformName.Position},
        ${BackgroundPlaneUniformName.Tilt},
        ${BackgroundPlaneUniformName.GridOffset},
        ${BackgroundPlaneUniformName.RowShift}
    );

    return PointerCell(${BackgroundPointerUniformName.IsPresent} && pointerCell.isOnPlane, pointerCell.fillStateCell);
}
`;
