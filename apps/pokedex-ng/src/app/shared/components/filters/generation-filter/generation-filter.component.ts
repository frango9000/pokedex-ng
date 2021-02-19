import { Component, OnInit } from '@angular/core';
import { Generation } from '@pokedex-ng/domain';
import { GenerationService } from '../../../services/generation.service';

@Component({
  selector: 'pokedex-ng-generation-filter',
  templateUrl: './generation-filter.component.html',
  styleUrls: ['./generation-filter.component.scss'],
})
export class GenerationFilterComponent implements OnInit {
  _selectableGenerations: { generation: Generation; active: boolean }[] = [];

  constructor(private generationService: GenerationService) {}

  ngOnInit(): void {
    this.generationService.getAllGenerations().subscribe((gens) => {
      this._selectableGenerations = gens.map((generation) => ({ generation, active: false }));
    });
  }
}
