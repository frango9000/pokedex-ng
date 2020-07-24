import {Component, Input, OnChanges} from '@angular/core';
import {PokemonSpecies} from '../../../../shared/domain/pokemon-species';
import {PokemonSpeciesService} from '../../../../shared/services/pokemon-species.service';

@Component({
  selector: 'app-pokemon-species',
  templateUrl: './pokemon-species.component.html',
  styleUrls: ['./pokemon-species.component.scss']
})
export class PokemonSpeciesComponent implements OnChanges {

  @Input() pokemonSpeciesId: string | number;
  public pokemonSpecies: PokemonSpecies;

  constructor(private pokemonSpeciesService: PokemonSpeciesService) {
  }

  ngOnChanges(): void {
    this.pokemonSpeciesService.getPokemonSpecies(this.pokemonSpeciesId).subscribe(specie => {
      this.pokemonSpecies = specie;
    });
  }

}
