import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { pokemonLanguageStubServiceProvider } from '../../../../shared/services/pokemon-language.service.spec';
import { pokemonSpeciesStubServiceProvider } from '../../../../shared/services/pokemon-species.service';
import { pokemonVersionStubServiceProvider } from '../../../../shared/services/pokemon-version.service.spec';
import { PokemonEvolutionChainStubComponent } from './pokemon-evolution-chain/pokemon-evolution-chain.component.spec';
import { PokemonSpeciesInfoStubComponent } from './pokemon-species-info/pokemon-species-info.component.spec';
import { PokemonSpeciesComponent } from './pokemon-species.component';

describe('PokemonSpeciesComponent', () => {
  let component: PokemonSpeciesComponent;
  let fixture: ComponentFixture<PokemonSpeciesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterModule, TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonSpeciesComponent, PokemonSpeciesInfoStubComponent, PokemonEvolutionChainStubComponent],
        providers: [
          pokemonSpeciesStubServiceProvider,
          pokemonVersionStubServiceProvider,
          pokemonLanguageStubServiceProvider,
        ],
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

@Component({ selector: 'app-pokemon-species', template: '' })
export class PokemonSpeciesStubComponent implements Partial<PokemonSpeciesComponent> {
  @Input() pokemonSpeciesId: string | number;
}
