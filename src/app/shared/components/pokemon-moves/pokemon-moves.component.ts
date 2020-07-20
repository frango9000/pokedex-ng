import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PokemonMove} from '../../domain/pokemon-move';
import {PokemonMoveService} from '../../services/pokemon-move.service';

@Component({
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.scss']
})
export class PokemonMovesComponent implements OnInit {


  @Input() moveId: string | number;

  move$: Observable<PokemonMove>;

  constructor(private pokemonMoveService: PokemonMoveService) {
  }

  ngOnInit(): void {
    this.move$ = this.pokemonMoveService.getMove(this.moveId);
  }

}
