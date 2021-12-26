import {
  Ability,
  ApiEntity,
  NamedApiResource,
  Pokemon,
  PokemonType,
  PxAbility,
  PxPokemon,
  PxStat,
  PxType,
  Species,
  Stat,
} from '@pokedex-ng/domain';
import { Axios } from 'axios-observable';
import { Observable } from 'rxjs';
import { map, mergeMap, retry } from 'rxjs/operators';
import { AbstractGenerator } from '../model/abstract-generator';

export class PokemonGenerator extends AbstractGenerator<PokemonWithSpecies, PxPokemon> {
  constructor() {
    super('pokemon');
  }

  protected mapResource(resource: PokemonWithSpecies): PxPokemon {
    return {
      id: resource.pokemon.id,
      name: resource.pokemon.name,
      types: resource.pokemon.types.map((type) => type.type.name),
      generation: this.getId(resource.species.generation.url),
    };
  }

  protected _fetchOne(namedApiResource: NamedApiResource<Pokemon>): Observable<PokemonWithSpecies> {
    return super._fetchOne(namedApiResource).pipe(
      map((pokemon) => pokemon as any as Pokemon),
      mergeMap((pokemon: Pokemon) =>
        Axios.get<Species>(pokemon.species.url).pipe(
          retry(10),
          map((value) => value.data),
          map((species) => ({ pokemon, species }))
        )
      )
    );
  }
}

interface PokemonWithSpecies extends ApiEntity {
  pokemon: Pokemon;
  species: Species;
}

export class TypeGenerator extends AbstractGenerator<PokemonType, PxType> {
  constructor() {
    super('type');
  }

  mapResource(resource: PokemonType): PxType {
    return {
      id: resource.id,
      name: resource.name,
      damage_relations: {
        double_damage_from: resource.damage_relations.double_damage_from.map((value) => value.name),
        double_damage_to: resource.damage_relations.double_damage_to.map((value) => value.name),
        half_damage_from: resource.damage_relations.half_damage_from.map((value) => value.name),
        half_damage_to: resource.damage_relations.half_damage_to.map((value) => value.name),
        no_damage_from: resource.damage_relations.no_damage_from.map((value) => value.name),
        no_damage_to: resource.damage_relations.no_damage_to.map((value) => value.name),
      },
      names: this.filterAndMapNames(resource.names),
    };
  }
}

export class AbilitiesGenerator extends AbstractGenerator<Ability, PxAbility> {
  constructor() {
    super('ability');
  }

  mapResource(resource: Ability): PxAbility {
    return {
      id: resource.id,
      name: resource.name,
      generation: this.getId(resource.generation?.url),
      names: this.filterAndMapNames(resource.names),
    };
  }
}

export class StatGenerator extends AbstractGenerator<Stat, PxStat> {
  constructor() {
    super('stat');
  }

  mapResource(resource: Stat): PxStat {
    return {
      id: resource.id,
      name: resource.name,
      names: this.filterAndMapNames(resource.names),
    };
  }
}
