import { Component, Input, OnInit } from '@angular/core';
import { EvolutionChainLink } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EvolutionChainService } from '../../../../../shared/services/evolution-chain.service';

@Component({
  selector: 'app-pokemon-evolution-chain',
  templateUrl: './pokemon-evolution-chain.component.html',
  styleUrls: ['./pokemon-evolution-chain.component.scss'],
})
export class PokemonEvolutionChainComponent implements OnInit {
  @Input() evolutionChainId$: Observable<number>;
  public evolutionChain$: BehaviorSubject<EvolutionChainLink> = new BehaviorSubject(null);

  constructor(private _pokemonEvolutionChainService: EvolutionChainService) {}

  ngOnInit(): void {
    this.evolutionChainId$
      .pipe(switchMap((speciesId) => this._pokemonEvolutionChainService.getEvolutionChain(speciesId)))
      .subscribe((value) => this.evolutionChain$.next(value.chain));
  }

  getEvolutionChain$(): Observable<EvolutionChainLink> {
    return this.evolutionChain$.asObservable();
  }
}
