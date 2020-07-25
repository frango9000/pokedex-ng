import {Component, Input, OnInit} from '@angular/core';
import {PokemonSpecies} from '../../../../../shared/domain/pokemon-species';
import {PokemonVersionService} from '../../../../../shared/services/pokemon-version.service';

@Component({
  selector: 'app-pokemon-species-info',
  templateUrl: './pokemon-species-info.component.html',
  styleUrls: ['./pokemon-species-info.component.scss']
})
export class PokemonSpeciesInfoComponent implements OnInit {

  @Input() public pokemonSpecies: PokemonSpecies;

  activeVersion: string = 'en';

  constructor(private pokemonVersionService: PokemonVersionService) {
  }

  ngOnInit(): void {
    this.pokemonVersionService.activeVersion$.subscribe(value => this.activeVersion = value);
  }

}
