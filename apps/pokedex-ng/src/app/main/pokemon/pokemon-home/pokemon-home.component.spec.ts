import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NamedApiPokemon } from '@pokedex-ng/domain';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StubGenerationFilterComponent } from '../../../shared/components/filters/generation-filter/generation-filter.component.stub';
import { StubTypeFilterComponent } from '../../../shared/components/filters/generation-filter/type-filter.component.stub';
import { stubFilterServiceProvider } from '../../../shared/services/filter.service.stub';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { StubPokemonService, stubPokemonServiceProvider } from '../../../shared/services/pokemon.service.stub';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';
import { PokemonHomeComponent } from './pokemon-home.component';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';

@Component({ selector: 'app-pokemon-table', template: '' })
export class StubPokemonTableComponent implements Partial<PokemonTableComponent> {
  @Input() public pokemonList: NamedApiPokemon[];
}

@Component({ selector: 'app-pokemon-grid', template: '' })
export class StubPokemonGridComponent implements Partial<PokemonGridComponent> {
  @Input() public pokemonList: NamedApiPokemon[];
}

describe('PokemonHomeComponent', () => {
  let component: PokemonHomeComponent;
  let fixture: ComponentFixture<PokemonHomeComponent>;
  let pokemonStubService: StubPokemonService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [InfiniteScrollModule],
        declarations: [
          PokemonHomeComponent,
          StubPokemonGridComponent,
          StubPokemonTableComponent,
          StubGenerationFilterComponent,
          StubTypeFilterComponent,
        ],
        providers: [stubPokemonServiceProvider, stubFilterServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomeComponent);
    pokemonStubService = (TestBed.inject(PokemonService) as any) as StubPokemonService;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch pokemon list on init', () => {
    expect(pokemonStubService.getAllPokemonLocal).toHaveBeenCalledTimes(1);
  });
});
