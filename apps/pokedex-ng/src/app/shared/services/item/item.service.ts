import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Item, LocalizedName, MergingMap, PxItem } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { FullyTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';
import { map, mergeMap, take } from 'rxjs/operators';
import { FilterService } from '../app/filter.service';
import { VersionGroupService } from '../game/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends FullyTranslatedService<Item, PxItem> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService,
    private filterService: FilterService,
    private versionGroupService: VersionGroupService
  ) {
    super('item', http, translateService, languageService);
  }

  getAllFiltered(): Observable<PxItem[]> {
    return this.getAll().pipe(
      map((list: PxItem[]) => this.filterService.filterByItemPocket(list)),
      map((list: PxItem[]) => this.filterService.filterByItemCategory(list)),
      map((list: PxItem[]) => this.filterService.filterByLocalizedName(list))
    );
  }

  protected _parseAllTranslations(items: PxItem[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources<PxItem, LocalizedName>(items, 'names', (item, name) => ({
        key: name.language,
        object: { ITEM: { [item.name]: { NAME: name.name } } },
      }))
    );
  }

  protected _parseOneTranslation(item: Item): Observable<MergingMap> {
    return this.languageService.getAllIds$().pipe(
      take(1),
      mergeMap((languages) =>
        this.versionGroupService.getAll().pipe(
          take(1),
          map((versions) => {
            const translations = new MergingMap();
            item.effect_entries.forEach((entry) => {
              translations.merge(entry.language.name, {
                ITEM: { [item.name]: { EFFECT_ENTRY: { SHORT: entry.short_effect, EFFECT: entry.effect } } },
              });
            });
            const defaultFlavorTextIndex = item.flavor_text_entries.findIndex((value) => value.language.name === 'en');
            const defaultFlavorText =
              defaultFlavorTextIndex > -1
                ? item.flavor_text_entries[defaultFlavorTextIndex].flavor_text
                : 'ITEM_TRANSLATE_ERROR_001';
            languages.forEach((language) => {
              const langDefaultFlavorTextIndex = item.flavor_text_entries.findIndex(
                (value) => value.language.name === language
              );
              const langDefaultFlavorText =
                langDefaultFlavorTextIndex > -1
                  ? item.flavor_text_entries[langDefaultFlavorTextIndex].flavor_text
                  : 'ITEM_TRANSLATE_ERROR_002';
              versions.forEach((versionGroup) => {
                const flavorText = langDefaultFlavorTextIndex > -1 ? langDefaultFlavorText : defaultFlavorText;
                translations.merge(language, {
                  ITEM: { [item.name]: { FLAVOR_TEXT: { [versionGroup.name]: flavorText } } },
                });
              });
            });
            item.flavor_text_entries.forEach((entry) => {
              translations.merge(entry.language.name, {
                ITEM: { [item.name]: { FLAVOR_TEXT: { [entry.version_group.name]: entry.flavor_text } } },
              });
            });
            return translations;
          })
        )
      )
    );
  }
}
