import { BuildOptions, ServeOptions } from 'esbuild';
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
    entryPoints: [Path.Source.indexTs],
    tsconfig: Path.Root.tsConfigApp,
    minify: true,
    charset: 'utf8',
    platform: 'browser',
    target: 'esnext',
  };
}
