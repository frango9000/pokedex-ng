import { of } from 'rxjs';
import generation from './data/generation.json';
import item from './data/item.json';
import language from './data/language.json';
import move from './data/move.json';
import pokemon from './data/pokemon.json';
import type from './data/type.json';
import version from './data/version-group.json';

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

export function getAllGenerations() {
  return of(generation);
}
