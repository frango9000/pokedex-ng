import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../../shared/services/pokemon.service';
import {ApiNamedPokemon} from '../../../shared/domain/pokemon';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})
export class PokemonHomeComponent implements OnInit {


  public pokemonList: ApiNamedPokemon[] = [];

  public gridMode = true;

  offset = 1;
  private loading: boolean;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.fetchPokemonList();
  }

  private fetchPokemonList(): void {
    // this.pokemonService.getPokemonList(this.offset).pipe(
    //   map(response => response.results.map(value => new ApiNamedResource(value)))
    // ).subscribe(list => this.pokemonList.push(...list));
    // this.pokemonList.sort((a, b) => a.id > b.id ? 1 : -1);

    this.pokemonService.getFirebasePokemonList(this.offset).pipe(
    ).subscribe(value => {
      this.pokemonList.push(...value);
      this.loading = false;
    });
  }

  fetchMore(): void {
    if (!this.loading && this.offset < 828) {
      this.offset += 36;
      this.fetchPokemonList();
      this.loading = true;
    }
  }
}
