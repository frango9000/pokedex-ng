import { of } from 'rxjs';
import item from './item.json';
import language from './language.json';
import move from './move.json';
import pokemon from './pokemon.json';
import type from './type.json';
import version from './version-group.json';

export function getAllPokemon() {
  return of(pokemon);
}

export function getAllLanguages() {
  return of(language);
}

export function getAllMoves() {
  return of(move);
}

export function getAllTypes() {
  return of(type);
}

export function getAllVersionGroups() {
  return of(version);
}

export function getAllItems() {
  return of(item);
}
