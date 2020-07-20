import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform<T>(value: T[], ...args: unknown[]): T {
    return value[0];
  }

}
