import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'splitId'
})
export class SplitIdPipe implements PipeTransform {

  transform(url: string, ...args: unknown[]): number {
    return Number(url.split('/').reverse()[1]);
  }

}
