import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { PokemonStubService, pokemonStubServiceProvider } from '../../../shared/services/pokemon.service.stub';
import { PokemonGridStubComponent } from './pokemon-grid/pokemon-grid.component.spec';
import { PokemonHomeComponent } from './pokemon-home.component';
import { PokemonTableStubComponent } from './pokemon-table/pokemon-table.component.spec';

describe('PokemonHomeComponent', () => {
  let component: PokemonHomeComponent;
  let fixture: ComponentFixture<PokemonHomeComponent>;
  let pokemonStubService: PokemonStubService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [InfiniteScrollModule],
        declarations: [PokemonHomeComponent, PokemonGridStubComponent, PokemonTableStubComponent],
        providers: [pokemonStubServiceProvider],
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
    expect(pokemonStubService.getPokemonList).toHaveBeenCalledTimes(1);
    // @ts-ignore
    expect(pokemonStubService.getPokemonList.mock.calls[0][0]).toBe(0);
  });

  it('should load more on button click', () => {
    const loadModeButton = fixture.debugElement.query(By.css('.load-more-button'));
    expect(loadModeButton).toBeTruthy();
    loadModeButton.nativeElement.click();
    expect(pokemonStubService.getPokemonList).toHaveBeenCalledTimes(2);
    // @ts-ignore
    expect(pokemonStubService.getPokemonList.mock.calls[1][0]).toBe(component.increment);
  });
});
