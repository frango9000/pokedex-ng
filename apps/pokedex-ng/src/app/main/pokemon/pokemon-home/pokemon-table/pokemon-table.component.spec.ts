import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiNamedPokemon } from '../../../../shared/domain/pokemon';
import { PokemonTableComponent } from './pokemon-table.component';
import { PokeGenerationPipeStub } from '../../../../shared/pipes/poke-generation.pipe.spec';

describe('PokemonTableComponent', () => {
  let component: PokemonTableComponent;
  let fixture: ComponentFixture<PokemonTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [PokemonTableComponent, PokeGenerationPipeStub],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-pokemon-table', template: '' })
export class PokemonTableComponentStub implements Partial<PokemonTableComponent> {
  @Input() public pokemonList: ApiNamedPokemon[];
}
