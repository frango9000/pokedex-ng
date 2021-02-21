import {
  Ability,
  ApiResource,
  GameVersionGroup,
  Generation,
  Item,
  Machine,
  Move,
  NamedApiAbility,
  NamedApiItem,
  NamedApiLanguage,
  NamedApiMove,
  NamedApiPokemon,
  NamedApiPokemonType,
  NamedApiResourceList,
  NamedApiVersionGroup,
  Pokemon,
  PokemonLanguage,
  PokemonType,
  Species,
} from '@pokedex-ng/domain';
import { Axios } from 'axios-observable';
import * as fs from 'fs';
import { Observable, Subject } from 'rxjs';
import { concatAll, delay, filter, map, mergeMap, retry } from 'rxjs/operators';

export abstract class AbstractGenerator<T extends ApiResource, N extends ApiResource> {
  protected host = 'https://pokeapi.co/api/v2';
  protected filePath = './apps/pokedex-ng/src/assets/data';
  protected append = false;
  protected total = 0;
  protected offset = 0;
  protected limit = 9999;
  protected delay = 200;

  protected list = [];
  protected subject$: Subject<Observable<T>> = new Subject<Observable<T>>();

  constructor() {
    this.subject$.pipe(concatAll()).subscribe({
      next: this.onNext.bind(this),
      error: this.onError.bind(this),
      complete: this.onComplete.bind(this),
    });
  }

  public setAppend(append: boolean): AbstractGenerator<T, N> {
    this.append = append;
    return this;
  }

  public setOffset(offset: number): AbstractGenerator<T, N> {
    this.offset = offset;
    return this;
  }

  public setLimit(limit: number): AbstractGenerator<T, N> {
    this.limit = limit;
    return this;
  }

  public setDelay(delay: number): AbstractGenerator<T, N> {
    this.delay = delay;
    return this;
  }

  protected abstract mapResource(resource: T): N;

  protected abstract getResourceName(): string;

  protected onNext(resource: T): void {
    this.list.push(this.mapResource(resource));
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(
      `${this._getPercentage()}% | [${this.list.length}/${
        this.total
      }] | ${this._getRemainingTime()}s | ${this.getResourceName()} id: ${this.getResourceId(resource)}`
    );
  }

  protected onComplete(): void {
    if (this.list.length > 0) {
      console.log(
        `\nResource ${this.getResourceName()} generated. [${this.list.length}/${this.total}]${
          this.list.length !== this.total ? ' -' + (this.total - this.list.length) : ''
        }`
      );
      const writeOrAppend = this.append ? fs.appendFileSync : fs.writeFileSync;
      writeOrAppend(`${this.filePath}/${this.getResourceName()}.json`, JSON.stringify(this.list));
      console.log(`Resource ${this.getResourceName()} written to file.`);
    } else {
      console.log('No Resources found');
    }
  }

  protected onError(err) {
    console.log(`\n${this._getPercentage()}% | ${this.getResourceName()}: Error --> ${this.list.length}/${this.total}`);
    console.trace('\n' + err);
    this.onComplete();
  }

  public generateResource(): void {
    Axios.get<NamedApiResourceList>(
      `${this.host}/${this.getResourceName()}?offset=${this.offset}&limit=${this.limit}`
    ).subscribe((res) => {
      this.total = res?.data?.results?.length || 0;
      console.log(`Total ${this.getResourceName()}: ${this.total}`);
      console.log(`Estimate ${this._getRemainingTime()} seconds`);
      res.data.results.forEach((resource) => {
        this.subject$.next(
          Axios.get<T>(resource.url).pipe(
            retry(10),
            delay(this.delay),
            map((value) => value.data),
            filter((value) => this.filterResources(value))
          )
        );
      });
      this.subject$.complete();
    }, console.error);
  }

  protected _getPercentage(): number {
    return Math.trunc((this.list.length * 100) / this.total);
  }

  protected _getRemainingTime(): number {
    return Math.trunc((this.total - this.list.length) / (1000 / this.delay));
  }

