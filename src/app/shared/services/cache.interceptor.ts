import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CacheService} from './cache.service';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService: CacheService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse = this.cacheService.get(request);
    if (cachedResponse && environment.logCachedResponses) {
      console.log('Cache', cachedResponse);
    }
    return cachedResponse ? of(cachedResponse) : this.sendRequest(request, next, this.cacheService);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: CacheService): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (environment.logNetworkResponses) {
          console.log('Network', event);
        }
        if (event instanceof HttpResponse) {
          cache.put(req, event);
        }
      })
    );
  }
}
