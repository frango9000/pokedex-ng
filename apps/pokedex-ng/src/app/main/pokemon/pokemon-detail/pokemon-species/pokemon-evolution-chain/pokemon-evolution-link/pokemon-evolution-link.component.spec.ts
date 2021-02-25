import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { NgVarDirective } from '../../../../../../shared/directives/ng-var.directive';
import { StubResourceIdPipe } from '../../../../../../shared/pipes/stubs';

import { PokemonEvolutionLinkComponent } from './pokemon-evolution-link.component';

describe('PokemonEvolutionLinkComponent', () => {
  let component: PokemonEvolutionLinkComponent;
  let fixture: ComponentFixture<PokemonEvolutionLinkComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MDBBootstrapModule.forRoot(), TranslateModule.forRoot()],
        declarations: [PokemonEvolutionLinkComponent, StubResourceIdPipe, NgVarDirective],
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
