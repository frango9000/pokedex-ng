import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MergingMap, PxStat, Stat } from '@pokedex-ng/domain';
import { Observable, of } from 'rxjs';
import { LanguageService } from '../app/language.service';
import { MultiTranslatedService } from '../base-service';

@Injectable({ providedIn: 'root' })
export class StatService extends MultiTranslatedService<Stat, PxStat> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super('stat', http, translateService, languageService);
  }

  protected _parseAllTranslations(resources: PxStat[]): Observable<MergingMap> {
    const map = new MergingMap();
    resources.forEach((stat) =>
      stat.names.forEach((name) => map.merge(name.language, { STAT: { [stat.name]: name.name } }))
    );
    return of(map);
  }
}
