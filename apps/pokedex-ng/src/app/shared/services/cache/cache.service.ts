import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { ICache } from './icache';
import { CacheLocalStorageImplService } from './cache-local-storage-impl.service';
import { CacheMemoryImplService } from './cache-memory-impl.service';

@Injectable({
  providedIn: 'root',
})
export class CacheService implements ICache {
  private caches: ICache[] = [];

  constructor(
    private cacheLocalStorageImplService: CacheLocalStorageImplService,
    private cacheMemoryImplService: CacheMemoryImplService
  ) {
    this.caches.push(cacheMemoryImplService);
    this.caches.push(cacheLocalStorageImplService);
  }

  get(request: HttpRequest<any>): HttpResponse<any> | null {
    let cachedValue: HttpResponse<any>;
    for (const cache of this.caches) {
      cachedValue = cache.get(request);
      if (cachedValue !== null) {
        return cachedValue;
      }
    }
    return null;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    this.caches.forEach((cache) => cache.put(req, response));
  }

  cleanCache(): void {
    this.caches.forEach((cache) => cache.cleanCache());
  }

  remove(url: string): void {
    this.caches.forEach(() => this.remove(url));
  }
}
