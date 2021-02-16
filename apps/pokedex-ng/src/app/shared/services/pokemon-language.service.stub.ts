import { PokemonLanguageService } from './pokemon-language.service';

export class PokemonLanguageStubService implements Partial<PokemonLanguageService> {}

export const pokemonLanguageStubServiceProvider = {
  provide: PokemonLanguageService,
  useFactory: () => new PokemonLanguageStubService(),
};
