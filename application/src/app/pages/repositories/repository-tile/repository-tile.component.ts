import { Component, Input } from '@angular/core';
import { GithubRepositoryModel } from '@app/models';

@Component({
  selector: 'app-repository-tile',
  templateUrl: './repository-tile.component.html',
  styleUrls: ['./repository-tile.component.scss']
})
export class RepositoryTileComponent {
  @Input() public repository: GithubRepositoryModel;
}
