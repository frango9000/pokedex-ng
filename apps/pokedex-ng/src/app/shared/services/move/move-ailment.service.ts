import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MergingMap, MoveAilment } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class MoveAilmentService extends SingleTranslatedService<MoveAilment> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('move-ailment', http, translateService, languageService);
  }

  protected _parseOneTranslation(ailment: MoveAilment): Observable<MergingMap> {
    return of(
      MergingMap.ofSingleResource(ailment.names, (name) => ({
        key: name.language.name,
        object: { MOVE: { AILMENT: { [ailment.name]: name.name } } },
      }))
    );
  }
}
