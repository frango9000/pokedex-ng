import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { NgVarDirective } from '../../../../../../shared/directives/ng-var.directive';
import { StubResourceIdPipe } from '../../../../../../shared/pipes/stubs';
import { stubItemServiceProvider } from '../../../../../../shared/services/item/item.service.stub';
import {
  stubEvolutionTriggerServiceProvider,
  stubLocationServiceProvider,
} from '../../../../../../shared/services/stubs';
import { PokemonEvolutionLinkComponent } from './pokemon-evolution-link.component';

describe('PokemonEvolutionLinkComponent', () => {
  let component: PokemonEvolutionLinkComponent;
  let fixture: ComponentFixture<PokemonEvolutionLinkComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MDBBootstrapModule.forRoot(), getTranslocoModule()],
        declarations: [PokemonEvolutionLinkComponent, StubResourceIdPipe, NgVarDirective],
        providers: [stubLocationServiceProvider, stubItemServiceProvider, stubEvolutionTriggerServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEvolutionLinkComponent);
    component = fixture.componentInstance;
    component.link$ = of(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
