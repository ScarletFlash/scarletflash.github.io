import { exec, ExecException } from 'child_process';
import { error, info, warn } from 'fancy-log';
import { copyFile } from 'fs';
import { parallel, series, task, TaskFunction } from 'gulp';
import { argv } from 'process';

import { copyFolderWithFiles, deleteFolderWithFiles, isNill } from './src/app/utils';

import type { Nullable } from '@app/declarations/types';

const BEFORE_DELETE_START_MESSAGE: string = '\x1b[0m' + 'These files are removed:' + '\x1b[31m';

const PASSED_ARGUMENT: string = argv[3];
const VERBOSE_MODE_IS_ENABLED: boolean =
  !isNill(PASSED_ARGUMENT) && String(PASSED_ARGUMENT).toLowerCase() === '--verbose';

namespace CleanFoldersTasks {
  const logOnFileDeleteIfVerboseModeIsEnabled: Nullable<(filePath: string) => void> = VERBOSE_MODE_IS_ENABLED
    ? (filePath: string) => info(filePath)
    : null;

  export const dist: TaskFunction = (done: VoidFunction): void => {
    warn(
      `\x1b[0m

      \x1b[5m\x1b[33m⚡ Attention!\x1b[0m
      All files and folders inside ./application/dist/ would be removed.

      \x1b[0m`
    );

    logOnDeleteStartIfVerboseModeIsEnabled();
    deleteFolderWithFiles('./dist/', {
      onDelete: logOnFileDeleteIfVerboseModeIsEnabled
    });

    done();
  };

  export const root: TaskFunction = (done: VoidFunction): void => {
    const fileMatchPattern: RegExp = new RegExp(
      /^(?!(.*\/(((application)|(\.git)|(license)|(readme\.md)|(cname))\/*))).*$/,
      'i'
    );
    warn(
      `\x1b[0m

      \x1b[5m\x1b[33m⚡ Attention!\x1b[0m
      All files and folders matching pattern inside ./ would be removed.
      Pattern: ${fileMatchPattern.source}

      \x1b[0m`
    );

    logOnDeleteStartIfVerboseModeIsEnabled();
    deleteFolderWithFiles('./../', {
      fileMatchPattern,
      onDelete: logOnFileDeleteIfVerboseModeIsEnabled
    });

    done();
  };

  const logOnDeleteStartIfVerboseModeIsEnabled = (): void => {
    if (!VERBOSE_MODE_IS_ENABLED) {
      return;
    }
    info(BEFORE_DELETE_START_MESSAGE);
  };
}

namespace CopyTasks {
  warn(
    `\x1b[0m

    All files and folders from ./application/dist/ would be copied to the project root (./).

    \x1b[0m`
  );

  const logOnFileCopyIfVerboseModeIsEnabled: Nullable<(
    sourcePath?: string,
    targetPath?: string
  ) => void> = VERBOSE_MODE_IS_ENABLED
    ? (sourcePath?: string, targetPath?: string) => info(`${sourcePath} ⇒ ${targetPath}`)
    : null;

  export const distToRoot: TaskFunction = (done: VoidFunction): void => {
    copyFolderWithFiles('./dist/frontend/', './../', {
      onCopy: logOnFileCopyIfVerboseModeIsEnabled
    });

    done();
  };

  export const indexHtmlTo404Html: TaskFunction = (done: VoidFunction): void => {
    warn(
      `\x1b[0m

      ./index.html would be copied to ./404.html.

      \x1b[0m`
    );

    copyFile('./../index.html', './../404.html', () => {
      done();
    });
  };
}

namespace BuildTasks {
  export const staticFiles: TaskFunction = (done: VoidFunction): void => {
    warn(
      `\x1b[0m

      Static files would be built via @angular/cli.

      \x1b[0m`
    );

    try {
      exec(
        'ng build --configuration=production',
        (errorException: Nullable<ExecException>, stdout: string, stderr: string) => {
          if (!isNill(errorException) && 'message' in errorException && !isNill(errorException.message)) {
            throw errorException.message;
          }
          if (!isNill(stderr)) {
            error(stderr);
          }
          info(stdout);
          done();
        }
      );
    } catch (exception) {
      error(exception);
      done();
    }
  };
}

task('clean:folders:dist', CleanFoldersTasks.dist);
task('clean:folders:root', CleanFoldersTasks.root);
task('clean:folders', parallel('clean:folders:dist', 'clean:folders:root'));

task('build:static', BuildTasks.staticFiles);

task('copy:folders:dist-root', CopyTasks.distToRoot);
task('copy:folders:index.html-404.html', CopyTasks.indexHtmlTo404Html);

task(
  'build',
  series(
    'clean:folders',
    'build:static',
    'copy:folders:dist-root',
    'copy:folders:index.html-404.html',
    'clean:folders:dist'
  )
);
