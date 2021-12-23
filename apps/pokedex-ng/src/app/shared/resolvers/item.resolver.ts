import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Item } from '@pokedex-ng/domain';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ItemService } from '../services/item/item.service';

@Injectable({
  providedIn: 'root',
})
export class ItemResolver implements Resolve<Item> {
  constructor(private itemService: ItemService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Item> {
    return this.itemService.fetchApiOne(route?.params?.item || 1).pipe(
      catchError(() => {
        this.router.navigate(['item', '1']);
        return EMPTY;
      })
    );
  }
}
