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
      export const indexScss: string = join(directory, 'src', 'index.scss');
      export const assetsDirectory: string = join(directory, 'src', 'assets');
    }

    export const tsConfig: string = join(directory, 'tsconfig.json');
  }

  export namespace Dist {
    export const directory: string = join(Root.directory, 'dist');
    export const indexHtml: string = join(directory, 'index.html');
    export const error404Html: string = join(directory, '404.html');
    export const indexJs: string = join(directory, 'index.js');
    export const indexCss: string = join(directory, 'index.css');
    export const assetsDirectory: string = join(directory, 'assets');
  }
}
