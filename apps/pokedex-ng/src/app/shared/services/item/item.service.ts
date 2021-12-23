import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Item, LocalizedName, MergingMap, PxItem } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { FilterService } from '../app/filter.service';
import { FullyTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';
import { VersionGroupService } from '../game/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends FullyTranslatedService<Item, PxItem> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService,
    private filterService: FilterService,
    private versionGroupService: VersionGroupService
  ) {
    super('item', http, translocoService, languageService);
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
    return this.versionGroupService.getAll().pipe(
      take(1),
      map((versions) => {
        const translations = new MergingMap();
        item.effect_entries.forEach((entry) => {
          translations.merge(entry.language.name, {
            ITEM: { [item.name]: { EFFECT_ENTRY: { SHORT: entry.short_effect, EFFECT: entry.effect } } },
          });
        });
        const defaultFlavorText =
          item.flavor_text_entries.find((value) => value.language.name === 'en')?.text || 'ITEM_TRANSLATE_ERROR_001';
        versions.forEach((versionGroup) => {
          translations.merge('en', {
            ITEM: { [item.name]: { FLAVOR_TEXT: { [versionGroup.name]: defaultFlavorText } } },
          });
        });
        item.flavor_text_entries.forEach((entry) => {
          translations.merge(entry.language.name, {
            ITEM: { [item.name]: { FLAVOR_TEXT: { [entry.version_group.name]: entry.text } } },
          });
        });
        return translations;
      })
    );
  }
}
