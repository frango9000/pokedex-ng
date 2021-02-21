import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Species } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';
import { GameVersionService } from './game-version.service';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  constructor(
    private httpClient: HttpClient,
    private translateService: TranslateService,
    private pokemonVersionService: GameVersionService,
    private languageService: LanguageService
  ) {}

  fetchApiOneSpecies(speciesId: string | number): Observable<Species> {
    return this.httpClient.get<Species>(environment.apiUrl + '/pokemon-species/' + speciesId).pipe(
      tap(serviceLog),
      shareReplay(),
      tap((species) => {
        this.parseTranslation(species);
      })
    );
  }

  private parseTranslation(specie: Species): void {
    this.languageService.getAvailableLanguageIds$().subscribe((languages) => {
      specie.genera
        .filter((effect) => languages.includes(effect.language.name))
        .forEach((name) => {
          this.translateService.setTranslation(
            name.language.name,
            { SPECIES: { [specie.name]: { GENERA: name.genus } } },
            true
          );
        });
      const defaultFlavorTextIndex = specie.flavor_text_entries.findIndex((value) => value.language.name === 'en');
      const defaultFlavorText =
        defaultFlavorTextIndex > -1
          ? specie.flavor_text_entries[defaultFlavorTextIndex].flavor_text
          : 'SPECIES_TRANSLATE_ERROR_001';
      this.pokemonVersionService.getAllVersionGroups().subscribe((versions) => {
        languages.forEach((language) => {
          const langDefaultFlavorTextIndex = specie.flavor_text_entries.findIndex(
            (value) => value.language.name === language
          );
          const langDefaultFlavorText =
            langDefaultFlavorTextIndex > -1
              ? specie.flavor_text_entries[langDefaultFlavorTextIndex].flavor_text
              : 'SPECIES_TRANSLATE_ERROR_002';
          versions.forEach((version) => {
            this.translateService.setTranslation(
              language,
              {
                SPECIES: {
                  [specie.name]: {
                    FLAVOR_TEXT: {
                      [version.name]: langDefaultFlavorTextIndex > -1 ? langDefaultFlavorText : defaultFlavorText,
                    },
                  },
                },
              },
              true
            );
          });
        });
        specie.flavor_text_entries
          .filter((effect) => languages.includes(effect.language.name))
          .forEach((entry) => {
            const groupIndex = versions.findIndex((value) => value.name.includes(entry.version.name));
            this.translateService.setTranslation(
              entry.language.name,
              {
                SPECIES: {
                  [specie.name]: {
                    FLAVOR_TEXT: {
                      [versions[groupIndex].name]: entry.flavor_text,
                    },
                  },
                },
              },
              true
            );
          });
      });
      this.languageService.refresh();
    });
  }
}
