import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ApiNamedPokemon } from '../../../../shared/domain/pokemon';
import { PokeGenerationPipeStub } from '../../../../shared/pipes/poke-generation.pipe.spec';
import { PokeTypeColorPipeStub } from '../../../../shared/pipes/poke-type-color.pipe.spec';
import { RomanPipeStub } from '../../../../shared/pipes/roman.pipe.spec';

import { PokemonGridComponent } from './pokemon-grid.component';

describe('PokemonGridComponent', () => {
  let component: PokemonGridComponent;
  let fixture: ComponentFixture<PokemonGridComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MDBBootstrapModule.forRoot(), TranslateModule.forRoot()],
        declarations: [PokemonGridComponent, PokeGenerationPipeStub, RomanPipeStub, PokeTypeColorPipeStub],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-grid', template: '' })
export class PokemonGridComponentStub implements Partial<PokemonGridComponent> {
  @Input() public pokemonList: ApiNamedPokemon[];
}
