import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonMoveComponent} from './pokemon-move.component';

describe('PokemonMovesComponent', () => {
  let component: PokemonMoveComponent;
  let fixture: ComponentFixture<PokemonMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonMoveComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
