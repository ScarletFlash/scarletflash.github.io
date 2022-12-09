precision mediump float;

uniform vec2 resolution;
uniform float uZoomFactor;

varying float vX;
varying float vY;

void main(void) {
  float distance = gl_FragCoord.z / gl_FragCoord.w;
  float fuzz = 1.0 / distance;

  float minorLineFreq;

  if (distance > 10.0) {
    minorLineFreq = 1.0;
  } else if (distance > 5.0) {
    minorLineFreq = 1.0;
  } else {
    minorLineFreq = 0.10;
  }

  float xd = mod(vX, minorLineFreq) * 88.1;
  float yd = mod(vY, minorLineFreq) * 88.1;

  if (xd < fuzz) {
    gl_FragColor = vec4(0.0,0.0,0.0,1.0);
  } else if (yd < fuzz) {
    gl_FragColor = vec4(0.0,0.0,0.0,1.0);
  } else {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
}
