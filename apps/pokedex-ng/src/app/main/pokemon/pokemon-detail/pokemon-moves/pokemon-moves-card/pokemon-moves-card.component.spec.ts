import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMovesCardComponent } from './pokemon-moves-card.component';

describe('PokemonMovesCardComponent', () => {
  let component: PokemonMovesCardComponent;
  let fixture: ComponentFixture<PokemonMovesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonMovesCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMovesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
