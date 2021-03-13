import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizedName, MergingMap, PxStat, Stat } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { MultiTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({ providedIn: 'root' })
export class StatService extends MultiTranslatedService<Stat, PxStat> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('stat', http, translateService, languageService);
  }

  protected _parseAllTranslations(parentResources: PxStat[]): Observable<MergingMap> {
    return of(
      MergingMap.ofMultipleResources<PxStat, LocalizedName>(parentResources, 'names', (parentResource, resource) => ({
        key: resource.language,
        object: { STAT: { [parentResource.name]: resource.name } },
      }))
    );
  }
}
