import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiUrlInterceptor } from './shared/interceptors/api-url/api-url.interceptor';
import { CacheInterceptor } from './shared/interceptors/cache/cache.interceptor';
import { CacheService } from './shared/interceptors/cache/cache.service';
import { AppInitializationService } from './shared/services/app/app-initialization.service';
import { LanguageService } from './shared/services/game/language.service';
import { SharedModule } from './shared/shared.module';
import { TranslocoRootModule } from './transloco-root.module';

export function initializeApp(appInitService: AppInitializationService) {
  return (): Observable<unknown> => {
    return appInitService.initialize();
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [
    AppInitializationService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitializationService, LanguageService],
      multi: true,
    },
    CacheService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
