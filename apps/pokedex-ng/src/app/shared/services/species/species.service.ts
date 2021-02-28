import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Species } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';
import { LanguageService } from '../app/language.service';
import { MergingMap, SingleTranslatedService } from '../base-service';
import { GameVersionService } from '../game/game-version.service';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService extends SingleTranslatedService<Species, Species> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService,
    private pokemonVersionService: GameVersionService
  ) {
    super('pokemon-species', http, translateService, languageService);
  }

  _fetchAll(): Observable<Species[]> {
    return of([]);
  }

  protected _parseOneTranslation(specie: Species): Observable<MergingMap> {
    return this.languageService.getAvailableLanguageIds$().pipe(
      take(1),
      mergeMap((languages) =>
        this.pokemonVersionService.getAllVersionGroups$().pipe(
          take(1),
          map((versions) => {
            const translations = new MergingMap();
            specie.genera.forEach((name) =>
              translations.merge(name.language.name, { SPECIES: { [specie.name]: { GENERA: name.genus } } })
            );
            const defaultFlavorTextIndex = specie.flavor_text_entries.findIndex(
              (value) => value.language.name === 'en'
            );
            const defaultFlavorText =
              defaultFlavorTextIndex > -1
                ? specie.flavor_text_entries[defaultFlavorTextIndex].flavor_text
                : 'SPECIES_TRANSLATE_ERROR_001';
            languages.forEach((language) => {
              const langDefaultFlavorTextIndex = specie.flavor_text_entries.findIndex(
                (value) => value.language.name === language
              );
              const langDefaultFlavorText =
                langDefaultFlavorTextIndex > -1
                  ? specie.flavor_text_entries[langDefaultFlavorTextIndex].flavor_text
                  : 'SPECIES_TRANSLATE_ERROR_002';
              versions.forEach((version) =>
                translations.merge(language, {
                  SPECIES: {
                    [specie.name]: {
                      FLAVOR_TEXT: {
                        [version.name]: langDefaultFlavorTextIndex > -1 ? langDefaultFlavorText : defaultFlavorText,
                      },
                    },
                  },
                })
              );
            });
            specie.flavor_text_entries.forEach((entry) => {
              const groupIndex = versions.findIndex((value) => value.name.includes(entry.version.name));
              if (groupIndex > -1) {
                translations.merge(entry.language.name, {
                  SPECIES: {
                    [specie.name]: {
                      FLAVOR_TEXT: {
                        [versions[groupIndex].name]: entry.flavor_text,
                      },
                    },
                  },
                });
              }
            });
            return translations;
          })
        )
      )
    );
  }
}
