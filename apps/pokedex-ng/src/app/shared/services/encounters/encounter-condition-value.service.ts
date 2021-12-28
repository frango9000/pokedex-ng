import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocalizedName, MergingMap } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import {
  EncounterConditionValue,
  PxEncounterConditionValue,
} from '../../../../../../../libs/domain/src/lib/encounters/encounters';
import { MultiTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class EncounterConditionValueService extends MultiTranslatedService<
  EncounterConditionValue,
  PxEncounterConditionValue
> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('encounter-condition-value', http, translocoService, languageService);
  }

  protected _parseAllTranslations(encounterConditionValues: PxEncounterConditionValue[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources<PxEncounterConditionValue, LocalizedName>(
        encounterConditionValues,
        'names',
        (encounterConditionValue, name) => ({
          key: name.language,
          object: {
            ENCOUNTER: {
              CONDITION_VALUE: {
                [encounterConditionValue.name]: {
                  NAME: name.name,
                  CONDITION: encounterConditionValue.condition,
                },
              },
            },
          },
        })
      )
    );
  }
}
