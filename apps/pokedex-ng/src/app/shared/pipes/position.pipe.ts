import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position',
})
export class PositionPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    switch (value) {
      case 1:
        return '1st';
      case 2:
        return '2nd';
      case 3:
        return '3rd';
      default:
        return value + 'th';
    }
  }
}
