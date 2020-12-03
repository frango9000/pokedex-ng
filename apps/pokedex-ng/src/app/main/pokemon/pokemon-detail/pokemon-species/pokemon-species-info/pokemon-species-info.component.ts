import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PokemonSpecies } from '../../../../../shared/domain/pokemon-species';
import { PokemonVersionService } from '../../../../../shared/services/pokemon-version.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-species-info',
  templateUrl: './pokemon-species-info.component.html',
  styleUrls: ['./pokemon-species-info.component.scss'],
})
export class PokemonSpeciesInfoComponent implements OnInit, OnDestroy {
  @Input() public pokemonSpecies: PokemonSpecies;

  activeVersion: string = 'en';
  private versionSub: Subscription;

  constructor(private pokemonVersionService: PokemonVersionService) {}

  ngOnInit(): void {
    this.versionSub = this.pokemonVersionService.activeVersion$.subscribe(
      (value) => (this.activeVersion = value)
    );
  }

  ngOnDestroy(): void {
    this.versionSub.unsubscribe();
  }
}
