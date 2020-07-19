import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../../shared/domain/pokemon';
import {PokemonService} from '../../../shared/services/pokemon.service';
import {map} from 'rxjs/operators';
import {SplitIdPipe} from '../../../shared/pipes/split-id.pipe';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})
export class PokemonHomeComponent implements OnInit {


  public pokemonList: Pokemon[] = [];

  public gridMode = true;

  offset = 0;

  constructor(private pokemonService: PokemonService,
              private splitIdPipe: SplitIdPipe) {
  }

  ngOnInit(): void {
    this.fetchPokemonList();
  }


  private fetchPokemonList(): void {
    this.pokemonService.getPokemonList(this.offset).pipe(
      map(response => response.results)
    ).subscribe(list => this.pokemonList.push(...list));
    this.pokemonList.sort((a, b) => this.splitIdPipe.transform(a.url) > this.splitIdPipe.transform(b.url) ? 1 : -1);
  }

  fetchMore(): void {
    this.offset += 48;
    this.fetchPokemonList();
  }
}
