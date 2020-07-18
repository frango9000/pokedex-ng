import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../../shared/domain/pokemon';
import {PokemonService} from '../../../shared/services/pokemon.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})
export class PokemonHomeComponent implements OnInit {


  public pokemonList: Pokemon[];

  public gridMode = false;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().pipe(
      map(response => response.results)
    ).subscribe(list => this.pokemonList = list);
  }


}
