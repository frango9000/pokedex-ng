import { Component, Input, OnChanges } from '@angular/core';
import { Species } from '@pokedex-ng/domain';
import { SpeciesService } from '../../../../shared/services/species.service';

@Component({
  selector: 'app-pokemon-species',
  templateUrl: './pokemon-species.component.html',
  styleUrls: ['./pokemon-species.component.scss'],
})
export class PokemonSpeciesComponent implements OnChanges {
  @Input() pokemonSpeciesId: string | number;

  public pokemonSpecies: Species;

  constructor(private speciesService: SpeciesService) {}

  ngOnChanges(): void {
    this.pokemonSpecies = null;
    this.speciesService.fetchApiOneSpecies(this.pokemonSpeciesId).subscribe((specie) => {
      this.pokemonSpecies = specie;
    });
  }
}
