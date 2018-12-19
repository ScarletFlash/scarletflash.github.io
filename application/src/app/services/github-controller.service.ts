import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubRepositoryModel } from '@app/declarations';
import { NotificationService } from '@app/services/notification.service';
import { RequestGithubUsersService } from '@app/services/requests';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubControllerService {
  public myRepositories: BehaviorSubject<
    GithubRepositoryModel[]
  > = new BehaviorSubject<GithubRepositoryModel[]>([]);

  constructor(
    private _requestGithubUsersService: RequestGithubUsersService,
    private _notificationService: NotificationService
  ) {}

  public requestMyRepositories(): void {
    this._requestUsersRepositories('scarletflash');
  }

  private _requestUsersRepositories(username: string): void {
    this._requestGithubUsersService.getUsersRepos(username).subscribe(
      (response: GithubRepositoryModel[]) => {
        this.myRepositories.next(response);
      },
      (response: HttpErrorResponse) => {
        this._throwAlert(response);
      }
    );
  }

  private _throwAlert(response: HttpErrorResponse): void {
    this._notificationService.throwError(response.message);
  }
}
