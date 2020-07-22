import {Component, Input, OnInit} from '@angular/core';
import {NamedResource} from '../../../../shared/domain/named-resource';
import {PokemonTypeService} from '../../../../shared/services/pokemon-type.service';
import {PokemonType} from '../../../../shared/domain/pokemon-type';

@Component({
  selector: 'app-pokemon-type-damages',
  templateUrl: './pokemon-type-damages.component.html',
  styleUrls: ['./pokemon-type-damages.component.scss']
})
export class PokemonTypeDamagesComponent implements OnInit {

  @Input() typeIds: {
    slot: number,
    type: NamedResource
  }[];

  types: PokemonType[];

  constructor(private pokemonTypeService: PokemonTypeService) {
  }

  ngOnInit(): void {
    this.types = [];
    this.typeIds.forEach(typeId => {
      this.pokemonTypeService.getType(typeId.type.name).subscribe(type => this.types.push(type));
    });
  }

}
