import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Pokemon } from '@pokedex-ng/domain';
import { PokemonService } from '../services/pokemon/pokemon.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonResolver implements Resolve<Pokemon> {
  constructor(private pokemonService: PokemonService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon> {
    return this.pokemonService.fetchApiOne(route?.params?.pokemon || 25).pipe(
      catchError(() => {
        this.router.navigate(['pokemon', '25']);
        return EMPTY;
      })
    );
  }
}
