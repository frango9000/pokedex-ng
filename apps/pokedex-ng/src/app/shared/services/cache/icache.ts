import { HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

export interface ICache {
  put(req: HttpRequest<any>, response: HttpResponse<any>): void;

  get(req: HttpRequest<any>): HttpResponse<any> | null;

  remove(url: string): void;

  cleanCache(): void;
}

export interface CacheEntry {
  url: string;
  response: HttpResponse<any>;
  creation: number;
}

export function serviceLog(response): void {
  if (environment.logServiceResponses) {
    console.log(response);
  }
}
