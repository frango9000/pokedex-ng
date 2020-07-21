import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PokemonMove} from '../../../../../shared/domain/pokemon-move';
import {PokemonMoveService} from '../../../../../shared/services/pokemon-move.service';

@Component({
  selector: 'app-pokemon-move',
  templateUrl: './pokemon-move.component.html',
  styleUrls: ['./pokemon-move.component.scss']
})
export class PokemonMoveComponent implements OnInit {


  @Input() moveId: string | number;

  move$: Observable<PokemonMove>;

  constructor(private pokemonMoveService: PokemonMoveService) {
  }

  ngOnInit(): void {
    this.move$ = this.pokemonMoveService.getMove(this.moveId);
  }

}
