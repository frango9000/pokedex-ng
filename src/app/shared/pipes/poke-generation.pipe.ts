import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pokeGeneration'
})
export class PokeGenerationPipe implements PipeTransform {

  transform(id: number, ...args: unknown[]): number {
    if (id < 1) {
      return -1;
    } else if (id < 152) {
      return 1;
    } else if (id <= 252) {
      return 2;
    } else if (id <= 387) {
      return 3;
    } else if (id <= 494) {
      return 4;
    } else if (id <= 650) {
      return 5;
    } else if (id <= 722) {
      return 6;
    } else if (id <= 810) {
      return 7;
    } else if (id <= 896) {
      return 8;
    } else {
      return -1;
    }
  }

}
