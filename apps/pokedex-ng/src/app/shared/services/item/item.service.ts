import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Item, LocalizedName, MergingMap, PxItem } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { FullyTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';
import { map } from 'rxjs/operators';
import { FilterService } from '../app/filter.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends FullyTranslatedService<Item, PxItem> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService,
    private filterService: FilterService
  ) {
    super('item', http, translateService, languageService);
  }

  getAllFiltered(): Observable<PxItem[]> {
    return this.getAll().pipe(map((list: PxItem[]) => this.filterService.filterByLocalizedName(list)));
  }

  protected _parseOneTranslation(item: Item): Observable<MergingMap> {
    return of(
      MergingMap.ofSingleResource(item.names, (name) => ({
        key: name.language.name,
        object: { ITEM: { [item.name]: { NAME: name.name } } },
      }))
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
}
