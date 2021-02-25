import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AppNavbarService } from '../../../shared/services/app-navbar.service';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  private pokemon$: BehaviorSubject<Pokemon> = new BehaviorSubject<Pokemon>(null);

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private appNavbarService: AppNavbarService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => this.pokemonService.apiOnePokemon(params['pokemon'])))
      .subscribe((response) => {
        this.pokemon$.next(null);
        this.pokemon$.next(response);
      });
    this.appNavbarService.showVersionGroupPicker();
  }

  getDisplayedPokemon$(): Observable<Pokemon> {
    return this.pokemon$.asObservable().pipe(filter((pokemon) => !!pokemon));
  }

  ngOnDestroy(): void {
    this.appNavbarService.hideVersionGroupPicker();
  }
}
