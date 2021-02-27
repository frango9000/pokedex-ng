import {
  Ability,
  ApiEntity,
  ApiResourceList,
  Pokemon,
  PokeType,
  PxAbility,
  PxPokemon,
  PxStat,
  PxType,
  Species,
  Stat,
} from '@pokedex-ng/domain';
import { Axios } from 'axios-observable';
import { delay, map, mergeMap, retry } from 'rxjs/operators';
import { AbstractGenerator } from '../model/abstract-generator';

export class PokemonGenerator extends AbstractGenerator<PokemonWithSpecies, PxPokemon> {
  getResourceName() {
    return 'pokemon';
  }

  mapResource(resource: PokemonWithSpecies): PxPokemon {
    return {
      name: resource.pokemon.name,
      id: resource.pokemon.id,
      types: resource.pokemon.types.map((type) => type.type.name),
      generation: this.getId(resource.species.generation.url),
    };
  }

  public generateResource(): void {
    Axios.get<ApiResourceList>(
      `${this.host}/${this.getResourceName()}?offset=${this.offset}&limit=${this.limit}`
    ).subscribe((res) => {
      this.total = res?.data?.results?.length || 0;
      console.log(`Total ${this.getResourceName()}: ${this.total}`);
      console.log(`Estimate ${this._getRemainingTime()} seconds`);
      res.data.results.forEach((resource) => {
        this.subject$.next(
          Axios.get<Pokemon>(resource.url).pipe(
            retry(10),
            delay(this.delay),
            map((value) => value.data),
            mergeMap((pokemon) =>
              Axios.get<Species>(pokemon.species.url).pipe(
                retry(10),
                delay(this.delay),
                map((value) => value.data),
                map((species) => ({ pokemon, species }))
              )
            )
          )
        );
      });
      this.subject$.complete();
    }, console.error);
  }

  protected getResourceId(resource: PokemonWithSpecies) {
    return resource.pokemon.id;
  }
}

interface PokemonWithSpecies extends ApiEntity {
  pokemon: Pokemon;
  species: Species;
}

export class TypeGenerator extends AbstractGenerator<PokeType, PxType> {
  getResourceName(): string {
    return 'type';
  }

  mapResource(resource: PokeType): PxType {
    return {
      name: resource.name,
      id: resource.id,
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
  getResourceName(): string {
    return 'ability';
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
  getResourceName(): string {
    return 'stat';
  }

  mapResource(resource: Stat): PxStat {
    return {
      name: resource.name,
      id: resource.id,
      names: this.filterAndMapNames(resource.names),
    };
  }
}
