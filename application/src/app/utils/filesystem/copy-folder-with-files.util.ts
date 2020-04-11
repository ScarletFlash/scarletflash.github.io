import { copyFile, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import path from 'path';

import { isFunction } from '../is-function.util';
import { isNill } from '../is-nill.util';

import type { Nullable } from '@app/declarations/types';

interface Options {
  onCopy?: Nullable<(sourcePath?: string, targetPath?: string) => void>;
}

export function copyFolderWithFiles(sourcePath: string, targetPath: string, options: Nullable<Options> = null): void {
  const { onCopy }: Options = isNill(options) ? { onCopy: null } : options;

  const sourceIsDirectory: boolean = existsSync(sourcePath) && statSync(sourcePath).isDirectory();
  const targetDirectoryExists: boolean = existsSync(targetPath);

  if (sourceIsDirectory && !targetDirectoryExists) {
    mkdirSync(targetPath);
  }

  if (sourceIsDirectory) {
    readdirSync(sourcePath).forEach((filePath: string) => {
      copyFolderWithFiles(path.join(sourcePath, filePath), path.join(targetPath, filePath), options);
    });
    return;
  }

  copyFile(sourcePath, targetPath, () => {
    if (!isNill(onCopy) && isFunction(onCopy)) {
      onCopy(sourcePath, targetPath);
    }
  });
}
