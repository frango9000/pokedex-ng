import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman',
})
export class RomanPipe implements PipeTransform {
  transform(num: number, ...args: unknown[]): string {
    const lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let roman = '';

    for (const i of Object.keys(lookup)) {
      const q = Math.floor(num / lookup[i]);
      num -= q * lookup[i];
      roman += i.repeat(q);
    }
    return roman;
  }
}
