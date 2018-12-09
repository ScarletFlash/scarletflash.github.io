import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectArrayFilter'
})
export class ObjectArrayFilterPipe implements PipeTransform {
  public transform(
    array: Array<Object>,
    value: string,
    sortProperty: string = 'name'
  ): Array<Object> {
    return !!value
      ? array.filter(object =>
          object[sortProperty]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        )
      : array;
  }
}
