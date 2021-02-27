import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PxStat, Stat } from '@pokedex-ng/domain';
import { LanguageService } from '../app/language.service';
import { AutoTranslatedService } from '../base-service';

@Injectable({ providedIn: 'root' })
export class StatService extends AutoTranslatedService<Stat, PxStat> {
  constructor(
    protected http: HttpClient,
    protected translateService: TranslateService,
    protected languageService: LanguageService
  ) {
    super(http, translateService, languageService, 'stat');
  }

  protected _parseTranslation(): { language: string; object: any }[] {
    return [];
  }

  protected _parseTranslations(resources: PxStat[]): { language: string; object: any }[] {
    const list: { language: string; object: any }[] = [];
    resources.forEach((stat) =>
      stat.names.forEach((name) =>
        list.push({
          language: name.language,
          object: {
            STAT: { [stat.name]: name.name },
          },
        })
      )
    );
    return list;
  }
}
