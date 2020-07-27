import {Injectable} from '@angular/core';
import {CacheEntry, ICache} from './icache';
import {HttpRequest, HttpResponse} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CacheLocalStorageImplService implements ICache {

  constructor() {
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const entry: CacheEntry = {url, response, creation: Date.now()};
    try {
      localStorage.setItem(url, JSON.stringify(entry));
    } catch (e) {
      this.cleanCache();
      try {
        localStorage.setItem(url, JSON.stringify(entry));
      } catch (e) {
        console.log('Domain Local Storage is Full!');
      }
    }
  }


  get(req: HttpRequest<any>): HttpResponse<any> | null {
    const url = req.urlWithParams;
    const item = localStorage.getItem(url);
    if (item !== null) {
      const entry: CacheEntry = JSON.parse(item);
      const now = new Date().getTime();
      if (!entry) {
        return null;
      } else {
        if (entry.creation && (entry.creation <= (now - environment.maxCacheAge))) {
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

  cleanCache(): void {
    // localStorage.clear();
    const size = localStorage.length / 2;
    const topHalf = Array(Math.ceil(size));
    for (const index of topHalf) {
      const key = localStorage.key(index);
      localStorage.removeItem(key);
    }
  }
}
