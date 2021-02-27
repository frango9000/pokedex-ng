import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Ability, PxAbility } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, skip, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';
import { GameVersionService } from './game-version.service';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class AbilityService {
  private abilities$ = new BehaviorSubject<PxAbility[]>([]);

  constructor(
    private httpClient: HttpClient,
    private translateService: TranslateService,
    private languageService: LanguageService,
    private versionService: GameVersionService
  ) {
    this._fetchAllAbilities().subscribe((abilities) => {
      this.abilities$.next(abilities);
    });
  }

  getAllMoves(): Observable<PxAbility[]> {
    return this.abilities$.asObservable();
  }

  private _fetchAllAbilities(): Observable<PxAbility[]> {
    return this.httpClient.get<PxAbility[]>(environment.baseHref + '/assets/data/ability.json').pipe(take(1));
  }

  fetchApiOneAbility(abilityId: string | number): Observable<Ability> {
    return this.httpClient.get<Ability>(environment.apiUrl + '/ability/' + abilityId).pipe(
      take(1),
      tap(serviceLog),
      tap((ability) => this.parseTranslation(ability))
    );
  }

  parseTranslations() {
    this.abilities$.pipe(skip(1)).subscribe((value) => {
      this.languageService
        .getAvailableLanguages$()
        .pipe(map((namedLanguages) => namedLanguages.map((language) => language.name)))
        .subscribe((languages) => {
          value.forEach((ability) => {
            ability.names
              .filter((localizedName) => languages.includes(localizedName.language))
              .forEach((name) => {
                this.translateService.setTranslation(
                  name.language,
                  { ABILITY: { [ability.name]: { NAME: name.name } } },
                  true
                );
              });
          });
          this.languageService.refresh();
        });
    });
  }

  private parseTranslation(ability: Ability): void {
    this.languageService
      .getAvailableLanguages$()
      .pipe(map((namedLanguages) => namedLanguages.map((language) => language.name)))
      .subscribe((languages) => {
        ability.effect_entries
          .filter((effect) => languages.includes(effect.language.name))
          .forEach((entry) => {
            this.translateService.setTranslation(
              entry.language.name,
              {
                ABILITY: {
                  [ability.name]: {
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
        const defaultFlavorTextIndex = ability.flavor_text_entries.findIndex((value) => value.language.name === 'en');
        const defaultFlavorText =
          defaultFlavorTextIndex > -1
            ? ability.flavor_text_entries[defaultFlavorTextIndex].flavor_text
            : 'ABILITY_TRANSLATE_ERROR_001';
        this.versionService.getAllVersionGroups$().subscribe((versions) => {
          languages.forEach((language) => {
            const langDefaultFlavorTextIndex = ability.flavor_text_entries.findIndex(
              (value) => value.language.name === language
            );
            const langDefaultFlavorText =
              langDefaultFlavorTextIndex > -1
                ? ability.flavor_text_entries[langDefaultFlavorTextIndex].flavor_text
                : 'ABILITY_TRANSLATE_ERROR_002';
            versions.forEach((versionGroup) => {
              this.translateService.setTranslation(
                language,
                {
                  ABILITY: {
                    [ability.name]: {
                      FLAVOR_TEXT: {
                        [versionGroup.name]:
                          langDefaultFlavorTextIndex > -1 ? langDefaultFlavorText : defaultFlavorText,
                      },
                    },
                  },
                },
                true
              );
            });
          });
        });
        ability.flavor_text_entries
          .filter((effect) => languages.includes(effect.language.name))
          .forEach((entry) => {
            this.translateService.setTranslation(
              entry.language.name,
              {
                ABILITY: {
                  [ability.name]: {
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
