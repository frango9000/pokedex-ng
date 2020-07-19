import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../../shared/services/pokemon.service';
import {map} from 'rxjs/operators';
import {NamedResource} from '../../../shared/domain/named-resource';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})
export class PokemonHomeComponent implements OnInit {


  public pokemonList: NamedResource[] = [];

  public gridMode = true;

  offset = 0;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.fetchPokemonList();
  }


  private fetchPokemonList(): void {
    this.pokemonService.getPokemonList(this.offset).pipe(
      map(response => response.results.map(value => new NamedResource(value)))
    ).subscribe(list => this.pokemonList.push(...list));
    this.pokemonList.sort((a, b) => a.id > b.id ? 1 : -1);
  }

  fetchMore(): void {
    this.offset += 48;
    this.fetchPokemonList();
  }
}
