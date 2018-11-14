import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @Output() public onvaluechange: EventEmitter<CustomEvent<string>> = new EventEmitter<CustomEvent<string>>(true);

  emitValue(value: string): void {
    this.onvaluechange.emit(
      new CustomEvent<string>('valuewaschanged', { detail: value })
    );
  }

}
