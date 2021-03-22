import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Species } from '@pokedex-ng/domain';
import { catchError } from 'rxjs/operators';
import { SpeciesService } from '../services/species/species.service';

@Injectable({
  providedIn: 'root',
})
export class SpeciesResolver implements Resolve<Species> {
  constructor(private speciesService: SpeciesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Species> {
    return this.speciesService.fetchApiOne(route?.params?.pokemon).pipe(
      catchError(() => {
        this.router.navigate(['pokemon', '25']);
        return EMPTY;
      })
    );
  }
}
