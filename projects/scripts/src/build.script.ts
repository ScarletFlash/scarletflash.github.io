import { cp, mkdir, rm } from 'fs/promises';
import { build } from 'esbuild';
import { Config } from './constants/config.const';
import { Path } from './constants/path.const';
import { buildIndexCss } from './functions/build-index-css.function';
import { buildIndexHtml } from './functions/build-index-html.function';

Promise.resolve()
  .then(() => rm(Path.Dist.directory, { force: true, recursive: true }))
  .then(() => mkdir(Path.Dist.directory, { recursive: true }))
  .then(() => buildIndexHtml())
  .then(() => buildIndexCss())
  .then(() =>
    cp(Path.Application.Source.assetsDirectory, Path.Dist.assetsDirectory, {
      recursive: true,
    })
  )
  .then(() => build(Config.buildOptions))
  .then(() => cp(Path.Dist.indexHtml, Path.Dist.error404Html));
