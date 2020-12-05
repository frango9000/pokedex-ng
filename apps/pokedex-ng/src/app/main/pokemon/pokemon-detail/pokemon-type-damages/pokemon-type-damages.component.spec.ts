import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiNamedResource } from '../../../../shared/domain/api-resource';

import { PokemonTypeDamagesComponent } from './pokemon-type-damages.component';

describe('PokemonTypeDamagesComponent', () => {
  let component: PokemonTypeDamagesComponent;
  let fixture: ComponentFixture<PokemonTypeDamagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonTypeDamagesComponent],
    }).compileComponents();
  }));

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
