import { mkdir, readFile, rm, writeFile } from 'fs/promises';
import { join } from 'path';
import { build, BuildOptions, BuildResult } from 'esbuild';
import { JSDOM } from 'jsdom';
import { format } from 'prettier';

namespace Path {
  export namespace Root {
    export const directory: string = __dirname;
    export const tsConfigApp: string = join(directory, 'tsconfig.app.json');
  }

  export namespace Source {
    export const directory: string = join(Root.directory, 'src');
    export const indexHtml: string = join(directory, 'index.html');
    export const indexTs: string = join(directory, 'index.ts');
  }

  export namespace Dist {
    export const directory: string = join(Root.directory, 'dist');
    export const indexHtml: string = join(directory, 'index.html');
  }
}

async function buildIndexHtml(): Promise<void> {
  const rawIndexHtmlContent: string = await readFile(Path.Source.indexHtml, {
    encoding: 'utf-8',
  });

  const indexHtmlJsDom: JSDOM = new JSDOM(rawIndexHtmlContent);
  const indexHtmlDocument: Document = indexHtmlJsDom.window.document;

  const scriptNodeToSet: HTMLScriptElement = indexHtmlDocument.createElement('script');
  scriptNodeToSet.setAttribute('src', './index.js');
  scriptNodeToSet.setAttribute('type', 'module');
  indexHtmlDocument.body.appendChild(scriptNodeToSet);

  const modifiedIndexHtmlContent: string = indexHtmlDocument.documentElement.innerHTML;
  const formattedIndexHtmlContent: string = format(modifiedIndexHtmlContent, {
    parser: 'html',
  });
  return writeFile(Path.Dist.indexHtml, formattedIndexHtmlContent);
}

async function buildIndexJs(): Promise<BuildResult> {
  const options: BuildOptions = {
    bundle: true,
    splitting: true,
    format: 'esm',
    outdir: Path.Dist.directory,
    entryPoints: [Path.Source.indexTs],
    tsconfig: Path.Root.tsConfigApp,
  };
  return build(options);
}

Promise.resolve()
  .then(() => rm(Path.Dist.directory, { force: true, recursive: true }))
  .then(() => mkdir(Path.Dist.directory, { recursive: true }))
  .then(() => buildIndexJs())
  .then(() => buildIndexHtml());
