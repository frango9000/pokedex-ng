import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  LocalizedDescription,
  LocalizedName,
  MergingMap,
  MoveLearnMethod,
  PxMoveLearnMethod,
} from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { FullyTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class MoveLearnMethodService extends FullyTranslatedService<MoveLearnMethod, PxMoveLearnMethod> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('move-learn-method', http, translateService, languageService);
  }

  protected _parseOneTranslation(learnMethod: MoveLearnMethod): Observable<MergingMap> {
    return of(
      MergingMap.mergeMaps([
        MergingMap.ofSingleResource(learnMethod.names, (name) => ({
          key: name.language.name,
          object: { MOVE: { LEARN_METHOD: { [learnMethod.name]: { NAME: name.name } } } },
        })),
        MergingMap.ofSingleResource(learnMethod.descriptions, (description) => ({
          key: description.language.name,
          object: { MOVE: { LEARN_METHOD: { [learnMethod.name]: { DESCRIPTION: description.description } } } },
        })),
      ])
    );
  }

  protected _parseAllTranslations(learnMethods: PxMoveLearnMethod[]): Observable<MergingMap> {
    return of(
      MergingMap.mergeMaps([
        MergingMap.ofMultipleResources<PxMoveLearnMethod, LocalizedName>(
          learnMethods,
          'names',
          (learnMethod, name) => ({
            key: name.language,
            object: { MOVE: { LEARN_METHOD: { [learnMethod.name]: { NAME: name.name } } } },
          })
        ),
        MergingMap.ofMultipleResources<PxMoveLearnMethod, LocalizedDescription>(
          learnMethods,
          'descriptions',
          (learnMethod, description) => ({
            key: description.language,
            object: { MOVE: { LEARN_METHOD: { [learnMethod.name]: { DESCRIPTION: description.description } } } },
          })
        ),
      ])
    );
  }
}
