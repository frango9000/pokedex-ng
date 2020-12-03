import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSpeciesInfoComponent } from './pokemon-species-info.component';

describe('PokemonSpeciesInfoComponent', () => {
  let component: PokemonSpeciesInfoComponent;
  let fixture: ComponentFixture<PokemonSpeciesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonSpeciesInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSpeciesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
