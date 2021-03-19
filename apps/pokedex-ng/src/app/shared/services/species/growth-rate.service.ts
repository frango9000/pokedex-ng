import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GrowthRate, MergingMap } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class GrowthRateService extends SingleTranslatedService<GrowthRate> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('growth-rate', http, translateService, languageService);
  }

  protected _parseOneTranslation(growthRate: GrowthRate): Observable<MergingMap> {
    return of(
      MergingMap.ofSingleResource(growthRate.descriptions, (description) => ({
        key: description.language.name,
        object: { SPECIES: { GROWTH_RATE: { [growthRate.name]: description.description } } },
      }))
    );
  }
}
