import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PxEncountersByVersion } from '@pokedex-ng/domain';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { stubPokemonServiceProvider } from 'apps/pokedex-ng/src/app/shared/services/pokemon/pokemon.service.stubs';
import { EMPTY } from 'rxjs';
import { PokemonEncountersVersionComponent } from './pokemon-encounters-version/pokemon-encounters-version.component';

import { PokemonEncountersComponent } from './pokemon-encounters.component';

@Component({ selector: 'pokedex-ng-pokemon-encounters-version', template: '' })
export class StubPokemonEncountersVersionComponent implements Partial<PokemonEncountersVersionComponent> {
  @Input() public versionLocationEncounters: PxEncountersByVersion;
}

describe('PokemonEncountersComponent', () => {
  let component: PokemonEncountersComponent;
  let fixture: ComponentFixture<PokemonEncountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [getTranslocoModule()],
      declarations: [PokemonEncountersComponent, StubPokemonEncountersVersionComponent],
      providers: [stubPokemonServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEncountersComponent);
    component = fixture.componentInstance;
    component.pokemon$ = EMPTY;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
