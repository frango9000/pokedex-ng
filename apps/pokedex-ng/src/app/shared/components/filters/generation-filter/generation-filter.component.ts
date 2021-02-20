import { Component, OnInit } from '@angular/core';
import { SelectableGeneration } from '@pokedex-ng/domain';
import { MdbCheckboxChange } from 'angular-bootstrap-md';
import { FilterService } from '../../../services/filter.service';
import { GenerationService } from '../../../services/generation.service';

@Component({
  selector: 'pokedex-ng-generation-filter',
  templateUrl: './generation-filter.component.html',
  styleUrls: ['./generation-filter.component.scss'],
})
export class GenerationFilterComponent implements OnInit {
  _selectableGenerations: SelectableGeneration[] = [];

  constructor(public filterService: FilterService, private generationService: GenerationService) {}

  ngOnInit(): void {
    this.generationService.getAllGenerations().subscribe((gens) => {
      this._selectableGenerations = gens.map((generation) => ({ generation, active: false }));
    });
    this.filterService.getGenerationFilter$().subscribe((generations) => {
      this._selectableGenerations.forEach((selectables) => {
        selectables.active = generations.includes(selectables.generation.id);
      });
    });
  }

  onFilterChange($event: MdbCheckboxChange, generation: SelectableGeneration) {
    generation.active = $event.checked;
    this.filterService.setGenerationFilter(
      this._selectableGenerations
        .filter((generation) => generation.active)
        .map((generation) => generation.generation.id)
    );
  }
}
