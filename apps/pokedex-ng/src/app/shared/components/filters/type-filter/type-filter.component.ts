import { Component, OnInit } from '@angular/core';
import { NamedApiPokemonType } from '@pokedex-ng/domain';
import { MdbCheckboxChange } from 'angular-bootstrap-md';
import { FilterService } from '../../../services/filter.service';
import { PokemonTypeService } from '../../../services/pokemon-type.service';

@Component({
  selector: 'pokedex-ng-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss'],
})
export class TypeFilterComponent implements OnInit {
  _selectableTypes: { type: NamedApiPokemonType; active: boolean }[] = [];

  constructor(public filterService: FilterService, private typeService: PokemonTypeService) {}

  ngOnInit(): void {
    this.typeService.getAllTypesLocal().subscribe((types) => {
      this._selectableTypes = types.map((type) => ({ type, active: false }));
    });
  }

  onFilterChange($event: MdbCheckboxChange, type: { type: NamedApiPokemonType; active: boolean }) {
    type.active = $event.checked;
    this.filterService.setTypeFilter(this._selectableTypes.filter((type) => type.active).map((type) => type.type.name));
  }
}
