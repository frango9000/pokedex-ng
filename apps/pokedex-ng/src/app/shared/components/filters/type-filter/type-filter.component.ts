import { Component, OnInit } from '@angular/core';
import { SelectableType } from '@pokedex-ng/domain';
import { MdbCheckboxChange } from 'angular-bootstrap-md';
import { FilterService } from '../../../services/app/filter.service';
import { TypeService } from '../../../services/pokemon/type.service';

@Component({
  selector: 'pokedex-ng-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss'],
})
export class TypeFilterComponent implements OnInit {
  _selectableTypes: SelectableType[] = [];

  constructor(public filterService: FilterService, private typeService: TypeService) {}

  ngOnInit(): void {
    this.typeService.getAll().subscribe((types) => {
      this._selectableTypes = types.map((type) => ({ type, active: false }));
    });
    this.filterService.getTypeFilter$().subscribe((types) => {
      this._selectableTypes.forEach((selectables) => {
        selectables.active = types.some((type) => type === selectables.type.name);
      });
    });
  }

  onFilterChange($event: MdbCheckboxChange, type: SelectableType) {
    type.active = $event.checked;
    this.filterService.setTypeFilter(this._selectableTypes.filter((type) => type.active).map((type) => type.type.name));
  }
}
