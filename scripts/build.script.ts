import { mkdir, rm } from 'fs/promises';
import { build } from 'esbuild';
import { Config } from './constants/config.const';
import { Path } from './constants/path.const';
import { buildIndexHtml } from './functions/build-index-html.function';

Promise.resolve()
  .then(() => rm(Path.Dist.directory, { force: true, recursive: true }))
  .then(() => mkdir(Path.Dist.directory, { recursive: true }))
  .then(() => buildIndexHtml())
  .then(() => build(Config.buildOptions));
