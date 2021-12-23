import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ItemPocket, LocalizedName, MergingMap, PxItemPocket } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { MultiTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class ItemPocketService extends MultiTranslatedService<ItemPocket, PxItemPocket> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('item-pocket', http, translocoService, languageService);
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
