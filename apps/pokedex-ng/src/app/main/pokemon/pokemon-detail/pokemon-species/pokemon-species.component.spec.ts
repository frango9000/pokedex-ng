import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Species } from '@pokedex-ng/domain';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  stubGameVersionServiceProvider,
  stubLanguageServiceProvider,
  stubSpeciesServiceProvider,
} from '../../../../shared/services/stubs';
import { PokemonSpeciesInfoComponent } from './pokemon-species-info/pokemon-species-info.component';
import { PokemonSpeciesComponent } from './pokemon-species.component';

@Component({ selector: 'app-pokemon-species-info', template: '' })
export class PokemonSpeciesInfoStubComponent implements Partial<PokemonSpeciesInfoComponent> {
  @Input() public pokemonSpecies: Species;
}

@Component({ selector: 'app-pokemon-evolution-chain', template: '' })
export class PokemonEvolutionChainStubComponent {
  @Input() public pokemonSpecies: Species;
}

describe('PokemonSpeciesComponent', () => {
  let component: PokemonSpeciesComponent;
  let fixture: ComponentFixture<PokemonSpeciesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterModule, TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonSpeciesComponent, PokemonSpeciesInfoStubComponent, PokemonEvolutionChainStubComponent],
        providers: [stubSpeciesServiceProvider, stubGameVersionServiceProvider, stubLanguageServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
