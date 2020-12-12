import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgVarDirective } from '../../../../../../shared/directives/ng-var.directive';
import { PokemonEvolutionChainLink } from '../../../../../../shared/domain/pokemon-evolution-chain';
import { ResourceIdStubPipe } from '../../../../../../shared/pipes/resource-id.pipe.spec';

import { PokemonEvolutionLinkComponent } from './pokemon-evolution-link.component';

describe('PokemonEvolutionLinkComponent', () => {
  let component: PokemonEvolutionLinkComponent;
  let fixture: ComponentFixture<PokemonEvolutionLinkComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MDBBootstrapModule.forRoot(), TranslateModule.forRoot()],
        declarations: [PokemonEvolutionLinkComponent, ResourceIdStubPipe, NgVarDirective],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEvolutionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-evolution-link', template: '' })
export class PokemonEvolutionLinkStubComponent implements Partial<PokemonEvolutionLinkComponent> {
  @Input() link: PokemonEvolutionChainLink;
}
