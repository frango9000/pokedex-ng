import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MergingMap, Species } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';
import { VersionGroupService } from '../game/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService extends SingleTranslatedService<Species> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService,
    private pokemonVersionService: VersionGroupService
  ) {
    super('pokemon-species', http, translateService, languageService);
  }

  protected _parseOneTranslation(specie: Species): Observable<MergingMap> {
    return this.pokemonVersionService.getAll().pipe(
      take(1),
      map((versions) => {
        const translations = new MergingMap();
        specie.genera.forEach((name) =>
          translations.merge(name.language.name, { SPECIES: { [specie.name]: { GENERA: name.genus } } })
        );
        const defaultFlavorText =
          specie.flavor_text_entries.find((value) => value.language.name === 'en')?.flavor_text ||
          'SPECIE_TRANSLATE_ERROR_001';
        versions.forEach((versionGroup) => {
          translations.merge('en', {
            SPECIE: { [specie.name]: { FLAVOR_TEXT: { [versionGroup.name]: defaultFlavorText } } },
          });
        });
        specie.flavor_text_entries.forEach((entry) => {
          const groupIndex = versions.findIndex((value) => value.name.includes(entry.version.name));
          if (groupIndex > -1) {
            translations.merge(entry.language.name, {
              SPECIES: { [specie.name]: { FLAVOR_TEXT: { [versions[groupIndex].name]: entry.flavor_text } } },
            });
          }
        });
        return translations;
      })
    );
  }
}
