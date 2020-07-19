import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PokemonService} from '../../../shared/services/pokemon.service';
import {Pokemon} from '../../../shared/domain/pokemon';
import {ResourceIdPipe} from '../../../shared/pipes/resource-id.pipe';
import {PokemonSpecies} from '../../../shared/domain/pokemon-species';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  private pokemonId: string | number;
  public pokemon: Pokemon;
  public pokemonSpecies: PokemonSpecies;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService,
              private resourceIdPipe: ResourceIdPipe) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.pokemonId = params['pokemon'];
      this.pokemonService.getPokemon(this.pokemonId).subscribe(response => {
        this.pokemon = response;
        this.pokemonService.getPokemonSpecies(this.resourceIdPipe.transform(this.pokemon.species.url)).subscribe(response2 => {
          this.pokemonSpecies = response2;
        });
      });
    });
  }

}
