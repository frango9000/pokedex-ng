import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NamedApiPokemon } from '@pokedex-ng/domain';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StubFilterComponent } from '../../../shared/components/filter/filter.component.stub';
import { stubFilterServiceProvider } from '../../../shared/services/filter.service.stub';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { PokemonStubService, pokemonStubServiceProvider } from '../../../shared/services/pokemon.service.stub';
import { StubPokemonGridComponent } from './pokemon-grid/pokemon-grid.component.spec';
import { PokemonHomeComponent } from './pokemon-home.component';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';

@Component({ selector: 'app-pokemon-table', template: '' })
export class StubPokemonTableComponent implements Partial<PokemonTableComponent> {
  @Input() public pokemonList: NamedApiPokemon[];
}

describe('PokemonHomeComponent', () => {
  let component: PokemonHomeComponent;
  let fixture: ComponentFixture<PokemonHomeComponent>;
  let pokemonStubService: PokemonStubService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [InfiniteScrollModule],
        declarations: [PokemonHomeComponent, StubPokemonGridComponent, StubPokemonTableComponent, StubFilterComponent],
        providers: [pokemonStubServiceProvider, stubFilterServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomeComponent);
    pokemonStubService = (TestBed.inject(PokemonService) as any) as PokemonStubService;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch pokemon list on init', () => {
    expect(pokemonStubService.getAllPokemon).toHaveBeenCalledTimes(1);
  });

  it('should load more on button click', () => {
    const loadModeButton = fixture.debugElement.query(By.css('.load-more-button'));
    expect(loadModeButton).toBeTruthy();
    loadModeButton.nativeElement.click();
    expect(pokemonStubService.getAllPokemon).toHaveBeenCalledTimes(2);
  });
});
