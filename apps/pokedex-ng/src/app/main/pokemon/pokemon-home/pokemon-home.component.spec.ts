import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { PokemonServiceStub, pokemonServiceStubProvider } from '../../../shared/services/pokemon.service.spec';
import { PokemonGridComponentStub } from './pokemon-grid/pokemon-grid.component.spec';
import { PokemonHomeComponent } from './pokemon-home.component';
import { PokemonTableComponentStub } from './pokemon-table/pokemon-table.component.spec';

describe('PokemonHomeComponent', () => {
  let component: PokemonHomeComponent;
  let fixture: ComponentFixture<PokemonHomeComponent>;
  let pokemonServiceStub: PokemonServiceStub;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [InfiniteScrollModule],
        declarations: [PokemonHomeComponent, PokemonGridComponentStub, PokemonTableComponentStub],
        providers: [pokemonServiceStubProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomeComponent);
    pokemonServiceStub = (TestBed.inject(PokemonService) as any) as PokemonServiceStub;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch pokemon list on init', () => {
    expect(pokemonServiceStub.getPokemonList).toHaveBeenCalledTimes(1);
    expect(pokemonServiceStub.getPokemonList.mock.calls[0][0]).toBe(0);
  });

  it('should load more on button click', () => {
    const loadModeButton = fixture.debugElement.query(By.css('.load-more-button'));
    expect(loadModeButton).toBeTruthy();
    loadModeButton.nativeElement.click();
    expect(pokemonServiceStub.getPokemonList).toHaveBeenCalledTimes(2);
    expect(pokemonServiceStub.getPokemonList.mock.calls[1][0]).toBe(component.increment);
  });
});