  protected getResourceId(resource: T) {
    return resource.id;
  }

  protected filterResources(resource: T) {
    return !!resource;
  }
}

function getId(url: string): number {
  try {
    return Number(url?.split('/').reverse()[1]) || 0;
  } catch (e) {
    return 0;
  }
}

interface PokemonWithGeneration extends ApiResource {
  pokemon: Pokemon;
  species: Species;
}

export class PokemonGenerator extends AbstractGenerator<PokemonWithGeneration, NamedApiPokemon> {
  getResourceName() {
    return 'pokemon';
  }

  mapResource(resource: PokemonWithGeneration): NamedApiPokemon {
    return {
      name: resource.pokemon.name,
      id: resource.pokemon.id,
      types: resource.pokemon.types.map((type) => type.type.name),
      generation: getId(resource.species.generation.url),
    };
  }

  public generateResource(): void {
    Axios.get<NamedApiResourceList>(
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

  protected getResourceId(resource: PokemonWithGeneration) {
    return resource.pokemon.id;
  }
}

export class MovesGenerator extends AbstractGenerator<Move, NamedApiMove> {
  getResourceName(): string {
    return 'move';
  }

  mapResource(resource: Move): NamedApiMove {
    return {
      name: resource.name,
      id: resource.id,
      accuracy: resource.accuracy,
      crit_rate: resource.meta?.crit_rate,
      generation: getId(resource.generation?.url),
      names: resource.names.map((name) => ({ name: name.name, language: name.language.name })),
      power: resource.power,
      pp: resource.pp,
      type: resource.type.name,
    };
  }
}

export class AbilitiesGenerator extends AbstractGenerator<Ability, NamedApiAbility> {
  getResourceName(): string {
    return 'ability';
  }

  mapResource(resource: Ability): NamedApiAbility {
    return {
      id: resource.id,
      name: resource.name,
      generation: getId(resource.generation?.url),
      names: resource.names.map((name) => ({ name: name.name, language: name.language.name })),
    };
  }
}

export class VersionGroupGenerator extends AbstractGenerator<GameVersionGroup, NamedApiVersionGroup> {
  getResourceName(): string {
    return 'version-group';
  }

  mapResource(resource: GameVersionGroup): NamedApiVersionGroup {
    return {
      name: resource.name,
      id: resource.id,
      generation: getId(resource.generation.url),
      order: resource.order,
      versions: resource.versions.map((value) => value.name),
    };
  }
}

export class LanguageGenerator extends AbstractGenerator<PokemonLanguage, NamedApiLanguage> {
  getResourceName(): string {
    return 'language';
  }

  mapResource(resource: PokemonLanguage): NamedApiLanguage {
    return {
      name: resource.name,
      id: resource.id,
      iso3166: resource.iso3166,
      names: resource.names.map((name) => ({ name: name.name, language: name.language.name })),
    };
  }

  protected filterResources(resource: PokemonLanguage): boolean {
    return super.filterResources(resource) && resource.names.length && resource.official;
  }
}

export class TypeGenerator extends AbstractGenerator<PokemonType, NamedApiPokemonType> {
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
      names: resource.names.map((name) => ({ name: name.name, language: name.language.name })),
    };
  }
}

export class ItemGenerator extends AbstractGenerator<Item, NamedApiItem> {
  getResourceName(): string {
    return 'item';
  }

  mapResource(resource: Item): NamedApiItem {
    return {
      name: resource.name,
      id: resource.id,
      category: resource.category.name,
      cost: resource.cost,
      names: resource.names.map((name) => ({ name: name.name, language: name.language.name })),
      sprite: resource.sprites.default,
    };
  }
}

export class MachineGenerator extends AbstractGenerator<Machine, Machine> {
  getResourceName(): string {
    return 'machine';
  }

  mapResource(resource: Machine): Machine {
    return resource;
  }
}

export class GenerationGenerator extends AbstractGenerator<Generation, Generation> {
  getResourceName(): string {
    return 'generation';
  }

  mapResource(resource: Generation): Generation {
    return resource;
  }
}
