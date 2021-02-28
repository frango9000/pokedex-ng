import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let root = '';
    const prefix = request.url.split('/')[0];
    switch (prefix) {
      case 'api':
        root = environment.apiUrl;
        break;
      case 'assets':
        root = environment.baseHref + '/assets';
        break;
    }
    return next.handle(
      request.clone({
        url: request.url.replace(prefix, root),
      })
    );
  }
}
