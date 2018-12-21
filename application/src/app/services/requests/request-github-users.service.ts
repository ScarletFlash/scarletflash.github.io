import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubApiUrlConst } from '@app/constants';
import { GithubRepositoryModel } from '@app/declarations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestGithubUsersService {
  readonly requestUrl: string = `${GithubApiUrlConst}/users`;

  constructor(protected http: HttpClient) {}

  public getUsersRepos(username: string): Observable<GithubRepositoryModel[]> {
    return this.http.get<GithubRepositoryModel[]>(`${this.requestUrl}/${username}/repos`);
  }
}
