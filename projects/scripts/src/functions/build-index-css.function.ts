import { writeFile } from 'fs/promises';
import { join } from 'path';
import { compileAsync, CompileResult } from 'sass';
import { Config } from '../constants/config.const';
import { Path } from '../constants/path.const';

export async function buildIndexCss(targetDirPath: string = Path.Dist.directory): Promise<void> {
  const { css }: CompileResult = await compileAsync(Path.Application.Source.indexScss, Config.stylesCompilationOptions);
  const targetIndexHtmlFilePath: string = join(targetDirPath, 'index.css');
  return writeFile(targetIndexHtmlFilePath, css);
}
