import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeTypeColor',
})
export class PokeTypeColorPipe implements PipeTransform {
  transform(type: string, inverted = false, mixWithType: string = ''): string {
    let color = this.getTypeColor(type);
    if (mixWithType?.length) {
      const mixColor = this.getTypeColor(mixWithType);
      color = this.blendColors(color, mixColor);
    }
    return !inverted ? color : this.invertColor(color);
  }

  invertColor(hex) {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    // invert color components
    const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + this.padZero(r) + this.padZero(g) + this.padZero(b);
  }

  padZero(str, len?) {
    len = len || 2;
    const zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }

  blendColors(colorA, colorB, amount = 0.5) {
    const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
    const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
    const r = Math.round(rA + (rB - rA) * amount)
      .toString(16)
      .padStart(2, '0');
    const g = Math.round(gA + (gB - gA) * amount)
      .toString(16)
      .padStart(2, '0');
    const b = Math.round(bA + (bB - bA) * amount)
      .toString(16)
      .padStart(2, '0');
    return '#' + r + g + b;
  }

  getTypeColor(type: string) {
    let color = '#000';
    switch (type) {
      case 'normal':
        color = '#9C9C63';
        break;
      case 'fighting':
        color = '#AE2A24';
        break;
      case 'flying':
        color = '#8E6FEB';
        break;
      case 'poison':
        color = '#923A92';
        break;
      case 'ground':
        color = '#DBB54D';
        break;
      case 'rock':
        color = '#A48F32';
        break;
      case 'bug':
        color = '#97A51D';
        break;
      case 'ghost':
        color = '#644E88';
        break;
      case 'steel':
        color = '#A0A0C0';
        break;
      case 'fire':
        color = '#ED6D12';
        break;
      case 'water':
        color = '#4578ED';
        break;
      case 'grass':
        color = '#69C23D';
        break;
      case 'electric':
        color = '#F6C913';
        break;
      case 'psychic':
        color = '#F73670';
        break;
      case 'ice':
        color = '#7ECECE';
        break;
      case 'dragon':
        color = '#5D1EF7';
        break;
      case 'dark':
        color = '#644e40';
        break;
      case 'fairy':
        color = '#E87890';
        break;
      case 'unknown':
        color = '#888';
        break;
      case 'shadow':
        color = '#444';
        break;
      default:
        break;
    }
    return color;
  }
}
