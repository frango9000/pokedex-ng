import { Component, Input } from '@angular/core';
import { PxPokemon } from '@pokedex-ng/domain';
import { MDBModalService } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { PokemonService } from '../../../../shared/services/pokemon/pokemon.service';
import { PokemonTypeDamagesComponent } from '../../pokemon-detail/pokemon-type-damages/pokemon-type-damages.component';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
})
export class PokemonGridComponent {
  @Input() public pokemonList: PxPokemon[];

  constructor(private readonly pokemonService: PokemonService, private readonly modalService: MDBModalService) {
  }

  openTypeDamagesDialog(pokemonId: string | number) {
    this.pokemonService.fetchApiOne(pokemonId).subscribe((pokemon) => {
      this.modalService.show(PokemonTypeDamagesComponent, {
        class: 'modal-dialog-centered',
        data: { pokemon$: of(pokemon), showHeading: false },
      });
    });
  }
}
