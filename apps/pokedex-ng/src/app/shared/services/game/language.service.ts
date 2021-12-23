import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Language, LocalizedName, MergingMap, PxLanguage } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { MultiTranslatedService } from '../base-service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService extends MultiTranslatedService<Language, PxLanguage> {
  private readonly DEFAULT_LANGUAGE: PxLanguage = {
    name: 'en',
    id: 9,
    iso3166: 'us',
  };
  private activeLanguage$ = new BehaviorSubject<PxLanguage>(this.DEFAULT_LANGUAGE);

  constructor(protected http: HttpClient, protected translocoService: TranslocoService) {
    super('language', http, translocoService, null);
    this.languageService = this;
    this.initializationDone
      .pipe(
        filter((done) => !!done),
        take(1),
        switchMap(() => this.resources$.asObservable())
      )
      .subscribe((value: PxLanguage[]) => {
        this.translocoService.setAvailableLangs(value.map((language) => language.name));
      });
  }

  getDisplayLanguage$(): Observable<PxLanguage> {
    return this.activeLanguage$.asObservable();
  }

  setDisplayLanguage(selectedLanguage: string): void {
    const language = this.resources$.value.find((value) => value.name === selectedLanguage);
    if (language) {
      this.translocoService.setActiveLang(language.name);
      this.activeLanguage$.next(language);
    }
  }

  refresh() {
    this.setDisplayLanguage(this.activeLanguage$.value.name);
  }

  protected _parseAllTranslations(languages: PxLanguage[]): Observable<MergingMap> {
    const translations: MergingMap = new MergingMap();
    languages.forEach((language) =>
      language.names.forEach((name) => translations.merge(name.language, { LANGUAGE: { [language.name]: name.name } }))
    );
    return of(translations);
  }

  filterByLocalizedName<L extends { names: LocalizedName[] }>(fullResource: L[], like: string): L[] {
    return fullResource.filter((resource) => {
      const localized = resource.names.find((value) => value.language === this.activeLanguage$.value.name);
      return localized?.name?.trim().toLowerCase().includes(like?.trim().toLowerCase());
    });
  }
}
