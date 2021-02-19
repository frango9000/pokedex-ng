import { Component, OnDestroy, OnInit } from '@angular/core';
import { NamedApiPokemon } from '@pokedex-ng/domain';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../shared/services/filter.service';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss'],
})
export class PokemonHomeComponent implements OnInit, OnDestroy {
  public baseList: NamedApiPokemon[] = [];
  public pokemonList: NamedApiPokemon[] = [];

  public offset = 0;
  public increment = 72;
  public loading: boolean;

  private query: string;

  private subscriptions: Subscription = new Subscription();

  constructor(private pokemonService: PokemonService, public filterService: FilterService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.filterService.getQueryObservable().subscribe((query) => {
        this.query = query;
        this.fetchPokemon();
      })
    );
    this.subscriptions.add(
      this.filterService.getGridMode$().subscribe(() => {
        this.offset = 0;
        this.pokemonList = this.baseList.slice(0, this.increment);
      })
    );
    this.filterService.showAll();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.filterService.hideAll();
  }

  private fetchPokemon(): void {
    this.pokemonService.getAllPokemon().subscribe((allPoke) => {
      this.baseList = !this.query?.length
        ? allPoke
        : allPoke.filter((poke) => poke.name.includes(this.query.toLowerCase()));
      this.pokemonList = this.baseList.slice(0, this.increment);
      this.offset = this.increment;
    });
  }

  renderMore(): void {
    if (!this.offset) {
      this.offset += this.increment;
    }
    const increment = this.baseList.slice(this.offset, this.offset + this.increment);
    if (increment.length) {
      this.offset += this.increment;
    }
    this.pokemonList.push(...increment);
  }
}
