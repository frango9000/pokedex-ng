import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeTypeColor',
})
export class PokeTypeColorPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'normal':
        return '#9C9C63';
      case 'fighting':
        return '#AE2A24';
      case 'flying':
        return '#8E6FEB';
      case 'poison':
        return '#923A92';
      case 'ground':
        return '#DBB54D';
      case 'rock':
        return '#A48F32';
      case 'bug':
        return '#97A51D';
      case 'ghost':
        return '#644E88';
      case 'steel':
        return '#A0A0C0';
      case 'fire':
        return '#ED6D12';
      case 'water':
        return '#4578ED';
      case 'grass':
        return '#69C23D';
      case 'electric':
        return '#F6C913';
      case 'psychic':
        return '#F73670';
      case 'ice':
        return '#7ECECE';
      case 'dragon':
        return '#5D1EF7';
      case 'dark':
        return '#644e40';
      case 'fairy':
        return '#E87890';
      case 'unknown':
        return '#888';
      case 'shadow':
        return '#444';
    }
  }
}
