import { Component, OnInit } from '@angular/core';
import { NamedApiResource } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { PokemonVersionService } from '../services/pokemon-version.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public versions$: Observable<NamedApiResource[]>;

  constructor(public pokemonVersionService: PokemonVersionService) {}

  ngOnInit(): void {
    this.versions$ = this.pokemonVersionService.getVersionList();
  }
}
