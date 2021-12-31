import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import {
  LocalizedDescription,
  LocalizedName,
  MergingMap,
  MoveDamageClass,
  PxMoveDamageClass,
} from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { MultiTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class MoveDamageClassService extends MultiTranslatedService<MoveDamageClass, PxMoveDamageClass> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('move-damage-class', http, translocoService, languageService);
  }

  protected _parseAllTranslations(moveDamageClasses: PxMoveDamageClass[]): Observable<MergingMap> {
    return of(
      MergingMap.mergeMaps([
        MergingMap.ofMultipleResources<PxMoveDamageClass, LocalizedName>(
          moveDamageClasses,
          'names',
          (moveDamageClass, name) => ({
            key: name.language,
            object: { MOVE: { DAMAGE_CLASS: { [moveDamageClass.name]: { NAME: name.name } } } },
          })
        ),
        MergingMap.ofMultipleResources<PxMoveDamageClass, LocalizedDescription>(
          moveDamageClasses,
          'descriptions',
          (moveDamageClass, description) => ({
            key: description.language,
            object: { MOVE: { DAMAGE_CLASS: { [moveDamageClass.name]: { DESCRIPTION: description.description } } } },
          })
        ),
      ])
    );
  }
}
