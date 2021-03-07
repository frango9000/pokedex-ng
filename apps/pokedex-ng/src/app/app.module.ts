import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { environment } from '../environments/environment';
import { AppInitService, initializeApp } from './app-init.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiUrlInterceptor } from './shared/interceptors/api-url/api-url.interceptor';
import { CacheInterceptor } from './shared/interceptors/cache/cache.interceptor';
import { CacheService } from './shared/interceptors/cache/cache.service';
import { LanguageService } from './shared/services/game/language.service';
import { AbilityService } from './shared/services/pokemon/ability.service';
import { MoveService } from './shared/services/pokemon/move.service';
import { StatService } from './shared/services/pokemon/stat.service';
import { TypeService } from './shared/services/pokemon/type.service';
import { SharedModule } from './shared/shared.module';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, environment.baseHref + '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    CacheService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService, TranslateService, LanguageService, TypeService, MoveService, AbilityService, StatService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
