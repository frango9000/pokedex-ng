import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocalizedName, MergingMap } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import {
  EncounterCondition,
  PxEncounterCondition,
} from '../../../../../../../libs/domain/src/lib/encounters/encounters';
import { MultiTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class EncounterConditionService extends MultiTranslatedService<EncounterCondition, PxEncounterCondition> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('encounter-condition', http, translocoService, languageService);
  }

  protected _parseAllTranslations(encounterConditions: PxEncounterCondition[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources<PxEncounterCondition, LocalizedName>(
        encounterConditions,
        'names',
        (encounterCondition, name) => ({
          key: name.language,
          object: { ENCOUNTER: { CONDITION: { [encounterCondition.name]: { NAME: name.name } } } },
        })
      )
    );
  }
}
