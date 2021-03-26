import { Injectable } from '@angular/core';
import { MultiTranslatedService } from '../base-service';
import { ItemCategory, LocalizedName, MergingMap, PxItemCategory } from '@pokedex-ng/domain';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../game/language.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemCategoryService extends MultiTranslatedService<ItemCategory, PxItemCategory> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('item-category', http, translateService, languageService);
  }

  protected _parseAllTranslations(itemCategories: PxItemCategory[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources<PxItemCategory, LocalizedName>(itemCategories, 'names', (itemCategory, name) => ({
        key: name.language,
        object: { ITEM: { CATEGORY: { [itemCategory.name]: { NAME: name.name } } } },
      }))
    );
  }
}
