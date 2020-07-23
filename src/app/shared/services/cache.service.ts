import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse} from '@angular/common/http';

const maxAge = 86400000;

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() {
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const entry: CacheEntry = {url, response, creation: Date.now()};
    localStorage.setItem(url, JSON.stringify(entry));
  }


  get(req: HttpRequest<any>): HttpResponse<any> {
    const url = req.urlWithParams;
    const item = localStorage.getItem(url);
    if (item !== null) {
      const entry: CacheEntry = JSON.parse(item);
      const now = new Date().getTime();
      if (!entry) {
        return null;
      } else {
        if (entry.creation && (entry.creation <= (now - maxAge))) {
          this.remove(url);
          return null;
        }
        return new HttpResponse(entry.response);
      }
    }
    return null;
  }

  remove(url: string): void {
    localStorage.removeItem(url);
  }

  cleanLocalStorage(): void {
    localStorage.clear();
  }
}


export interface CacheEntry {
  url: string;
  response: HttpResponse<any>;
  creation: number;
}
