import { BuildOptions, ServeOptions } from 'esbuild';
import { glsl } from 'esbuild-plugin-glsl';
import { Options } from 'sass';
import { Path } from './path.const';

export namespace Config {
  export const serveOptions: ServeOptions = {
    host: '0.0.0.0',
    port: 4200,
  };

  export const buildOptions: BuildOptions = {
    bundle: true,
    splitting: true,
    format: 'esm',
    outdir: Path.Dist.directory,
    entryPoints: [Path.Application.Source.indexTs],
    tsconfig: Path.Application.tsConfig,
    minify: true,
    charset: 'utf8',
    platform: 'browser',
    target: 'esnext',
    resolveExtensions: ['.ts', '.glsl'],
    plugins: [
      glsl({
        minify: true,
      }),
    ],
  };

  export const stylesCompilationOptions: Options<'async'> = {
    charset: true,
    style: 'compressed',
  };
}
