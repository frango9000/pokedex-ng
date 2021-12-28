import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonLocationAreaEncounters, PxEncountersByVersion } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonService } from '../../../../shared/services/pokemon/pokemon.service';

@Component({
  selector: 'pokedex-ng-pokemon-encounters',
  templateUrl: './pokemon-encounters.component.html',
  styleUrls: ['./pokemon-encounters.component.scss'],
})
export class PokemonEncountersComponent implements OnInit {
  @Input() public pokemon$: Observable<Pokemon>;

  public readonly pokemonEncounters$: BehaviorSubject<PxEncountersByVersion[]> = new BehaviorSubject<
    PxEncountersByVersion[]
  >(null);

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemon$
      .pipe(
        switchMap((pokemon) => this.pokemonService.fetchPokemonEncounters(pokemon)),
        map(this.sortByVersion)
      )
      .subscribe((encounters) => this.pokemonEncounters$.next(encounters));
  }

  sortByVersion(encounters: PokemonLocationAreaEncounters[]): PxEncountersByVersion[] {
    const sortedByVersion: PxEncountersByVersion[] = [];
    encounters.forEach((encounter) => {
      encounter.version_details.forEach((versionDetails) => {
        const version = sortedByVersion.find(
          (encountersByVersion) => encountersByVersion.version.name == versionDetails.version.name
        );
        const versionEncounter = {
          version_detail: versionDetails,
          location_area: encounter.location_area,
        };
        versionEncounter.version_detail.encounter_details.forEach((detail) => {
          if (detail.method.name === 'gift') {
            versionEncounter.version_detail.max_chance -= 100;
          }
        });
        if (version) {
          version.version_location_encounters.push(versionEncounter);
        } else {
          sortedByVersion.push({ version: versionDetails.version, version_location_encounters: [versionEncounter] });
        }
      });
    });
    return sortedByVersion;
  }
}
