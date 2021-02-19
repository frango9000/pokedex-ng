import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StubPokeTypeColorPipe } from '../../../../shared/pipes/stubs';
import { pokemonTypeStubServiceProvider } from '../../../../shared/services/pokemon-type.service.stub';

import { PokemonTypeDamagesComponent } from './pokemon-type-damages.component';

describe('PokemonTypeDamagesComponent', () => {
  let component: PokemonTypeDamagesComponent;
  let fixture: ComponentFixture<PokemonTypeDamagesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), MDBBootstrapModule.forRoot()],
        declarations: [PokemonTypeDamagesComponent, StubPokeTypeColorPipe],
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
