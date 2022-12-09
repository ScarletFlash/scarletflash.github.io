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

  const stylesNodeToSet: HTMLLinkElement = indexHtmlDocument.createElement('link');
  stylesNodeToSet.setAttribute('href', './index.css');
  stylesNodeToSet.setAttribute('rel', 'stylesheet');
  indexHtmlDocument.head.appendChild(stylesNodeToSet);

  const scriptNodeToSet: HTMLScriptElement = indexHtmlDocument.createElement('script');
  scriptNodeToSet.setAttribute('src', './index.js');
  scriptNodeToSet.setAttribute('type', 'module');
  indexHtmlDocument.body.appendChild(scriptNodeToSet);

  const docTypeMark: string = '<!DOCTYPE html>';

  const formattedIndexHtmlContent: string = format(
    `${docTypeMark}<html lang="en">${indexHtmlDocument.documentElement.innerHTML}</html>`,
    {
      parser: 'html',
    }
  );

  const targetIndexHtmlFilePath: string = join(targetDirPath, 'index.html');
  return writeFile(targetIndexHtmlFilePath, formattedIndexHtmlContent);
}
