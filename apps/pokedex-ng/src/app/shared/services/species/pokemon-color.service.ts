import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MergingMap, PokemonColor } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonColorService extends SingleTranslatedService<PokemonColor> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('pokemon-color', http, translocoService, languageService);
  }

  protected _parseOneTranslation(pokemonColor: PokemonColor): Observable<MergingMap> {
    return of(
      MergingMap.ofSingleResource(pokemonColor.names, (name) => ({
        key: name.language.name,
        object: { SPECIES: { COLOR: { [pokemonColor.name]: name.name } } },
      }))
    );
  }
}
