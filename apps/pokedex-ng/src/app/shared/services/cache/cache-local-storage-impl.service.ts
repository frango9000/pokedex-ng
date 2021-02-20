import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CacheEntry, ICache } from './icache';

@Injectable({
  providedIn: 'root'
})
export class CacheLocalStorageImplService implements ICache {
  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const entry: CacheEntry = { url, response, creation: Date.now() };
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
        if (entry.creation && entry.creation <= now - environment.maxCacheAge) {
          this.remove(url);
          return null;
        }
        return new HttpResponse(entry.response);
      }
    }
    return null;
  }

  remove(url: string): void {
    if (!url.startsWith(environment.baseHref + '/assets')) {
      localStorage.removeItem(url);
    }
  }

  cleanCache(): void {
    // localStorage.clear();
    const size = localStorage.length / 2;
    const topHalf = Array(Math.ceil(size));
    for (const index of topHalf) {
      const key = localStorage.key(index);
      if (!key.startsWith(environment.baseHref + '/assets')) {
        localStorage.removeItem(key);
      }
    }
  }
}
