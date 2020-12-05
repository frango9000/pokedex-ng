import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ApiNamedResource } from '../../../../shared/domain/api-resource';
import { PokeTypeColorPipeStub } from '../../../../shared/pipes/poke-type-color.pipe.spec';
import { pokemonTypeServiceStubProvider } from '../../../../shared/services/pokemon-type.service.spec';

import { PokemonTypeDamagesComponent } from './pokemon-type-damages.component';

describe('PokemonTypeDamagesComponent', () => {
  let component: PokemonTypeDamagesComponent;
  let fixture: ComponentFixture<PokemonTypeDamagesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonTypeDamagesComponent, PokeTypeColorPipeStub],
        providers: [pokemonTypeServiceStubProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeDamagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-type-damages', template: '' })
export class PokemonTypeDamagesComponentStub implements Partial<PokemonTypeDamagesComponent> {
  @Input() typeIds: { slot: number; type: ApiNamedResource }[];
}
