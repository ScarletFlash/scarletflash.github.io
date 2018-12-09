import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsernameConst } from '@app/constants';
import { GithubRepositoryModel } from '@app/models';
import { BehaviorSubject } from 'rxjs';

import { NotificationService } from './notification.service';
import { RequestGithubUsersService } from './requests';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesPageStateService {

  public repositories$: BehaviorSubject<GithubRepositoryModel[]> = new BehaviorSubject<GithubRepositoryModel[]>([]);

  constructor(
    private _requestGuthubUsersService: RequestGithubUsersService,
    private _notificationsService: NotificationService
  ) { }

  public refreshRepositories(): void {
    this._requestUsersRepositories(UsernameConst);
  }

  private _requestUsersRepositories(username: string): void {
    this._requestGuthubUsersService.getUsersRepos(username).subscribe(
      (response: GithubRepositoryModel[]) => {
        this.repositories$.next(response);
      },
      (response: HttpErrorResponse) => {
        this._notificationsService.throwError(response.message);
      }
    );
  }
}
