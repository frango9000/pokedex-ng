import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Observable, of } from 'rxjs';
import { StubPokeTypeColorPipe } from '../../../../shared/pipes/stubs';
import { stubTypeServiceProvider } from '../../../../shared/services/pokemon/pokemon.service.stubs';
import { TypeDamagesComponent } from '../../../type/type-detail/type-damages/type-damages.component';
import { PokemonTypeDamagesComponent } from './pokemon-type-damages.component';

@Component({ selector: 'pokedex-ng-type-damages', template: '' })
export class StubTypeDamagesComponent implements Partial<TypeDamagesComponent> {
  @Input() public types$: Observable<string[]>;
  @Input() public showDefending = false;
  @Input() public showAttacking = false;
  @Input() public clickableTitle = false;
  @Input() public clickableEntries = false;
}

describe('PokemonTypeDamagesComponent', () => {
  let component: PokemonTypeDamagesComponent;
  let fixture: ComponentFixture<PokemonTypeDamagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoModule(), MDBBootstrapModule.forRoot()],
      declarations: [PokemonTypeDamagesComponent, StubPokeTypeColorPipe, StubTypeDamagesComponent],
      providers: [stubTypeServiceProvider],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeDamagesComponent);
    component = fixture.componentInstance;
    component.pokemon$ = of();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
