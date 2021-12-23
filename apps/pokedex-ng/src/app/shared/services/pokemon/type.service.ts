import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MergingMap, PokemonType, PxType } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { MultiTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class TypeService extends MultiTranslatedService<PokemonType, PxType> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('type', http, translocoService, languageService);
  }

  protected _parseAllTranslations(resources: PxType[]): Observable<MergingMap> {
    const map = new MergingMap();
    resources.forEach((type) =>
      type.names.forEach((name) => map.merge(name.language, { TYPE: { [type.name]: { NAME: name.name } } }))
    );
    return of(map);
  }
}
