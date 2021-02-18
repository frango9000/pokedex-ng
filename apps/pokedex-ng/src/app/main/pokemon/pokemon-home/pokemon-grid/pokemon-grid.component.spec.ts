import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NamedApiPokemon } from '@pokedex-ng/domain';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PokeGenerationStubPipe } from '../../../../shared/pipes/poke-generation.pipe.spec';
import { PokeTypeColorStubPipe } from '../../../../shared/pipes/poke-type-color.pipe.spec';
import { RomanStubPipe } from '../../../../shared/pipes/roman.pipe.spec';

import { PokemonGridComponent } from './pokemon-grid.component';

describe('PokemonGridComponent', () => {
  let component: PokemonGridComponent;
  let fixture: ComponentFixture<PokemonGridComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MDBBootstrapModule.forRoot(), TranslateModule.forRoot()],
        declarations: [PokemonGridComponent, PokeGenerationStubPipe, RomanStubPipe, PokeTypeColorStubPipe],
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
export class StubPokemonGridComponent implements Partial<PokemonGridComponent> {
  @Input() public pokemonList: NamedApiPokemon[];
}
