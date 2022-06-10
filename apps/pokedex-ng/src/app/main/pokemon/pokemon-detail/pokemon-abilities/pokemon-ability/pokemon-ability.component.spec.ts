import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { StubWithVersionGroupPipe } from '../../../../../shared/pipes/stubs';
import { stubAbilityServiceProvider } from '../../../../../shared/services/pokemon/pokemon.service.stubs';
import { PokemonAbilityComponent } from './pokemon-ability.component';

describe('PokemonAbilityComponent', () => {
  let component: PokemonAbilityComponent;
  let fixture: ComponentFixture<PokemonAbilityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule()],
      declarations: [PokemonAbilityComponent, StubWithVersionGroupPipe],
      providers: [stubAbilityServiceProvider],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
