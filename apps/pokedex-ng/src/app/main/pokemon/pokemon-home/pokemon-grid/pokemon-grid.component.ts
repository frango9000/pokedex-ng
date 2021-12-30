import { Component, Input } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PxPokemon } from '@pokedex-ng/domain';
import { MDBModalService } from 'angular-bootstrap-md';
import { exhaustMap, of, Subject } from 'rxjs';
import { PokemonService } from '../../../../shared/services/pokemon/pokemon.service';
import { PokemonTypeDamagesComponent } from '../../pokemon-detail/pokemon-type-damages/pokemon-type-damages.component';

@UntilDestroy()
@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss'],
})
export class PokemonGridComponent {
  @Input() public pokemonList: PxPokemon[];

  private readonly typeDamagesDialogClick: Subject<string | number> = new Subject<string | number>();

  constructor(private readonly pokemonService: PokemonService, private readonly modalService: MDBModalService) {
    this.typeDamagesDialogClick
      .pipe(
        untilDestroyed(this),
        exhaustMap((pokemonId: string | number) => this.pokemonService.fetchApiOne(pokemonId))
      )
      .subscribe((pokemon) => {
        this.modalService.show(PokemonTypeDamagesComponent, {
          class: 'modal-dialog-centered',
          data: { pokemon$: of(pokemon), showHeading: false },
        });
      });
  }

  openTypeDamagesDialog(pokemonId: string | number) {
    this.typeDamagesDialogClick.next(pokemonId);
  }
}
