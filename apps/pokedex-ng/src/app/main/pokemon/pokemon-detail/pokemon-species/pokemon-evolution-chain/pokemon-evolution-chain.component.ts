import { Component, Input, OnChanges } from '@angular/core';
import { PokemonEvolutionChain } from '../../../../../shared/domain/pokemon-evolution-chain';
import { PokemonSpecies } from '../../../../../shared/domain/pokemon-species';
import { splitResourceId } from '../../../../../shared/pipes/resource-id.pipe';
import { PokemonEvolutionChainService } from '../../../../../shared/services/pokemon-evolution-chain.service';

@Component({
  selector: 'app-pokemon-evolution-chain',
  templateUrl: './pokemon-evolution-chain.component.html',
  styleUrls: ['./pokemon-evolution-chain.component.scss'],
})
export class PokemonEvolutionChainComponent implements OnChanges {
  @Input() public pokemonSpecies: PokemonSpecies;

  public evolutionChain: PokemonEvolutionChain;

  constructor(private pokemonEvolutionChainService: PokemonEvolutionChainService) {}

  ngOnChanges(): void {
    if (this.pokemonSpecies) {
      this.evolutionChain = null;
      this.pokemonEvolutionChainService
        .getEvolutionChain(splitResourceId(this.pokemonSpecies.evolution_chain.url))
        .subscribe((value) => {
          this.evolutionChain = value;
        });
    }
  }
}
