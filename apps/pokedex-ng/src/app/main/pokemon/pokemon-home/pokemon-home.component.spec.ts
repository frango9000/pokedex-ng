import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PxPokemon } from '@pokedex-ng/domain';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StubFilterToolbarComponent } from '../../../shared/components/filter-toolbar/filter-toolbar.component.stub';
import { StubTypesFilterComponent } from '../../../shared/components/filters/types-filter/types-filter.component.stub';
import { PokemonService } from '../../../shared/services/pokemon/pokemon.service';
import {
  stubAppNavbarServiceProvider,
  stubFilterServiceProvider,
  stubPokemonServiceProvider,
} from '../../../shared/services/stubs';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';
import { PokemonHomeComponent } from './pokemon-home.component';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';

@Component({ selector: 'app-pokemon-table', template: '' })
export class StubPokemonTableComponent implements Partial<PokemonTableComponent> {
  @Input() public pokemonList: PxPokemon[];
}

@Component({ selector: 'app-pokemon-grid', template: '' })
export class StubPokemonGridComponent implements Partial<PokemonGridComponent> {
  @Input() public pokemonList: PxPokemon[];
}

describe('PokemonHomeComponent', () => {
  let component: PokemonHomeComponent;
  let fixture: ComponentFixture<PokemonHomeComponent>;
  let pokemonService: PokemonService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [InfiniteScrollModule],
        declarations: [
          PokemonHomeComponent,
          StubPokemonGridComponent,
          StubPokemonTableComponent,
          StubFilterToolbarComponent,
          StubTypesFilterComponent,
        ],
        providers: [stubPokemonServiceProvider, stubFilterServiceProvider, stubAppNavbarServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomeComponent);
    pokemonService = TestBed.inject(PokemonService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
