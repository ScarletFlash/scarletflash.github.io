import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { JSDOM } from 'jsdom';
import { format } from 'prettier';
import { Path } from '../constants/path.const';

export async function buildIndexHtml(targetDirPath: string = Path.Dist.directory): Promise<void> {
  const rawIndexHtmlContent: string = await readFile(Path.Application.Source.indexHtml, {
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

  const targetIndexHtmlFilePath: string = join(targetDirPath, 'index.html');
  return writeFile(targetIndexHtmlFilePath, formattedIndexHtmlContent);
}
