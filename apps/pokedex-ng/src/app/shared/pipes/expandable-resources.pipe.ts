import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expandableResources',
})
export class ExpandableResourcesPipe implements PipeTransform {
  transform<T>(value: [T], ...args: unknown[]): { key: T; value: boolean }[] {
    const ret: { key: T; value: boolean }[] = [];
    value.forEach((value1) => ret.push({ key: value1, value: false }));
    return ret;
  }
}
