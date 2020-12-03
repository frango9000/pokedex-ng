import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PokemonSpecies } from '../../../../../shared/domain/pokemon-species';
import { PokemonEvolutionChainService } from '../../../../../shared/services/pokemon-evolution-chain.service';
import { splitResourceId } from '../../../../../shared/pipes/resource-id.pipe';
import { PokemonEvolutionChain } from '../../../../../shared/domain/pokemon-evolution-chain';

@Component({
  selector: 'app-pokemon-evolution-chain',
  templateUrl: './pokemon-evolution-chain.component.html',
  styleUrls: ['./pokemon-evolution-chain.component.scss'],
})
export class PokemonEvolutionChainComponent implements OnInit, OnChanges {
  @Input() public pokemonSpecies: PokemonSpecies;

  public evolutionChain: PokemonEvolutionChain;

  constructor(
    private pokemonEvolutionChainService: PokemonEvolutionChainService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.pokemonSpecies) {
      this.evolutionChain = null;
      this.pokemonEvolutionChainService
        .getEvolutionChain(
          splitResourceId(this.pokemonSpecies.evolution_chain.url)
        )
        .subscribe((value) => {
          this.evolutionChain = value;
        });
    }
  }
}
