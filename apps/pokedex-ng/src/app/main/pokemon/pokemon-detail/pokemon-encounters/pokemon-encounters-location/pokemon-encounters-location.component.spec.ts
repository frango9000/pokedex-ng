import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonEncounterVersionDetail } from '@pokedex-ng/domain';
import { PokemonEncountersDetailsComponent } from '../pokemon-encounters-detail/pokemon-encounters-details.component';
import { PokemonEncountersLocationComponent } from './pokemon-encounters-location.component';

@Component({ selector: 'pokedex-ng-pokemon-encounters-details', template: '' })
export class StubPokemonEncountersDetailsComponent implements Partial<PokemonEncountersDetailsComponent> {
  @Input() public encounterDetails: PokemonEncounterVersionDetail;
}

describe('PokemonEncountersLocationComponent', () => {
  let component: PokemonEncountersLocationComponent;
  let fixture: ComponentFixture<PokemonEncountersLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonEncountersLocationComponent, StubPokemonEncountersDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEncountersLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
