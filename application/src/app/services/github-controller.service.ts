import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubRepositoryModel } from '@app/models';
import { NotificationService } from '@app/services/notification.service';
import { RequestGithubUsersService } from '@app/services/request-github-users.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubControllerService {

  public myRepositories: BehaviorSubject<GithubRepositoryModel[]> = new BehaviorSubject<GithubRepositoryModel[]>([]);

  private _username: string;

  constructor(
    private _requestGithubUsersService: RequestGithubUsersService,
    private _notificationService: NotificationService
  ) {
    this._username = (window.location.hostname === 'localhost') ? 'scarletflash' : window.location.hostname;
   }

  requestMyRepositories(): void {
    this._requestGithubUsersService.getUsersRepos(this._username).subscribe(
      (response: GithubRepositoryModel[]) => { this.myRepositories.next(response); },
      (response: HttpErrorResponse) => { this.throwAlert(response); }
    );
  }

  throwAlert(response: HttpErrorResponse): void {
    this._notificationService.throwError(response.message);
  }
}
