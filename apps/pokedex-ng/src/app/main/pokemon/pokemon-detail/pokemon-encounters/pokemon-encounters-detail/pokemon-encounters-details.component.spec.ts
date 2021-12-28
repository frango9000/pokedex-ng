import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  StubExpansionButtonComponent
} from '../../../../../shared/components/expansion-button/expansion-button.component.stub';

import { PokemonEncountersDetailsComponent } from './pokemon-encounters-details.component';

describe('PokemonEncountersDetailsComponent', () => {
  let component: PokemonEncountersDetailsComponent;
  let fixture: ComponentFixture<PokemonEncountersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonEncountersDetailsComponent, StubExpansionButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEncountersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
