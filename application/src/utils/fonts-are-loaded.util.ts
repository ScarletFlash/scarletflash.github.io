import { from, Observable, of } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';

import { isNill } from './is-nill.util';

type DocumentWithFonts = {
  fonts: unknown;
} & Document;

export function fontsAreLoaded(document: Document): Observable<boolean> {
  if (!isNill(document) && documentHasFontsObject(document) && fontsObjectHasReadyPromise(document.fonts)) {
    return from(document.fonts.ready).pipe(mapTo(true), take(1));
  }
  return of(false);
}

function documentHasFontsObject(document: Document): document is DocumentWithFonts {
  return 'fonts' in document;
}

function fontsObjectHasReadyPromise(fonts: unknown): fonts is { ready: Promise<unknown> } {
  return typeof fonts === 'object' && !isNill(fonts) && 'ready' in fonts;
}
