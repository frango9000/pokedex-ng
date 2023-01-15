import { Component, Input, OnInit } from '@angular/core';
import { EvolutionChainLink } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { EvolutionChainService } from '../../../../../shared/services/evolution/evolution-chain.service';

@Component({
  selector: 'app-pokemon-evolution-chain',
  templateUrl: './pokemon-evolution-chain.component.html',
  styleUrls: ['./pokemon-evolution-chain.component.scss'],
})
export class PokemonEvolutionChainComponent implements OnInit {
  @Input() evolutionChainId$: Observable<number>;
  public evolutionChain$: BehaviorSubject<EvolutionChainLink> = new BehaviorSubject(null);
  public loading = false;

  constructor(private _pokemonEvolutionChainService: EvolutionChainService) {}

  ngOnInit(): void {
    this.evolutionChainId$
      .pipe(
        filter((speciesId) => !!speciesId),
        tap(() => (this.loading = true)),
        switchMap((speciesId) => this._pokemonEvolutionChainService.fetchApiOne(speciesId)),
        tap({
          next: () => (this.loading = false),
          error: () => (this.loading = false),
        })
      )
      .subscribe((value) => this.evolutionChain$.next(value.chain));
  }

  getEvolutionChain$(): Observable<EvolutionChainLink> {
    return this.evolutionChain$.asObservable();
  }
}
