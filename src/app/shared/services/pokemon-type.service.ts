import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import {PokemonType} from '../domain/pokemon-type';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {

  constructor(public httpClient: HttpClient) {
  }

  getType(typeId: string | number): Observable<PokemonType> {
    return this.httpClient.get<PokemonType>(environment.apiUrl + '/type/' + typeId).pipe(
      tap(source => console.log(source))
    );
  }
}
