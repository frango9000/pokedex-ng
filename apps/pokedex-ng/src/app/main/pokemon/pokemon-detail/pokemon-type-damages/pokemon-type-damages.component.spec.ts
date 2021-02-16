import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NamedApiResource } from '@pokedex-ng/domain';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PokeTypeColorStubPipe } from '../../../../shared/pipes/poke-type-color.pipe.spec';
import { pokemonTypeStubServiceProvider } from '../../../../shared/services/pokemon-type.service.stub';

import { PokemonTypeDamagesComponent } from './pokemon-type-damages.component';

describe('PokemonTypeDamagesComponent', () => {
  let component: PokemonTypeDamagesComponent;
  let fixture: ComponentFixture<PokemonTypeDamagesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonTypeDamagesComponent, PokeTypeColorStubPipe],
        providers: [pokemonTypeStubServiceProvider],
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
export class PokemonTypeDamagesStubComponent implements Partial<PokemonTypeDamagesComponent> {
  @Input() typeIds: { slot: number; type: NamedApiResource }[];
}
