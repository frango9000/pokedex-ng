import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Pokemon } from '@pokedex-ng/domain';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  private pokemonId: string | number;
  public pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemon = null;
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.route.params.subscribe((params: Params) => {
      this.pokemonId = params['pokemon'];
      this.pokemonService.getOnePokemon(this.pokemonId).subscribe((response) => {
        this.pokemon = response;
      });
    });
  }
}
