import { Component, OnInit } from '@angular/core';
import { NamedApiPokemon } from '@pokedex-ng/domain';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss'],
})
export class PokemonHomeComponent implements OnInit {
  public pokemonList: NamedApiPokemon[] = [];

  public gridMode = true;

  offset = 0;
  increment = 36;
  loading: boolean;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemonList();
  }

  private fetchPokemonList(): void {
    this.pokemonService
      .getPokemonList(this.offset)
      .pipe()
      .subscribe((value) => {
        this.pokemonList.push(...value);
        this.loading = false;
      });
  }

  fetchMore(): void {
    if (!this.loading && this.offset < 830) {
      this.loading = true;
      this.offset += this.increment;
      this.fetchPokemonList();
    }
  }
}
