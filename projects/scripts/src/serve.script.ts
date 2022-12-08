import { mkdir } from 'fs/promises';
import { join } from 'path';
import { serve, ServeResult } from 'esbuild';
import { Config } from './constants/config.const';
import { Path } from './constants/path.const';
import { buildIndexCss } from './functions/build-index-css.function';
import { buildIndexHtml } from './functions/build-index-html.function';

const temporaryServeDirectoryPath: string = join(Path.Dist.directory, `.serve-dir-${new Date().valueOf()}`);

async function runServer(): Promise<void> {
  const { port, host }: ServeResult = await serve(
    { ...Config.serveOptions, servedir: temporaryServeDirectoryPath },
    { ...Config.buildOptions, outdir: temporaryServeDirectoryPath }
  );
  // eslint-disable-next-line no-console
  console.log(`🚀 http://${host}:${port}/`);
}

Promise.resolve()
  .then(() => mkdir(temporaryServeDirectoryPath, { recursive: true }))
  .then(() => buildIndexHtml(temporaryServeDirectoryPath))
  .then(() => buildIndexCss(temporaryServeDirectoryPath))
  .then(() => runServer());
