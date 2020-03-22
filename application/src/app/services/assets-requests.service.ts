import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as R from 'ramda';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetsRequestsService {
  constructor(private readonly _httpClient: HttpClient) {}

  public getFileFromAssets(path: string): Observable<HttpEvent<Blob>> {
    if (R.isNil(path) || Object.is(path.length, 0)) {
      const invalidPath: Error = new Error('passed path is invalid');
      return throwError(invalidPath);
    }
    const sanitizedPath: string = path.startsWith('/') ? path.substring(1) : path;
    return this._httpClient.get(`/assets/${sanitizedPath}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob',
      withCredentials: false
    });
  }
}
