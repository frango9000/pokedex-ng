import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { CacheService } from './cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse = environment.cache.active ? this.cacheService.get(request) : null;
    if (cachedResponse && environment.logCachedResponses) {
      console.log('Cache', cachedResponse);
    }
    return cachedResponse ? of(cachedResponse) : this.sendRequest(request, next, this.cacheService);
  }

  sendRequest(req: HttpRequest<any>, next: HttpHandler, cache: CacheService): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (event.url.startsWith(environment.apiUrl)) {
            if (environment.logNetworkResponses) {
              console.log('Network', event);
            }
            if (environment.cache.external) {
              cache.put(req, event);
            }
          } else if (event.url.startsWith(environment.baseHref + '/assets/data/') && environment.cache.local) {
            cache.put(req, event);
          }
        }
      })
    );
  }
}
