import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MergingMap, MoveCategory } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class MoveCategoryService extends SingleTranslatedService<MoveCategory> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('move-category', http, translateService, languageService);
  }

  protected _parseOneTranslation(category: MoveCategory): Observable<MergingMap> {
    return of(
      MergingMap.ofSingleResource(category.descriptions, (description) => ({
        key: description.language.name,
        object: {
          MOVE: { CATEGORY: { [category.name]: description.description } },
        },
      }))
    );
  }
}
