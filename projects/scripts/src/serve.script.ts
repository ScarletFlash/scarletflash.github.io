import { mkdir } from 'fs/promises';
import { join } from 'path';
import { serve, ServeResult } from 'esbuild';
import { Config } from './constants/config.const';
import { Path } from './constants/path.const';
import { buildIndexHtml } from './functions/build-index-html.function';

const temporaryServeDirectoryPath: string = join(Path.Dist.directory, `.serve-dir-${new Date().valueOf()}`);

Promise.resolve()
  .then(() => mkdir(temporaryServeDirectoryPath, { recursive: true }))
  .then(() => buildIndexHtml(temporaryServeDirectoryPath))
  .then(() =>
    serve(
      { ...Config.serveOptions, servedir: temporaryServeDirectoryPath },
      { ...Config.buildOptions, outdir: temporaryServeDirectoryPath }
    )
  )
  // eslint-disable-next-line no-console
  .then(({ port, host }: ServeResult) => console.log(`🚀 http://${host}:${port}/`));
