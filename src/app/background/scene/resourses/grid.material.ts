import { Color, ShaderMaterial, Vector2, type IUniform } from 'three';
import type { Dimensions } from '../../../declarations/dimensions.interface';

const vertexShader: string = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const fragmentShader: string = `
uniform float shift;
uniform vec2 dimensions;
uniform float cellSize;
uniform float lineThickness;
uniform vec3 lineColor;
varying vec2 vUv;

float grid(vec2 uv) {
  vec2 scale = dimensions / cellSize;
  uv *= scale;
  uv.y += shift * scale.y;

  vec2 grid = fract(uv);
  float xLine = min(smoothstep(0.0, lineThickness, grid.x), smoothstep(1.0, 1.0 - lineThickness, grid.x));
  float yLine = min(smoothstep(0.0, lineThickness, grid.y), smoothstep(1.0, 1.0 - lineThickness, grid.y));

  return min(xLine, yLine);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord.xy / dimensions;

  float g = grid(uv);
  fragColor.rgb = mix(lineColor, vec3(0.0), g);
  fragColor.a = 1.0;
}

void main() {
  mainImage(gl_FragColor, vUv * dimensions);
}
`;
export class GridMaterial extends ShaderMaterial {
  constructor({ widthPx, heightPx }: Dimensions) {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        shift: { value: 0.0 },
        dimensions: {
          value: new Vector2(widthPx, heightPx)
        },
        cellSize: { value: 50.0 },
        lineThickness: { value: 0.01 },
        lineColor: { value: new Color(0xff5050) }
      }
    });
  }

  public nextFrame(): void {
    const targetUniform: IUniform<number> = this.uniforms['shift'];
    if (typeof targetUniform.value !== 'number') {
      throw new Error('Invalid uniform value');
    }
    targetUniform.value += 0.000075;
  }
}
