import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EvolutionTrigger, MergingMap } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class EvolutionTriggerService extends SingleTranslatedService<EvolutionTrigger> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('evolution-trigger', http, translateService, languageService);
  }

  protected _parseOneTranslation(evolutionTrigger: EvolutionTrigger): Observable<MergingMap> {
    return of(
      MergingMap.ofSingleResource(evolutionTrigger.names, (name) => ({
        key: name.language.name,
        object: { EVOLUTION: { TRIGGER: { [evolutionTrigger.name]: name.name } } },
      }))
    );
  }
}
