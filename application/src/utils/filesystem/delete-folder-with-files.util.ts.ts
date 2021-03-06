import { existsSync, lstatSync, readdirSync, rmdirSync, unlinkSync } from 'fs';
import path from 'path';

import { isEmpty } from '../is-empty.util';
import { isFunction } from '../is-function.util';
import { isNill } from '../is-nill.util';
import { isRegExp } from '../is-reg-exp.unit';

import type { Nullable } from './../../declarations/types/nullable.type';

interface Options {
  fileMatchPattern?: Nullable<RegExp>;
  onDelete?: Nullable<(filePath: string) => void>;
}

export function deleteFolderWithFiles(targetPath: string, options: Nullable<Options> = null): void {
  const pathExists: boolean = existsSync(targetPath);
  if (!pathExists) {
    return;
  }

  const { fileMatchPattern, onDelete }: Options = isNill(options)
    ? { fileMatchPattern: null, onDelete: null }
    : options;

  const filesInDirectory: string[] = readdirSync(targetPath);

  filesInDirectory.forEach((filePath: string) => {
    const normalizedFilePath: string = path.join(targetPath, filePath);
    const fileIsAllowedToBeDeleted: boolean =
      isNill(fileMatchPattern) || (isRegExp(fileMatchPattern) && fileMatchPattern.test(normalizedFilePath));
    if (!fileIsAllowedToBeDeleted) {
      return;
    }

    const fileIsDirectory: boolean = lstatSync(normalizedFilePath).isDirectory();
    if (fileIsDirectory) {
      deleteFolderWithFiles(normalizedFilePath, options);
      return;
    }

    unlinkSync(normalizedFilePath);

    if (!isNill(onDelete) && isFunction(onDelete)) {
      onDelete(normalizedFilePath);
    }
  });

  const restFilesInDirectory: string[] = readdirSync(targetPath);
  const directoryIsEmpty: boolean = isEmpty(restFilesInDirectory);
  if (directoryIsEmpty) {
    rmdirSync(targetPath);
  }
}
