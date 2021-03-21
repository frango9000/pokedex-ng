import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Item, MergingMap } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends SingleTranslatedService<Item> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('item', http, translateService, languageService);
  }

  protected _parseOneTranslation(item: Item): Observable<MergingMap> {
    return of(
      MergingMap.ofSingleResource(item.names, (name) => ({
        key: name.language.name,
        object: { ITEM: { [item.name]: { NAME: name.name } } },
      }))
    );
  }
}
