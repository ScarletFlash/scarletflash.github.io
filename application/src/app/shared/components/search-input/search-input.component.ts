import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Input() public placeholder?: string = '';

  @Output() public onvaluechange: EventEmitter<CustomEvent<string>> = new EventEmitter<CustomEvent<string>>(true);

  private _focused: boolean = false;

  public emitValue(value: string): void {
    this.onvaluechange.emit(
      new CustomEvent<string>('valuewaschanged', { detail: value })
    );
  }

  public getElementStyles(element: HTMLElement): CSSStyleDeclaration {
    return getComputedStyle(element);
  }

  public setFocused(focused: boolean): void {
    this._focused = focused;
  }

  public getFocused(): boolean {
    return this._focused;
  }

}
