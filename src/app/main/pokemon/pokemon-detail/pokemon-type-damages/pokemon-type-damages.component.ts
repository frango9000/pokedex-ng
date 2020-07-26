import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PokemonTypeService} from '../../../../shared/services/pokemon-type.service';
import {PokemonType} from '../../../../shared/domain/pokemon-type';
import {ApiNamedResource} from '../../../../shared/domain/api-resource';

@Component({
  selector: 'app-pokemon-type-damages',
  templateUrl: './pokemon-type-damages.component.html',
  styleUrls: ['./pokemon-type-damages.component.scss']
})
export class PokemonTypeDamagesComponent implements OnInit, OnChanges {

  @Input() typeIds: {
    slot: number,
    type: ApiNamedResource
  }[];

  types: PokemonType[];

  allTypes: { name: string, multiplier: number }[] = [];

  weaknesses: { name: string, multiplier: number }[] = [];
  resistances: { name: string, multiplier: number }[] = [];


  constructor(private pokemonTypeService: PokemonTypeService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pokemonTypeService.getTypes().subscribe(value => this.allTypes = value.map(value1 => {
      return {name: value1.name, multiplier: 1};
    }));

    this.types = [];
    this.typeIds.forEach((typeId, index) => {
      this.pokemonTypeService.getType(typeId.type.name).subscribe(type => {
        this.types.push(type);
        if (index === (this.typeIds.length - 1)) {
          this.generateTypeDamages();
        }
      });
    });
  }

  private generateTypeDamages(): void {
    let generatedTypeDamages: { name: string, multiplier: number }[] = JSON.parse(JSON.stringify(this.allTypes));
    this.types.forEach(type => {
      type.damage_relations.double_damage_from.forEach(double => {
        const found = generatedTypeDamages.findIndex(value => value.name === double.name);
        generatedTypeDamages[found].multiplier *= 2;
      });
      type.damage_relations.half_damage_from.forEach(half => {
        const found = generatedTypeDamages.findIndex(value => value.name === half.name);
        generatedTypeDamages[found].multiplier *= 0.5;
      });
      type.damage_relations.no_damage_from.forEach(none => {
        const found = generatedTypeDamages.findIndex(value => value.name === none.name);
        generatedTypeDamages[found].multiplier *= 0;
      });
    });
    generatedTypeDamages = generatedTypeDamages.filter(value => value.multiplier !== 1);
    this.weaknesses = generatedTypeDamages.filter(value => value.multiplier > 1);
    this.resistances = generatedTypeDamages.filter(value => value.multiplier < 1);
  }
}
