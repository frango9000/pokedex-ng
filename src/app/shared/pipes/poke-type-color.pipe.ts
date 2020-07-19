import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pokeTypeColor'
})
export class PokeTypeColorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'grass':
        return '#69C23D';
      case 'poison':
        return '#923A92';
    }
  }

}
