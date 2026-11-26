export const fullScreenVertexShader = `
varying vec2 normalizedCanvasPosition;

void main() {
    normalizedCanvasPosition = uv;
    gl_Position = vec4(position, 1.0);
}`;
