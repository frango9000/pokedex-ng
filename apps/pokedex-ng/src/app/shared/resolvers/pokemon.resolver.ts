import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Pokemon } from '@pokedex-ng/domain';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokemonService } from '../services/pokemon/pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonResolver implements Resolve<Pokemon> {
  constructor(private pokemonService: PokemonService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon> {
    return this.pokemonService.fetchApiOne(route?.params?.pokemon || 1).pipe(
      catchError(() => {
        this.router.navigate(['pokemon', '1']);
        return EMPTY;
      })
    );
  }
}
