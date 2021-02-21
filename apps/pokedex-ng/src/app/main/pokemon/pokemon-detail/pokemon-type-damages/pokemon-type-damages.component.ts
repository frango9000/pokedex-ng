import { Component, Input, OnChanges } from '@angular/core';
import { NamedApiPokemonType, NamedApiResource } from '@pokedex-ng/domain';
import { TypeService } from '../../../../shared/services/type.service';

@Component({
  selector: 'app-pokemon-type-damages',
  templateUrl: './pokemon-type-damages.component.html',
  styleUrls: ['./pokemon-type-damages.component.scss'],
})
export class PokemonTypeDamagesComponent implements OnChanges {
  @Input() typeIds: {
    slot: number;
    type: NamedApiResource;
  }[];

  types: NamedApiPokemonType[];

  allTypes: { name: string; multiplier: number }[] = [];

  weaknesses: { name: string; multiplier: number }[] = [];
  resistances: { name: string; multiplier: number }[] = [];

  constructor(private pokemonTypeService: TypeService) {}

  ngOnChanges(): void {
    this.types = null;
    this.pokemonTypeService.getAllTypes().subscribe(
      (value) =>
        (this.allTypes = value.map((value1) => {
          return { name: value1.name, multiplier: 1 };
        }))
    );
    this.types = [];
    this.typeIds.forEach((typeId, index) => {
      this.pokemonTypeService.getOneType(typeId.type.name).subscribe((type) => {
        this.types.push(type);
        if (index === this.typeIds.length - 1) {
          this.generateTypeDamages();
        }
      });
    });
  }

  private generateTypeDamages(): void {
    let generatedTypeDamages: {
      name: string;
      multiplier: number;
    }[] = JSON.parse(JSON.stringify(this.allTypes));
    this.types.forEach((type) => {
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
    this.weaknesses = generatedTypeDamages.filter((value) => value.multiplier > 1);
    this.resistances = generatedTypeDamages.filter((value) => value.multiplier < 1);
  }
}
