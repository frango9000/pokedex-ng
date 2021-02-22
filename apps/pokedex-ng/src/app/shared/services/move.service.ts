import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Move, NamedApiMove, NamedApiResource } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, skip, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';
import { GameVersionService } from './game-version.service';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class MoveService {
  private moves$ = new BehaviorSubject<NamedApiMove[]>([]);

  constructor(
    private httpClient: HttpClient,
    private translateService: TranslateService,
    private pokemonVersionService: GameVersionService,
    private languageService: LanguageService
  ) {
    this._fetchAllMoves().subscribe((moves) => {
      this.moves$.next(moves);
    });
  }

  getAllMoves(): Observable<NamedApiMove[]> {
    return this.moves$.asObservable();
  }

  fetchApiOneMove(moveId: string | number): Observable<Move> {
    return this.httpClient.get<Move>(environment.apiUrl + '/move/' + moveId).pipe(
      tap(serviceLog),
      shareReplay(),
      tap((move) => {
        this.parseTranslation(move);
      })
    );
  }

  private _fetchAllMoves(): Observable<NamedApiMove[]> {
    return this.httpClient.get<NamedApiMove[]>(environment.baseHref + '/assets/data/move.json').pipe(take(1));
  }

  private _fetchApiAllMoves(): Observable<NamedApiResource[]> {
    const pageParams: HttpParams = new HttpParams().append('limit', String(1000));
    return this.httpClient.get(environment.apiUrl + '/move/', { params: pageParams }).pipe(
      tap(serviceLog),
      shareReplay(),
      map((value) => value.results)
    );
  }

  parseTranslations() {
    this.moves$.pipe(skip(1)).subscribe((value) => {
      this.languageService.getAvailableLanguageIds$().subscribe((languages) => {
        value.forEach((move) => {
          move.names
            .filter((localizedName) => languages.includes(localizedName.language))
            .forEach((name) => {
              this.translateService.setTranslation(name.language, { MOVE: { [move.name]: { NAME: name.name } } }, true);
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
      this.pokemonVersionService.getAllVersionGroups$().subscribe((versions) => {
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
