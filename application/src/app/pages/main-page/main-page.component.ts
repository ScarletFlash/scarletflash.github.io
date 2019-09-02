import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Publication } from '@app-declarations';
import { shuffleArray } from '@app-functions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-page',
  styleUrls: ['./main-page.component.scss'],
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  private readonly _logoCount: number = 100;
  private readonly _logoNames: Set<string> = new Set<string>([
    'angular',
    'typescript',
    'nest.js',
    'rxjs',
    'docker',
    'ubuntu',
    'git',
    'node.js',
    'bem',
    'circleci',
    'npm',
    'sass',
    'css3',
    'html5'
  ]);

  public readonly teaserValues: string[] = [
    'Linter lover',
    'Frontend developer at SNH MeisterSoft',
    'Full-Stack developer at home'
  ];

  public readonly logoUrls: string[] = shuffleArray(
    new Array(Math.ceil(this._logoCount / this._logoNames.size))
      .fill(Array.from(this._logoNames.values()))
      .flat()
      .map((innerName: string) => `/assets/logos/${innerName}.svg`)
  );

  public publications: Publication[] = [];

  constructor() {
    // console.log(Math.ceil(this._logoCount / this._logoNames.size));
  }
}
