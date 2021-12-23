import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { StubWithVersionGroupPipe } from '../../../../../shared/pipes/stubs';
import {
  stubEggGroupServiceProvider,
  stubGrowthRateServiceProvider,
  stubPokemonColorServiceProvider,
  stubPokemonHabitatServiceProvider,
  stubPokemonShapeServiceProvider,
} from '../../../../../shared/services/species/species.service.stubs';
import { stubVersionGroupServiceProvider } from '../../../../../shared/services/stubs';
import { PokemonSpeciesInfoComponent } from './pokemon-species-info.component';

describe('PokemonSpeciesInfoComponent', () => {
  let component: PokemonSpeciesInfoComponent;
  let fixture: ComponentFixture<PokemonSpeciesInfoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [getTranslocoModule(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonSpeciesInfoComponent, StubWithVersionGroupPipe],
        providers: [
          stubVersionGroupServiceProvider,
          stubEggGroupServiceProvider,
          stubGrowthRateServiceProvider,
          stubPokemonColorServiceProvider,
          stubPokemonHabitatServiceProvider,
          stubPokemonShapeServiceProvider,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSpeciesInfoComponent);
    component = fixture.componentInstance;
    component.species$ = of();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
