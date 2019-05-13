import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'ScarletFlash';

  private _isHovered: boolean = false;

  public isHovered(): boolean {
    return this._isHovered;
  }

  public onEnter(): void {
    this._isHovered = true;
  }

  public onLeave(): void {
    this._isHovered = false;
  }
}
