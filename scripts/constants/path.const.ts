import { join } from 'path';

export namespace Path {
  export namespace Root {
    export const directory: string = join(__dirname, './../../');
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
