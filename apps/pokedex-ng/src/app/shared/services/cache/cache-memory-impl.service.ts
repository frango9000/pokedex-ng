import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CacheEntry, ICache } from './icache';

@Injectable({
  providedIn: 'root',
})
export class CacheMemoryImplService implements ICache {
  private cache = new Map<string, CacheEntry>();

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    const entry: CacheEntry = { url, response, creation: Date.now() };
    this.cache.set(url, entry);
  }

  get(req: HttpRequest<any>): HttpResponse<any> | null {
    const url = req.urlWithParams;
    const entry = this.cache.get(url);
    if (entry !== undefined) {
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
    this.cache.delete(url);
  }

  cleanCache(): void {
    this.cache.clear();
  }
}
