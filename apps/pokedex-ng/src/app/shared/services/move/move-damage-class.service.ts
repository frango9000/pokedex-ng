import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MergingMap, MoveDamageClass } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class MoveDamageClassService extends SingleTranslatedService<MoveDamageClass> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('move-damage-class', http, translocoService, languageService);
  }

  protected _parseOneTranslation(damageClass: MoveDamageClass): Observable<MergingMap> {
    return of(
      MergingMap.mergeMaps([
        MergingMap.ofSingleResource(damageClass.names, (name) => ({
          key: name.language.name,
          object: { MOVE: { DAMAGE_CLASS: { [damageClass.name]: { NAME: name.name } } } },
        })),
        MergingMap.ofSingleResource(damageClass.descriptions, (description) => ({
          key: description.language.name,
          object: { MOVE: { DAMAGE_CLASS: { [damageClass.name]: { DESCRIPTION: description.description } } } },
        })),
      ])
    );
  }
}
