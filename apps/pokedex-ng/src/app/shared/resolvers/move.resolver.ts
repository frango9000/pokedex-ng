import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Move } from '@pokedex-ng/domain';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MoveService } from '../services/move/move.service';

@Injectable({
  providedIn: 'root',
})
export class MoveResolver implements Resolve<Move> {
  constructor(private moveService: MoveService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Move> {
    return this.moveService.fetchApiOne(route?.params?.move || 1).pipe(
      catchError(() => {
        this.router.navigate(['move', '1']);
        return EMPTY;
      })
    );
  }
}
