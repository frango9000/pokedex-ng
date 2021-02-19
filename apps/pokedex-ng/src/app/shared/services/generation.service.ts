import { Injectable } from '@angular/core';
import { getAllGenerations } from '@pokedex-ng/data';
import { Generation } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenerationService {
  getAllGenerations(): Observable<Generation[]> {
    return getAllGenerations().pipe(take(1));
  }
}
