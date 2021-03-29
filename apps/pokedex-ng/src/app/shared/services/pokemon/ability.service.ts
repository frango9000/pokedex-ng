import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Ability, MergingMap, PxAbility } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { FullyTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';
import { VersionGroupService } from '../game/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class AbilityService extends FullyTranslatedService<Ability, PxAbility> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService,
    private versionService: VersionGroupService
  ) {
    super('ability', http, translateService, languageService);
  }

  protected _parseAllTranslations(resources: PxAbility[]): Observable<MergingMap> {
    const translations = new MergingMap();
    resources.forEach((ability) =>
      ability.names.forEach((name) =>
        translations.merge(name.language, { ABILITY: { [ability.name]: { NAME: name.name } } })
      )
    );
    return of(translations);
  }

  protected _parseOneTranslation(ability: Ability): Observable<MergingMap> {
    return this.versionService.getAll().pipe(
      take(1),
      map((versions) => {
        const translations = new MergingMap();
        ability.effect_entries.forEach((entry) => {
          translations.merge(entry.language.name, {
            ABILITY: { [ability.name]: { EFFECT_ENTRY: { SHORT: entry.short_effect, EFFECT: entry.effect } } },
          });
        });
        const defaultFlavorText =
          ability.flavor_text_entries.find((value) => value.language.name === 'en')?.flavor_text ||
          'ABILITY_TRANSLATE_ERROR_001';
        versions.forEach((versionGroup) => {
          translations.merge('en', {
            ABILITY: { [ability.name]: { FLAVOR_TEXT: { [versionGroup.name]: defaultFlavorText } } },
          });
        });
        ability.flavor_text_entries.forEach((entry) => {
          translations.merge(entry.language.name, {
            ABILITY: { [ability.name]: { FLAVOR_TEXT: { [entry.version_group.name]: entry.flavor_text } } },
          });
        });
        return translations;
      })
    );
  }
}
