import { from, Observable } from 'rxjs';

export function importFile(filePath: string): Observable<unknown> {
  return from(import(filePath));
}
