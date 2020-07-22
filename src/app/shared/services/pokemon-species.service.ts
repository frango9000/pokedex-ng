import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonSpecies} from '../domain/pokemon-species';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService {

  constructor(private httpClient: HttpClient) {
  }

  getPokemonSpecies(speciesId: string | number): Observable<PokemonSpecies> {
    return this.httpClient.get<PokemonSpecies>(environment.apiUrl + '/pokemon-species/' + speciesId).pipe(
      tap(source => console.log(source))
    );
  }
}
