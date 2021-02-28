import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiResourceList, Move, NamedApiResource, PxMove } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, skip, take, tap } from 'rxjs/operators';
import { LanguageService } from '../app/language.service';
import { VersionGroupService } from '../game/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class MoveService {
  private moves$ = new BehaviorSubject<PxMove[]>([]);

  constructor(
    private httpClient: HttpClient,
    private translateService: TranslateService,
    private pokemonVersionService: VersionGroupService,
    private languageService: LanguageService
  ) {
    this._fetchAllMoves().subscribe((moves) => this.moves$.next(moves));
  }

  getAllMoves(): Observable<PxMove[]> {
    return this.moves$.asObservable();
  }

  fetchApiOneMove(moveId: string | number): Observable<Move> {
    return this.httpClient.get<Move>('api/move/' + moveId).pipe(
      take(1),
      tap((move) => this.parseTranslation(move))
    );
  }

  private _fetchAllMoves(): Observable<PxMove[]> {
    return this.httpClient.get<PxMove[]>('pokedex-ng/assets/data/move.json').pipe(take(1));
  }

  private _fetchApiAllMoves(): Observable<NamedApiResource[]> {
    const params: HttpParams = new HttpParams().append('limit', String(1000));
    return this.httpClient
      .get<ApiResourceList>('api/move/', { params })
      .pipe(map((value) => value.results));
  }

  parseTranslations() {
    this.moves$
      .pipe(skip(1))
      .pipe(filter((moves) => !!moves.length))
      .subscribe((value) => {
        this.languageService.getAvailableLanguageIds$().subscribe((languages) => {
          value.forEach((move) => {
            move.names
              .filter((localizedName) => languages.includes(localizedName.language))
              .forEach((name) => {
                this.translateService.setTranslation(
                  name.language,
                  { MOVE: { [move.name]: { NAME: name.name } } },
                  true
                );
              });
          });
          this.languageService.refresh();
        });
      });
  }

  private parseTranslation(move: Move) {
    this.languageService.getAvailableLanguageIds$().subscribe((languages) => {
      move.effect_entries
        .filter((effect) => languages.includes(effect.language.name))
        .forEach((entry) => {
          this.translateService.setTranslation(
            entry.language.name,
            {
              MOVE: {
                [move.name]: {
                  EFFECT_ENTRY: {
                    SHORT: entry.short_effect,
                    EFFECT: entry.effect,
                  },
                },
              },
            },
            true
          );
        });
      const defaultFlavorTextIndex = move.flavor_text_entries.findIndex((value) => value.language.name === 'en');
      const defaultFlavorText =
        defaultFlavorTextIndex > -1
          ? move.flavor_text_entries[defaultFlavorTextIndex].flavor_text
          : 'MOVE_TRANSLATE_ERROR_001';
      this.pokemonVersionService.getAll().subscribe((versions) => {
        languages.forEach((language) => {
          const langDefaultFlavorTextIndex = move.flavor_text_entries.findIndex(
            (value) => value.language.name === language
          );
          const langDefaultFlavorText =
            langDefaultFlavorTextIndex > -1
              ? move.flavor_text_entries[langDefaultFlavorTextIndex].flavor_text
              : 'MOVE_TRANSLATE_ERROR_002';
          versions.forEach((versionGroup) => {
            this.translateService.setTranslation(
              language,
              {
                MOVE: {
                  [move.name]: {
                    FLAVOR_TEXT: {
                      [versionGroup.name]: langDefaultFlavorTextIndex > -1 ? langDefaultFlavorText : defaultFlavorText,
                    },
                  },
                },
              },
              true
            );
          });
        });
      });
      move.flavor_text_entries
        .filter((flavor_text) => languages.includes(flavor_text.language.name))
        .forEach((entry) => {
          this.translateService.setTranslation(
            entry.language.name,
            {
              MOVE: {
                [move.name]: {
                  FLAVOR_TEXT: { [entry.version_group.name]: entry.flavor_text },
                },
              },
            },
            true
          );
        });
      this.languageService.refresh();
    });
  }
}
