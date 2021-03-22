import { Component, Input, OnInit } from '@angular/core';
import {
  EvolutionChainLink,
  EvolutionDetail,
  PokemonEvolutionTriggerDetail,
  PokemonEvolutionTriggerDetails,
} from '@pokedex-ng/domain';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { EvolutionTriggerService } from '../../../../../../shared/services/evolution/evolution-trigger.service';
import { ItemService } from '../../../../../../shared/services/item/item.service';
import { LocationService } from '../../../../../../shared/services/location/location.service';

@Component({
  selector: 'app-pokemon-evolution-link',
  templateUrl: './pokemon-evolution-link.component.html',
  styleUrls: ['./pokemon-evolution-link.component.scss'],
})
export class PokemonEvolutionLinkComponent implements OnInit {
  @Input() link$: Observable<EvolutionChainLink>;

  constructor(
    private itemService: ItemService,
    private evolutionTriggerService: EvolutionTriggerService,
    private locationService: LocationService
  ) {}

  generatedContent$: BehaviorSubject<EvolutionChainLink> = new BehaviorSubject<EvolutionChainLink>(null);

  ngOnInit(): void {
    this.link$
      .pipe(
        tap(() => this.generatedContent$.next(null)),
        switchMap((link) =>
          forkJoin(this.nestedResourcesObservables(link)).pipe(
            catchError(undefined),
            map(() => link)
          )
        ),
        tap((link: EvolutionChainLink) => {
          link.evolution_details.forEach((evoDetail) => {
            evoDetail.processed_details = this.getEvolutionMethodText(evoDetail);
          });
          link.evolves_to.forEach((value) => {
            value.self$ = of(value).pipe(take(1));
          });
        })
      )
      .subscribe((link) => this.generatedContent$.next(link));
  }

  getEvolutionMethodText(method: EvolutionDetail): PokemonEvolutionTriggerDetails {
    const trigger: PokemonEvolutionTriggerDetail = { title: method?.trigger?.name };
    const conditions: PokemonEvolutionTriggerDetail[] = [];
    switch (method.trigger.name) {
      case 'level-up':
        trigger.value = method.min_level;
        break;
      case 'trade':
        trigger.value = method.trade_species?.name;
        break;
      case 'use-item':
        trigger.value = method.item?.name;
        trigger.translation = method.item?.name && `ITEM.${method.item.name}.NAME`;
        break;
    }
    if (method.location) {
      conditions.push({
        title: 'LOCATION',
        value: method.location.name,
        translation: `LOCATION.${method.location.name}.NAME`,
      });
    }
    if (method.known_move_type) {
      conditions.push({
        title: 'KNOWN_MOVE_TYPE',
        value: method.known_move_type.name,
        translation: `TYPE.${method.known_move_type.name}.NAME`,
      });
    }
    if (method.known_move) {
      conditions.push({
        title: 'KNOWN_MOVE',
        value: method.known_move.name,
        translation: `MOVE.${method.known_move.name}.NAME`,
      });
    }
    if (method.held_item) {
      conditions.push({
        title: 'HELD_ITEM',
        value: method.held_item.name,
        translation: `ITEM.${method.held_item.name}.NAME`,
      });
    }
    if (method.party_type) {
      conditions.push({
        title: 'PARTY_POKEMON_TYPE',
        value: method.party_type.name,
        translation: `TYPE.${method.party_type.name}.NAME`,
      });
    }
    if (method.relative_physical_stats) {
      conditions.push({
        title:
          'STATS_' +
          (method.relative_physical_stats > 0
            ? 'OFFENSIVE'
            : method.relative_physical_stats < 0
            ? 'DEFENSIVE'
            : 'BALANCED'),
      });
    }
    if (method.party_species) {
      conditions.push({ title: 'PARTY_POKEMON', value: method.party_species.name });
    }
    if (method.min_affection) {
      conditions.push({ title: 'MIN_AFFECTION', value: method.min_affection });
    }
    if (method.min_beauty) {
      conditions.push({ title: 'MIN_BEAUTY', value: method.min_beauty });
    }
    if (method.min_happiness) {
      conditions.push({ title: 'MIN_HAPPINESS', value: method.min_happiness });
    }
    if (method.gender) {
      conditions.push({ title: 'GENDER', value: method.gender });
    }
    if (method.time_of_day) {
      conditions.push({ title: 'TIME_OF_DAY', value: method.time_of_day });
    }
    if (method.needs_overworld_rain) {
      conditions.push({ title: 'NEEDS_OVERWORLD_RAIN' });
    }
    if (method.turn_upside_down) {
      conditions.push({ title: 'TURN_UPSIDE_DOWN' });
    }
    return { trigger, conditions };
  }

  private nestedResourcesObservables(link: EvolutionChainLink): Observable<any>[] {
    const nestedObservables: Observable<any>[] = [];

    link.evolution_details.forEach((value) => {
      nestedObservables.push(this.evolutionTriggerService.fetchApiOne(value.trigger.name));
      if (value.item) {
        nestedObservables.push(this.itemService.fetchApiOne(value.item.name));
      }
      if (value.held_item) {
        nestedObservables.push(this.itemService.fetchApiOne(value.held_item.name));
      }
      if (value.location) {
        nestedObservables.push(this.locationService.fetchApiOne(value.location.name));
      }
    });
    return nestedObservables.length ? nestedObservables : [of({})];
  }
}
