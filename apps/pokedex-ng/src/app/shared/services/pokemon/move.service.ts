import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MergingMap, Move, PxMove } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';
import { FullyTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';
import { VersionGroupService } from '../game/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class MoveService extends FullyTranslatedService<Move, PxMove> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService,
    private versionGroupService: VersionGroupService
  ) {
    super('move', http, translateService, languageService);
  }

  protected _parseAllTranslations(moves: PxMove[]): Observable<MergingMap> {
    const translations = new MergingMap();
    moves.forEach((move) =>
      move.names.forEach((name) => translations.merge(name.language, { MOVE: { [move.name]: { NAME: name.name } } }))
    );
    return of(translations);
  }

  protected _parseOneTranslation(move: Move): Observable<MergingMap> {
    return this.languageService.getAllIds$().pipe(
      take(1),
      mergeMap((languages) =>
        this.versionGroupService.getAll().pipe(
          take(1),
          map((versions) => {
            const translations = new MergingMap();
            move.effect_entries.forEach((entry) => {
              translations.merge(entry.language.name, {
                MOVE: { [move.name]: { EFFECT_ENTRY: { SHORT: entry.short_effect, EFFECT: entry.effect } } },
              });
            });
            const defaultFlavorTextIndex = move.flavor_text_entries.findIndex((value) => value.language.name === 'en');
            const defaultFlavorText =
              defaultFlavorTextIndex > -1
                ? move.flavor_text_entries[defaultFlavorTextIndex].flavor_text
                : 'MOVE_TRANSLATE_ERROR_001';
            languages.forEach((language) => {
              const langDefaultFlavorTextIndex = move.flavor_text_entries.findIndex(
                (value) => value.language.name === language
              );
              const langDefaultFlavorText =
                langDefaultFlavorTextIndex > -1
                  ? move.flavor_text_entries[langDefaultFlavorTextIndex].flavor_text
                  : 'MOVE_TRANSLATE_ERROR_002';
              versions.forEach((versionGroup) => {
                const flavorText = langDefaultFlavorTextIndex > -1 ? langDefaultFlavorText : defaultFlavorText;
                translations.merge(language, {
                  MOVE: { [move.name]: { FLAVOR_TEXT: { [versionGroup.name]: flavorText } } },
                });
              });
            });
            move.flavor_text_entries.forEach((entry) => {
              translations.merge(entry.language.name, {
                MOVE: {
                  [move.name]: {
                    FLAVOR_TEXT: { [entry.version_group.name]: entry.flavor_text },
                  },
                },
              });
            });
            return translations;
          })
        )
      )
    );
  }
}
