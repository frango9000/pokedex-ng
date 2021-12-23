import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MergingMap, Move, PxMove } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { FilterService } from '../app/filter.service';
import { FullyTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';
import { VersionGroupService } from '../game/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class MoveService extends FullyTranslatedService<Move, PxMove> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService,
    private versionGroupService: VersionGroupService,
    private filterService: FilterService
  ) {
    super('move', http, translocoService, languageService);
  }

  getAllFiltered(): Observable<PxMove[]> {
    return this.getAll().pipe(
      map((list: PxMove[]) => this.filterService.filterByGeneration(list)),
      map((list: PxMove[]) => this.filterService.filterByType(list)),
      map((list: PxMove[]) => this.filterService.filterByLocalizedName(list))
    );
  }

  protected _parseAllTranslations(moves: PxMove[]): Observable<MergingMap> {
    const translations = new MergingMap();
    moves.forEach((move) =>
      move.names.forEach((name) => translations.merge(name.language, { MOVE: { [move.name]: { NAME: name.name } } }))
    );
    return of(translations);
  }

  protected _parseOneTranslation(move: Move): Observable<MergingMap> {
    return this.versionGroupService.getAll().pipe(
      take(1),
      map((versions) => {
        const translations = new MergingMap();
        move.effect_entries.forEach((entry) => {
          translations.merge(entry.language.name, {
            MOVE: { [move.name]: { EFFECT_ENTRY: { SHORT: entry.short_effect, EFFECT: entry.effect } } },
          });
        });
        const defaultFlavorText =
          move.flavor_text_entries.find((value) => value.language.name === 'en')?.flavor_text ||
          'MOVE_TRANSLATE_ERROR_001';
        versions.forEach((versionGroup) => {
          translations.merge('en', {
            MOVE: { [move.name]: { FLAVOR_TEXT: { [versionGroup.name]: defaultFlavorText } } },
          });
        });
        move.flavor_text_entries.forEach((entry) => {
          translations.merge(entry.language.name, {
            MOVE: { [move.name]: { FLAVOR_TEXT: { [entry.version_group.name]: entry.flavor_text } } },
          });
        });
        return translations;
      })
    );
  }
}
