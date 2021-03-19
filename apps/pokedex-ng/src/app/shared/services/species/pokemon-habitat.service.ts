import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MergingMap, PokemonHabitat } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonHabitatService extends SingleTranslatedService<PokemonHabitat> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('pokemon-habitat', http, translateService, languageService);
  }

  protected _parseOneTranslation(pokemonHabitat: PokemonHabitat): Observable<MergingMap> {
    return of(
      MergingMap.ofSingleResource(pokemonHabitat.names, (name) => ({
        key: name.language.name,
        object: { SPECIES: { HABITAT: { [pokemonHabitat.name]: name.name } } },
      }))
    );
  }
}
