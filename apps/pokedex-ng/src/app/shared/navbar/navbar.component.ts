import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonVersionService } from '../services/pokemon-version.service';
import { ApiNamedResource } from '../domain/api-resource';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public versions$: Observable<ApiNamedResource[]>;

  constructor(public pokemonVersionService: PokemonVersionService) {}

  ngOnInit(): void {
    this.versions$ = this.pokemonVersionService.getVersionList();
  }
}
