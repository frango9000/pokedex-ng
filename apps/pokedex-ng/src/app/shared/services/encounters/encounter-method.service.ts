import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocalizedName, MergingMap } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { EncounterMethod, PxEncounterMethod } from '../../../../../../../libs/domain/src/lib/encounters/encounters';
import { MultiTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class EncounterMethodService extends MultiTranslatedService<EncounterMethod, PxEncounterMethod> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('encounter-method', http, translocoService, languageService);
  }

  protected _parseAllTranslations(encounterMethods: PxEncounterMethod[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources<PxEncounterMethod, LocalizedName>(
        encounterMethods,
        'names',
        (encounterMethod, name) => ({
          key: name.language,
          object: { ENCOUNTER: { METHOD: { [encounterMethod.name]: { NAME: name.name } } } },
        })
      )
    );
  }
}
