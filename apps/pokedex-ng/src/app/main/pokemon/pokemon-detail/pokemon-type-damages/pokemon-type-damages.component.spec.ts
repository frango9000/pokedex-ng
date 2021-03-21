import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { StubPokeTypeColorPipe } from '../../../../shared/pipes/stubs';

import { PokemonTypeDamagesComponent } from './pokemon-type-damages.component';
import { stubTypeServiceProvider } from '../../../../shared/services/pokemon/pokemon.service.stubs';

describe('PokemonTypeDamagesComponent', () => {
  let component: PokemonTypeDamagesComponent;
  let fixture: ComponentFixture<PokemonTypeDamagesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonTypeDamagesComponent, StubPokeTypeColorPipe],
        providers: [stubTypeServiceProvider],
      }).compileComponents();
    })
  );

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
