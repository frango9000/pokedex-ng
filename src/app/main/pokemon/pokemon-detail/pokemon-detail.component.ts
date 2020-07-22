import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PokemonService} from '../../../shared/services/pokemon.service';
import {Pokemon} from '../../../shared/domain/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  private pokemonId: string | number;
  public pokemon: Pokemon;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.pokemonId = params['pokemon'];
      this.pokemonService.getPokemon(this.pokemonId).subscribe(response => {
        this.pokemon = response;
      });
    });
  }
}
