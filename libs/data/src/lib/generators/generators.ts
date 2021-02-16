import {
  Item,
  Move,
  NamedApiItem,
  NamedApiLanguage,
  NamedApiMove,
  NamedApiPokemon,
  NamedApiPokemonType,
  NamedAPIResourceList,
  NamedApiVersionGroup,
  Pokemon,
  PokemonLanguage,
  PokemonType,
  VersionGroup,
} from '@pokedex-ng/domain';
import { Axios } from 'axios-observable';
import fs from 'fs';
import { Observable, Subject } from 'rxjs';
import { concatAll, map } from 'rxjs/operators';

export abstract class AbstractGenerator<T, N> {
  private host = 'https://pokeapi.co/api/v2';
  private filePath = './libs/data/src/lib/data';
  private total = 0;
  private list = [];
  private subject$: Subject<Observable<T>> = new Subject<Observable<T>>();

  constructor() {
    this.subject$.pipe(concatAll()).subscribe({
      next: this.onNext.bind(this),
      error: this.onError.bind(this),
      complete: this.onComplete.bind(this),
    });
  }

  abstract mapResource(resource: T): N;

  abstract getResourceName(): string;

  onNext(resource: T) {
    // console.log(resource);
    this.list.push(this.mapResource(resource));
  }

  onComplete(): void {
    console.log(
      `Resource ${this.getResourceName()} generated. [${this.list.length}/${this.total}]${
        this.list.length !== this.total ? ' -' + (this.total - this.list.length) : ''
      }`
    );
    fs.writeFileSync(`${this.filePath}/${this.getResourceName()}.json`, JSON.stringify(this.list));
    console.log(`Resource ${this.getResourceName()} written to file.`);
  }

  onError = () => console.error;

  generateResource() {
    Axios.get<NamedAPIResourceList>(`${this.host}/${this.getResourceName()}`).subscribe((countResponse) => {
      this.total = 10 || countResponse?.data?.count;
      Axios.get<NamedAPIResourceList>(`${this.host}/${this.getResourceName()}?limit=${this.total}`).subscribe(
        (fullListResponse) => {
          fullListResponse.data.results.forEach((resource) => {
            this.subject$.next(Axios.get<T>(resource.url).pipe(map((value) => value.data)));
          });
          this.subject$.complete();
        }
      );
    });
  }
}

export class PokemonGenerator extends AbstractGenerator<Pokemon, NamedApiPokemon> {
  getResourceName() {
    return 'pokemon';
  }

  mapResource(resource: Pokemon): NamedApiPokemon {
    return {
      name: resource.name,
      id: resource.id,
      types: resource.types.map((type) => type.type.name),
    };
  }
}

export class PokemonMovesGenerator extends AbstractGenerator<Move, NamedApiMove> {
  getResourceName(): string {
    return 'move';
  }

  mapResource(resource: Move): NamedApiMove {
    return {
      name: resource.name,
      id: resource.id,
      accuracy: resource.accuracy,
      crit_rate: resource.meta.crit_rate,
      generation: resource.generation.name,
      names: resource.names.map((name) => ({ name: name.name, language: name.language.name })),
      power: resource.power,
      pp: resource.pp,
      type: resource.type.name,
    };
  }
}

export class PokemonVersionGenerator extends AbstractGenerator<VersionGroup, NamedApiVersionGroup> {
  getResourceName(): string {
    return 'version-group';
  }

  mapResource(resource: VersionGroup): NamedApiVersionGroup {
    return {
      name: resource.name,
      id: resource.id,
      generation: resource.generation.name,
      order: resource.order,
      versions: resource.versions.map((value) => value.name),
    };
  }
}

export class PokemonLanguageGenerator extends AbstractGenerator<PokemonLanguage, NamedApiLanguage> {
  getResourceName(): string {
    return 'language';
  }

  mapResource(resource: PokemonLanguage): NamedApiLanguage {
    return {
      name: resource.name,
      id: resource.id,
      iso3166: resource.iso3166,
    };
  }
}

export class PokemonTypeGenerator extends AbstractGenerator<PokemonType, NamedApiPokemonType> {
  getResourceName(): string {
    return 'type';
  }

  mapResource(resource: PokemonType): NamedApiPokemonType {
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
    };
  }
}

export class PokemonItemGenerator extends AbstractGenerator<Item, NamedApiItem> {
  getResourceName(): string {
    return 'item';
  }

  mapResource(resource: Item): NamedApiItem {
    return {
      name: resource.name,
      id: resource.id,
      category: resource.category.name,
      cost: resource.cost,
      names: resource.names,
      sprite: resource.sprites.default,
    };
  }
}
