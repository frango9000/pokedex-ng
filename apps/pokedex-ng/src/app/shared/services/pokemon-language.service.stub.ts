import { of } from 'rxjs';
import { PokemonLanguageService } from './pokemon-language.service';

export class StubPokemonLanguageService implements Partial<PokemonLanguageService> {
  getDisplayLanguage$ = () => of(null);
}

export const stubPokemonLanguageServiceProvider = {
  provide: PokemonLanguageService,
  useFactory: () => new StubPokemonLanguageService(),
};
