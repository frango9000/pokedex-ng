import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MergingMap, PokemonLocation } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService extends SingleTranslatedService<PokemonLocation> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('location', http, translocoService, languageService);
  }

  protected _parseOneTranslation(location: PokemonLocation): Observable<MergingMap> {
    return of(
      MergingMap.ofSingleResource(location.names, (name) => ({
        key: name.language.name,
        object: { LOCATION: { [location.name]: { NAME: name.name } } },
      }))
    );
  }
}
