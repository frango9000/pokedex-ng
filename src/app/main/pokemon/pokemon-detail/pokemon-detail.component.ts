import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PokemonService} from '../../../shared/services/pokemon.service';
import {Pokemon} from '../../../shared/domain/pokemon';
import {PokemonSpecies} from '../../../shared/domain/pokemon-species';
import {NamedResource} from '../../../shared/domain/named-resource';
import {PokemonLanguageService} from '../../../shared/services/pokemon-language.service';

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
              private pokemonLanguageService: PokemonLanguageService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.pokemonId = params['pokemon'];
      this.pokemonService.getPokemon(this.pokemonId).subscribe(response => {
        this.pokemon = response;
        this.pokemonService.getPokemonSpecies(this.pokemon.species.name).subscribe(response2 => {
          this.pokemonSpecies = response2;
        });
      });
    });
  }

  getLang(genera: [{ language: NamedResource }]): any {
    return genera.find(value => value.language.name === this.pokemonLanguageService.displayLanguage);
  }
}
