import { Injectable } from '@angular/core';
import { MultiTranslatedService } from '../base-service';
import { ItemPocket, LocalizedName, MergingMap, PxItemPocket } from '@pokedex-ng/domain';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../game/language.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemPocketService extends MultiTranslatedService<ItemPocket, PxItemPocket> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('item-pocket', http, translateService, languageService);
  }

  protected _parseAllTranslations(itemCategories: PxItemPocket[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources<PxItemPocket, LocalizedName>(itemCategories, 'names', (itemPocket, name) => ({
        key: name.language,
        object: { ITEM: { POCKET: { [itemPocket.name]: { NAME: name.name } } } },
      }))
    );
  }
}
