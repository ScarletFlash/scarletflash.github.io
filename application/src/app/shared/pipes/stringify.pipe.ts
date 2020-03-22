import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify'
})
export class StringifyPipe<T> implements PipeTransform {
  public transform(value: T): string {
    return JSON.stringify(value);
  }
}
