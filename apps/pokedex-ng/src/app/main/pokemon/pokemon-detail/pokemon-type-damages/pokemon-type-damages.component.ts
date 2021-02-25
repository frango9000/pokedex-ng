import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NamedApiPokemonType, Pokemon, PokeSlotType, TypeDamages } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TypeService } from '../../../../shared/services/type.service';

@Component({
  selector: 'app-pokemon-type-damages',
  templateUrl: './pokemon-type-damages.component.html',
  styleUrls: ['./pokemon-type-damages.component.scss'],
})
export class PokemonTypeDamagesComponent implements OnInit, OnDestroy {
  @Input() public pokemon$: Observable<Pokemon>;

  public typeDamages$: BehaviorSubject<TypeDamages> = new BehaviorSubject<TypeDamages>(null);

  private subscription = new Subscription();

  constructor(private pokemonTypeService: TypeService) {}

  ngOnInit(): void {
    this.subscription.add(this.subscribeToDisplayedPokemon());
  }

  subscribeToDisplayedPokemon(): Subscription {
    return this.pokemon$
      .pipe(
        switchMap((pokemon: Pokemon) =>
          this.pokemonTypeService.getAllTypes().pipe(
            map((types) => {
              return this.generateTypeDamages(pokemon.types, types);
            })
          )
        )
      )
      .subscribe();
  }

  private generateTypeDamages(namedTypes: PokeSlotType[], allTypes: NamedApiPokemonType[]): void {
    let generatedTypeDamages = allTypes.map((value1) => ({ name: value1.name, multiplier: 1 }));
    const pokeTypes = namedTypes.map((namedType) => allTypes.find((type) => type.name === namedType.type.name));
    pokeTypes.forEach((type) => {
      type.damage_relations.double_damage_from.forEach((double) => {
        const found = generatedTypeDamages.findIndex((value) => value.name === double);
        generatedTypeDamages[found].multiplier *= 2;
      });
      type.damage_relations.half_damage_from.forEach((half) => {
        const found = generatedTypeDamages.findIndex((value) => value.name === half);
        generatedTypeDamages[found].multiplier *= 0.5;
      });
      type.damage_relations.no_damage_from.forEach((none) => {
        const found = generatedTypeDamages.findIndex((value) => value.name === none);
        generatedTypeDamages[found].multiplier *= 0;
      });
    });
    generatedTypeDamages = generatedTypeDamages.filter((value) => value.multiplier !== 1);
    this.typeDamages$.next({
      weaknesses: generatedTypeDamages.filter((value) => value.multiplier > 1),
      resistances: generatedTypeDamages.filter((value) => value.multiplier < 1),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
