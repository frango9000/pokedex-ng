import {Component, OnInit} from '@angular/core';
import {PokemonLanguageService} from '../services/pokemon-language.service';
import {Observable} from 'rxjs';
import {NamedResource} from '../domain/named-resource';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public languages: Observable<NamedResource[]>;

  constructor(public pokemonLanguageService: PokemonLanguageService) {
    this.languages = pokemonLanguageService.getPokemonList().pipe(
      map(value => value.results)
    );
  }

  ngOnInit(): void {
  }

}
