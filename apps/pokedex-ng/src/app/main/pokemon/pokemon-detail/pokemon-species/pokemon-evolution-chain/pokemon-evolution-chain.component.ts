import { Component, Input, OnInit } from '@angular/core';
import { EvolutionChain } from '@pokedex-ng/domain';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EvolutionChainService } from '../../../../../shared/services/evolution-chain.service';

@Component({
  selector: 'app-pokemon-evolution-chain',
  templateUrl: './pokemon-evolution-chain.component.html',
  styleUrls: ['./pokemon-evolution-chain.component.scss'],
})
export class PokemonEvolutionChainComponent implements OnInit {
  @Input() evolutionChainId$: Observable<number>;
  public evolutionChain$: Subject<EvolutionChain> = new Subject();

  constructor(private pokemonEvolutionChainService: EvolutionChainService) {}

  ngOnInit(): void {
    this.evolutionChainId$
      .pipe(switchMap((speciesId) => this.pokemonEvolutionChainService.getEvolutionChain(speciesId)))
      .subscribe((value) => this.evolutionChain$.next(value));
  }
}
