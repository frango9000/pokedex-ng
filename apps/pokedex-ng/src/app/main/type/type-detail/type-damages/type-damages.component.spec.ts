import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NEVER } from 'rxjs';
import { stubTypeServiceProvider } from '../../../../shared/services/pokemon/pokemon.service.stubs';

import { TypeDamagesComponent } from './type-damages.component';

describe('TypeDamagesComponent', () => {
  let component: TypeDamagesComponent;
  let fixture: ComponentFixture<TypeDamagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeDamagesComponent],
      providers: [stubTypeServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDamagesComponent);
    component = fixture.componentInstance;
    component.types$ = NEVER;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
