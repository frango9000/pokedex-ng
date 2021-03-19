import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MergingMap, PokemonShape } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonShapeService extends SingleTranslatedService<PokemonShape> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('pokemon-shape', http, translateService, languageService);
  }

  protected _parseOneTranslation(pokemonShape: PokemonShape): Observable<MergingMap> {
    return of(
      MergingMap.mergeMaps([
        MergingMap.ofSingleResource(pokemonShape.names, (name) => ({
          key: name.language.name,
          object: { SPECIES: { SHAPE: { [pokemonShape.name]: { NAME: name.name } } } },
        })),
        MergingMap.ofSingleResource(pokemonShape.awesome_names, (awesome_name) => ({
          key: awesome_name.language.name,
          object: { SPECIES: { SHAPE: { [pokemonShape.name]: { AWESOME_NAME: awesome_name.awesome_name } } } },
        })),
      ])
    );
  }
}
