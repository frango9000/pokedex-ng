import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Pokemon } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-pokemon-type-damages',
  templateUrl: './pokemon-type-damages.component.html',
  styleUrls: ['./pokemon-type-damages.component.scss'],
})
export class PokemonTypeDamagesComponent implements OnInit {
  @Input() public pokemon$: Observable<Pokemon>;
  @Input() public showHeading = true;

  private _typeDamages$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.pokemon$
      .pipe(untilDestroyed(this))
      .subscribe((pokemon: Pokemon) => this._typeDamages$.next(pokemon.types.map((typeSlot) => typeSlot.type.name)));
  }

  getTypeDamages$(): Observable<string[]> {
    return this._typeDamages$.asObservable();
  }
}
