import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SelectableType } from '@pokedex-ng/domain';
import { MdbCheckboxChange } from 'angular-bootstrap-md';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { FilterService } from '../../../services/app/filter.service';
import { TypeService } from '../../../services/pokemon/type.service';

@Component({
  selector: 'pokedex-ng-types-filter',
  templateUrl: './types-filter.component.html',
  styleUrls: ['./types-filter.component.scss'],
})
export class TypesFilterComponent implements OnInit, OnDestroy {
  @Input() public showTypesExclusivenessToggle = false;

  public _selectableTypes: SelectableType[] = [];

  private subscriptions = new Subscription();

  constructor(public filterService: FilterService, private typeService: TypeService) {}

  ngOnInit(): void {
    this.subscriptions.add(this._subscribeToGetAllTypes());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onFilterChange($event: MdbCheckboxChange, type: SelectableType) {
    type.active = $event.checked;
    this.filterService.setTypesFilter(
      this._selectableTypes
        .filter((selectableType) => selectableType.active)
        .map((selectableType) => selectableType.type.name)
    );
  }

  private _subscribeToGetAllTypes() {
    return this.typeService
      .getAll()
      .pipe(take(1))
      .subscribe((types) => {
        this._selectableTypes = types.map((type) => ({ type, active: false }));
        this.subscriptions.add(this._subscribeToGetTypesFilter());
      });
  }

  private _subscribeToGetTypesFilter() {
    return this.filterService.getTypesFilter$().subscribe((types) => {
      this._selectableTypes.forEach((selectables) => {
        selectables.active = types.some((type) => type === selectables.type.name);
      });
    });
  }
}
