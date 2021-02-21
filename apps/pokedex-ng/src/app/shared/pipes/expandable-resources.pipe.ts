import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expandableResources',
})
export class ExpandableResourcesPipe implements PipeTransform {
  transform<T>(value: [T]): { key: T; value: boolean }[] {
    return value.map((value1) => ({ key: value1, value: false }));
  }
}
