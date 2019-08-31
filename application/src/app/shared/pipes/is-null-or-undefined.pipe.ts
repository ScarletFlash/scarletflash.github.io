import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from '@app-functions';

@Pipe({
  name: 'isNullOrUndefined',
  pure: false
})
export class IsNullOrUndefinedPipe<T = any> implements PipeTransform {
  public transform(value: T): boolean {
    return isNullOrUndefined(value);
  }
}
