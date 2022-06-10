import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgVarDirective } from '../../../../shared/directives/ng-var.directive';
import { StubPokeTypeColorPipe, StubRomanPipe } from '../../../../shared/pipes/stubs';
import { stubPokemonServiceProvider } from '../../../../shared/services/pokemon/pokemon.service.stubs';
import { PokemonGridComponent } from './pokemon-grid.component';

describe('PokemonGridComponent', () => {
  let component: PokemonGridComponent;
  let fixture: ComponentFixture<PokemonGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MDBBootstrapModule.forRoot(), getTranslocoModule()],
      declarations: [PokemonGridComponent, StubRomanPipe, StubPokeTypeColorPipe, NgVarDirective],
      providers: [stubPokemonServiceProvider],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
