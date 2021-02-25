import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resourceId',
})
export class ResourceIdPipe implements PipeTransform {
  transform(url: string): number {
    return splitResourceId(url);
  }
}

export function splitResourceId(url: string): number {
  return url ? Number(url.split('/').reverse()[1]) : null;
}
