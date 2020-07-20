import {Component, OnInit} from '@angular/core';
import {PokemonLanguageService} from '../services/pokemon-language.service';
import {Observable} from 'rxjs';
import {NamedResource} from '../domain/named-resource';
import {map} from 'rxjs/operators';
import {PokemonVersionService} from '../services/pokemon-version.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public languages$: Observable<NamedResource[]>;
  public versions$: Observable<NamedResource[]>;

  constructor(public pokemonLanguageService: PokemonLanguageService,
              public pokemonVersionService: PokemonVersionService) {

  }

  ngOnInit(): void {
    this.languages$ = this.pokemonLanguageService.getLanguageList().pipe(
      map(value => value.results)
    );
    this.versions$ = this.pokemonVersionService.getVersionList().pipe(
      map(value => value.results)
    );
  }

}
