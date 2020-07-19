import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'resourceId'
})
export class ResourceIdPipe implements PipeTransform {

  transform(url: string, ...args: unknown[]): number {
    return Number(url.split('/').reverse()[1]);
  }

}
