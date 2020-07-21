import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonAbilitiesComponent} from './pokemon-abilities.component';

describe('PokemonAbilitiesComponent', () => {
  let component: PokemonAbilitiesComponent;
  let fixture: ComponentFixture<PokemonAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonAbilitiesComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
