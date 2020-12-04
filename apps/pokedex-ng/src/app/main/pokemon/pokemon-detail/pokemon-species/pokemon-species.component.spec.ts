import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { PokemonSpecies } from '../../../../shared/domain/pokemon-species';
import { PokemonLanguageService } from '../../../../shared/services/pokemon-language.service';
import { PokemonMoveService } from '../../../../shared/services/pokemon-move.service';
import { PokemonVersionService } from '../../../../shared/services/pokemon-version.service';
import { SharedModule } from '../../../../shared/shared.module';
import { PokemonEvolutionLinkComponent } from './pokemon-evolution-chain/pokemon-evolution-link/pokemon-evolution-link.component';
import { PokemonSpeciesInfoComponent } from './pokemon-species-info/pokemon-species-info.component';

@Component({
  selector: 'app-pokemon-evolution-chain',
  template: '',
})
class PokemonEvolutionChainComponent {
  @Input() public pokemonSpecies: PokemonSpecies;
}

@Component({
  selector: 'app-pokemon-species',
  template: '',
})
class PokemonSpeciesComponent {
  @Input() pokemonSpeciesId: string | number;
}

describe('PokemonSpeciesComponent', () => {
  let component: PokemonSpeciesComponent;
  let fixture: ComponentFixture<PokemonSpeciesComponent>;

  const pokemonMoveService = {
    getPokemonSpecies: () => of(null),
  };
  const pokemonVersionService = {
    getVersionList: of([]),
    activeVersion$: of({}),
  };
  const pokemonLanguageService = {
    getLanguageList: of([]),
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterModule,
          TranslateModule.forRoot(),
          MDBBootstrapModule.forRoot(),
          SharedModule,
          // HttpClientTestingModule,
        ],
        declarations: [
          PokemonSpeciesComponent,
          PokemonSpeciesInfoComponent,
          PokemonEvolutionLinkComponent,
          PokemonEvolutionChainComponent,
        ],
        providers: [
          { provide: PokemonMoveService, useValue: pokemonMoveService },
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
