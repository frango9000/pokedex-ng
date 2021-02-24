import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, Species } from '@pokedex-ng/domain';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { splitResourceId } from '../../../../shared/pipes/resource-id.pipe';
import { SpeciesService } from '../../../../shared/services/species.service';

@Component({
  selector: 'app-pokemon-species',
  templateUrl: './pokemon-species.component.html',
  styleUrls: ['./pokemon-species.component.scss'],
})
export class PokemonSpeciesComponent implements OnInit {
  @Input() pokemon$: Observable<Pokemon>;

  private pokemonSpecies$: Subject<Species> = new BehaviorSubject<Species>(null);

  constructor(private speciesService: SpeciesService) {}

  ngOnInit(): void {
    this.pokemon$
      .pipe(switchMap((value) => this.speciesService.fetchApiOneSpecies(value.species.name)))
      .subscribe((specie) => {
        this.pokemonSpecies$.next(specie);
      });
  }

  getPokemonSpecies$(): Observable<Species> {
    return this.pokemonSpecies$.pipe(filter((specie) => !!specie));
  }

  getSpeciesEvolutionChainId(): Observable<number> {
    return this.getPokemonSpecies$().pipe(map((specie) => splitResourceId(specie.evolution_chain.url)));
  }
}
