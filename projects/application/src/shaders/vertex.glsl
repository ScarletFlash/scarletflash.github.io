attribute vec3 aVertexPosition;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

varying float vX;
varying float vY;

void main(void) {
  vX = aVertexPosition.x;
  vY = aVertexPosition.y;
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
}
