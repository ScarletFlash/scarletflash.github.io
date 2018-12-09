import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubRepositoryModel } from '@app/models';
import { GithubControllerService } from '@app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit, OnDestroy {
  public repositories: GithubRepositoryModel[] = [];

  private _subscriptions: Subscription[] = [];
  private _filterCondition: string;

  constructor(private _githubControllerService: GithubControllerService) {}

  public ngOnInit(): void {
    this._subscriptions.push(
      this._githubControllerService.myRepositories.subscribe(
        (response: GithubRepositoryModel[]) => {
          this.repositories = response;
        }
      )
    );
    this._githubControllerService.requestMyRepositories();
  }

  public ngOnDestroy(): void {
    this._subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  public setFilter(condition: string): void {
    this._filterCondition = condition;
  }

  public getFilter(): string {
    return this._filterCondition;
  }
}
