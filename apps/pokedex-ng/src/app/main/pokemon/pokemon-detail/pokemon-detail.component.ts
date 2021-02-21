import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from '@pokedex-ng/domain';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  public pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemon = null;
    this.route.params.subscribe((params: Params) => {
      this.pokemonService.apiOnePokemon(params['pokemon']).subscribe((response) => {
        this.pokemon = response;
      });
    });
  }
}
