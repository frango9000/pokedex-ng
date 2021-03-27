import { Injectable } from '@angular/core';
import { SingleTranslatedService } from '../base-service';
import { ItemAttribute, MergingMap } from '@pokedex-ng/domain';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../game/language.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemAttributeService extends SingleTranslatedService<ItemAttribute> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('item-attribute', http, translateService, languageService);
  }

  protected _parseOneTranslation(itemAttribute: ItemAttribute): Observable<MergingMap> {
    return of(
      MergingMap.mergeMaps([
        MergingMap.ofSingleResource(itemAttribute.names, (name) => ({
          key: name.language.name,
          object: { ITEM: { ATTRIBUTE: { [itemAttribute.name]: { NAME: name.name } } } },
        })),
        MergingMap.ofSingleResource(itemAttribute.descriptions, (description) => ({
          key: description.language.name,
          object: { ITEM: { ATTRIBUTE: { [itemAttribute.name]: { DESCRIPTION: description.description } } } },
        })),
      ])
    );
  }
}
