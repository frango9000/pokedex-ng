import { Component, OnInit } from '@angular/core';
import { NamedApiResource } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { GameVersionService } from '../../services/game-version.service';

@Component({
  selector: 'pokedex-ng-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public versions$: Observable<NamedApiResource[]>;

  constructor(public pokemonVersionService: GameVersionService) {}

  ngOnInit(): void {
    this.versions$ = this.pokemonVersionService.getAllVersionGroups();
  }
}
