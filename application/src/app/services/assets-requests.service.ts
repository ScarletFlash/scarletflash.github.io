import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetsRequestsService {
  private readonly assetsLocation: string = '/assets';
  constructor(private readonly httpClient: HttpClient) {}

  public getMainPageBackgroundImage(): Observable<Blob> {
    return this.getFile('images/main-page-background.jpg');
  }

  private getFile(path: string): Observable<Blob> {
    return this.httpClient.get(`${this.assetsLocation}/${path}`, {
      responseType: 'blob'
    });
  }
}
