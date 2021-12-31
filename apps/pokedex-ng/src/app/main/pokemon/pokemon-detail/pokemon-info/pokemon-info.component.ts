import { Component, Input } from '@angular/core';
import { Pokemon, PokeSlotType } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'pokedex-ng-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent {
  @Input() pokemon$: Observable<Pokemon>;

  getTypes(types: PokeSlotType[]): string[] {
    return types.map((type) => type.type.name);
  }
}
