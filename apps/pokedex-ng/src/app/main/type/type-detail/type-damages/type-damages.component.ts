import { Component, Input, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PxType, TypeDamages } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TypeService } from '../../../../shared/services/pokemon/type.service';

@UntilDestroy()
@Component({
  selector: 'pokedex-ng-type-damages',
  templateUrl: './type-damages.component.html',
  styleUrls: ['./type-damages.component.scss'],
})
export class TypeDamagesComponent implements OnInit {
  private _typeDamages$: BehaviorSubject<TypeDamages> = new BehaviorSubject<TypeDamages>(null);

  @Input() public types$: Observable<string[]>;

  @Input() public showDefending = false;
  @Input() public showAttacking = false;

  constructor(private readonly pokemonTypeService: TypeService) {}

  ngOnInit(): void {
    this.types$
      .pipe(
        untilDestroyed(this),
        switchMap((types: string[]) =>
          this.pokemonTypeService.getAll().pipe(
            map((allTypes) => {
              return this.generateTypeDamages(types, allTypes);
            })
          )
        )
      )
      .subscribe();
  }

  getTypeDamages$(): Observable<TypeDamages> {
    return this._typeDamages$.asObservable();
  }

  private generateTypeDamages(namedTypes: string[], allTypes: PxType[]): void {
    const pokeTypes = namedTypes.map((namedType) => allTypes.find((type) => type.name === namedType));
    let defendingTypeDamages = allTypes.map((value1) => ({ name: value1.name, multiplier: 1 }));

    pokeTypes.forEach((type) => {
      type.damage_relations.double_damage_from.forEach((double) => {
        const found = defendingTypeDamages.findIndex((value) => value.name === double);
        defendingTypeDamages[found].multiplier *= 2;
      });
      type.damage_relations.half_damage_from.forEach((half) => {
        const found = defendingTypeDamages.findIndex((value) => value.name === half);
        defendingTypeDamages[found].multiplier *= 0.5;
      });
      type.damage_relations.no_damage_from.forEach((none) => {
        const found = defendingTypeDamages.findIndex((value) => value.name === none);
        defendingTypeDamages[found].multiplier *= 0;
      });
    });
    defendingTypeDamages = defendingTypeDamages.filter((value) => value.multiplier !== 1);

    let attackingTypeDamages = allTypes.map((value1) => ({ name: value1.name, multiplier: 1 }));
    pokeTypes.forEach((type) => {
      type.damage_relations.double_damage_to.forEach((double) => {
        const found = attackingTypeDamages.findIndex((value) => value.name === double);
        attackingTypeDamages[found].multiplier *= 2;
      });
      type.damage_relations.half_damage_to.forEach((half) => {
        const found = attackingTypeDamages.findIndex((value) => value.name === half);
        attackingTypeDamages[found].multiplier *= 0.5;
      });
      type.damage_relations.no_damage_to.forEach((none) => {
        const found = attackingTypeDamages.findIndex((value) => value.name === none);
        attackingTypeDamages[found].multiplier *= 0;
      });
    });
    attackingTypeDamages = attackingTypeDamages.filter((value) => value.multiplier !== 1);

    this._typeDamages$.next({
      attacking: {
        weaknesses: attackingTypeDamages.filter((value) => value.multiplier < 1),
        strengths: attackingTypeDamages.filter((value) => value.multiplier > 1),
      },
      defending: {
        weaknesses: defendingTypeDamages.filter((value) => value.multiplier > 1),
        resistances: defendingTypeDamages.filter((value) => value.multiplier < 1),
      },
    });
  }
}
