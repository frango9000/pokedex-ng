import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PxLocationAreaEncounter } from '@pokedex-ng/domain';
import { PokemonEncountersLocationComponent } from '../pokemon-encounters-location/pokemon-encounters-location.component';
import { PokemonEncountersVersionComponent } from './pokemon-encounters-version.component';

@Component({ selector: 'pokedex-ng-pokemon-encounters-location', template: '' })
export class StubPokemonEncountersLocationComponent implements Partial<PokemonEncountersLocationComponent> {
  @Input() public versionLocation: PxLocationAreaEncounter;
}

describe('PokemonEncountersVersionComponent', () => {
  let component: PokemonEncountersVersionComponent;
  let fixture: ComponentFixture<PokemonEncountersVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonEncountersVersionComponent, StubPokemonEncountersLocationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEncountersVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
