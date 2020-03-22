import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkedInRequestsService {
  constructor(private readonly _httpClient: HttpClient) {}

  public getPublicProfile(): Observable<any> {
    return this._httpClient.get('https://api.linkedin.com/v1/people/url="https://www.linkedin.com/in/usakov/"');
  }
}
