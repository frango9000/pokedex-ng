import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Species } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { serviceLog } from './cache/icache';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  constructor(private httpClient: HttpClient) {}

  fetchApiOneSpecies(speciesId: string | number): Observable<Species> {
    return this.httpClient
      .get<Species>(environment.apiUrl + '/pokemon-species/' + speciesId)
      .pipe(tap(serviceLog), shareReplay());
  }
}
