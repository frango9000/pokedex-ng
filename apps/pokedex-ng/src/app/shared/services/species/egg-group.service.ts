import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { EggGroup, MergingMap } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class EggGroupService extends SingleTranslatedService<EggGroup> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('egg-group', http, translocoService, languageService);
  }

  protected _parseOneTranslation(eggGroup: EggGroup): Observable<MergingMap> {
    return of(
      MergingMap.ofSingleResource(eggGroup.names, (name) => ({
        key: name.language.name,
        object: { SPECIES: { EGG_GROUP: { [eggGroup.name]: name.name } } },
      }))
    );
  }
}
