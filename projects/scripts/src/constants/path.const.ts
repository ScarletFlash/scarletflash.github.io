import { join } from 'path';

export namespace Path {
  export namespace Root {
    export const directory: string = join(__dirname, './../../../../');
  }

  export namespace Application {
    export const directory: string = join(Root.directory, 'projects', 'application');

    export namespace Source {
      export const indexHtml: string = join(directory, 'src', 'index.html');
      export const indexTs: string = join(directory, 'src', 'index.ts');
    }

    export const tsConfig: string = join(directory, 'tsconfig.json');
  }

  export namespace Dist {
    export const directory: string = join(Root.directory, 'dist');
    export const indexHtml: string = join(directory, 'index.html');
  }
}
