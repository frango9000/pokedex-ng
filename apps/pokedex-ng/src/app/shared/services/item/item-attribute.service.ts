import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ItemAttribute, MergingMap } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { SingleTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({
  providedIn: 'root',
})
export class ItemAttributeService extends SingleTranslatedService<ItemAttribute> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('item-attribute', http, translocoService, languageService);
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
