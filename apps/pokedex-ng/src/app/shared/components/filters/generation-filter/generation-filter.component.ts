import { Component, OnDestroy, OnInit } from '@angular/core';
import { SelectableGeneration } from '@pokedex-ng/domain';
import { MdbCheckboxChange } from 'angular-bootstrap-md';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { FilterService } from '../../../services/app/filter.service';
import { GenerationService } from '../../../services/game/generation.service';

@Component({
  selector: 'pokedex-ng-generation-filter',
  templateUrl: './generation-filter.component.html',
  styleUrls: ['./generation-filter.component.scss'],
})
export class GenerationFilterComponent implements OnInit, OnDestroy {
  public _selectableGenerations: SelectableGeneration[] = [];

  private subscriptions = new Subscription();

  constructor(public filterService: FilterService, private generationService: GenerationService) {}

  ngOnInit(): void {
    this.subscriptions.add(this._subscribeToGetAllGenerations());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onFilterChange($event: MdbCheckboxChange, generation: SelectableGeneration) {
    generation.active = $event.checked;
    this.filterService.setGenerationFilter(
      this._selectableGenerations
        .filter((selectableGeneration) => selectableGeneration.active)
        .map((selectableGeneration) => selectableGeneration.generation.id)
    );
  }

  private _subscribeToGetAllGenerations() {
    return this.generationService
      .getAll()
      .pipe(take(1))
      .subscribe((generations) => {
        this._selectableGenerations = generations.map((generation) => ({ generation, active: false }));
        this.subscriptions.add(this._subscribeToGetGenerationFilter());
      });
  }

  private _subscribeToGetGenerationFilter() {
    return this.filterService.getGenerationFilter$().subscribe((generations) => {
      this._selectableGenerations.forEach((selectableGeneration) => {
        selectableGeneration.active = generations.includes(selectableGeneration.generation.id);
      });
    });
  }
}
