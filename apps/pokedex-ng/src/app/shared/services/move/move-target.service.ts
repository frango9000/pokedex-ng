import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MergingMap, MoveTarget } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class MoveTargetService extends SingleTranslatedService<MoveTarget> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('move-target', http, translocoService, languageService);
  }

  protected _parseOneTranslation(target: MoveTarget): Observable<MergingMap> {
    return of(
      MergingMap.mergeMaps([
        MergingMap.ofSingleResource(target.names, (name) => ({
          key: name.language.name,
          object: { MOVE: { TARGET: { [target.name]: { NAME: name.name } } } },
        })),
        MergingMap.ofSingleResource(target.descriptions, (description) => ({
          key: description.language.name,
          object: { MOVE: { TARGET: { [target.name]: { DESCRIPTION: description.description } } } },
        })),
      ])
    );
  }
}
