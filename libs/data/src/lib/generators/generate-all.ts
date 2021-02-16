import {
  PokemonGenerator,
  PokemonItemGenerator,
  PokemonLanguageGenerator,
  PokemonMovesGenerator,
  PokemonTypeGenerator,
  PokemonVersionGenerator,
} from './generators';

new PokemonGenerator().generateResource();
new PokemonMovesGenerator().generateResource();
new PokemonVersionGenerator().generateResource();
new PokemonLanguageGenerator().generateResource();
new PokemonTypeGenerator().generateResource();
new PokemonItemGenerator().generateResource();
