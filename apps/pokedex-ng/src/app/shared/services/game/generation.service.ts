import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Generation, PxGeneration } from '@pokedex-ng/domain';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root',
})
export class GenerationService extends BaseService<Generation, PxGeneration> {
  constructor(protected http: HttpClient) {
    super('generation', http);
  }
}
