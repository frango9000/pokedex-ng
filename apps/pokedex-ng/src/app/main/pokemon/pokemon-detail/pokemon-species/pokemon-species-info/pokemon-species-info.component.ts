import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Species } from '@pokedex-ng/domain';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { EggGroupService } from '../../../../../shared/services/species/egg-group.service';
import { GrowthRateService } from '../../../../../shared/services/species/growth-rate.service';
import { PokemonColorService } from '../../../../../shared/services/species/pokemon-color.service';
import { PokemonHabitatService } from '../../../../../shared/services/species/pokemon-habitat.service';
import { PokemonShapeService } from '../../../../../shared/services/species/pokemon-shape.service';

@Component({
  selector: 'app-pokemon-species-info',
  templateUrl: './pokemon-species-info.component.html',
  styleUrls: ['./pokemon-species-info.component.scss'],
})
export class PokemonSpeciesInfoComponent implements OnInit, OnDestroy {
  @Input() public species$: Observable<Species>;

  public species: Species = null;

  private subscriptions = new Subscription();

  constructor(
    private eggGroupService: EggGroupService,
    private growthRateService: GrowthRateService,
    private pokemonColorService: PokemonColorService,
    private pokemonHabitatService: PokemonHabitatService,
    private pokemonShapeService: PokemonShapeService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(this._subscribeToFetchTranslations());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private _subscribeToFetchTranslations() {
    return this.species$
      .pipe(
        filter((species) => !!species),
        tap(() => (this.species = null)),
        switchMap((species: Species) =>
          forkJoin([
            this.growthRateService.fetchApiOne(species.growth_rate.name),
            this.pokemonColorService.fetchApiOne(species.color.name),
            this.pokemonHabitatService.fetchApiOne(species.habitat.name),
            this.pokemonShapeService.fetchApiOne(species.shape.name),
            ...species.egg_groups?.map((eggGroup) => this.eggGroupService.fetchApiOne(eggGroup.name)),
          ]).pipe(map(() => species))
        )
      )
      .subscribe((species) => (this.species = species));
  }
}
