import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ItemCategory, LocalizedName, MergingMap, PxItemCategory } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { MultiTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class ItemCategoryService extends MultiTranslatedService<ItemCategory, PxItemCategory> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('item-category', http, translocoService, languageService);
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
