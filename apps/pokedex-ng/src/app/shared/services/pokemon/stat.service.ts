import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocalizedName, MergingMap, PxStat, Stat } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { MultiTranslatedService } from '../base-service';
import { LanguageService } from '../game/language.service';

@Injectable({ providedIn: 'root' })
export class StatService extends MultiTranslatedService<Stat, PxStat> {
  constructor(
    protected http: HttpClient,
    protected translocoService: TranslocoService,
    protected languageService: LanguageService
  ) {
    super('stat', http, translocoService, languageService);
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
