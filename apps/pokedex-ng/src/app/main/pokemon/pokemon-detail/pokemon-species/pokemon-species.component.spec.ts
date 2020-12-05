import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { PokemonLanguageService } from '../../../../shared/services/pokemon-language.service';
import { PokemonSpeciesService } from '../../../../shared/services/pokemon-species.service';
import { PokemonVersionService } from '../../../../shared/services/pokemon-version.service';
import { PokemonEvolutionChainComponentStub } from './pokemon-evolution-chain/pokemon-evolution-chain.component.spec';
import { PokemonSpeciesInfoComponentStub } from './pokemon-species-info/pokemon-species-info.component.spec';
import { PokemonSpeciesComponent } from './pokemon-species.component';

describe('PokemonSpeciesComponent', () => {
  let component: PokemonSpeciesComponent;
  let fixture: ComponentFixture<PokemonSpeciesComponent>;

  const pokemonSpeciesService = {
    getPokemonSpecies: () => of(null),
  };
  const pokemonVersionService = {
    getVersionList: of([]),
  };
  const pokemonLanguageService = {
    getLanguageList: of([]),
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterModule, TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonSpeciesComponent, PokemonSpeciesInfoComponentStub, PokemonEvolutionChainComponentStub],
        providers: [
          { provide: PokemonSpeciesService, useValue: pokemonSpeciesService },
          { provide: PokemonVersionService, useValue: pokemonVersionService },
          { provide: PokemonLanguageService, useValue: pokemonLanguageService },
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
export class PokemonSpeciesComponentStub implements Partial<PokemonSpeciesComponent> {
  @Input() pokemonSpeciesId: string | number;
}
