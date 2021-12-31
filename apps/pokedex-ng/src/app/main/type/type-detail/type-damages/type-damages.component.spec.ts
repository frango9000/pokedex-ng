import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDamagesComponent } from './type-damages.component';

describe('TypeDamagesComponent', () => {
  let component: TypeDamagesComponent;
  let fixture: ComponentFixture<TypeDamagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDamagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDamagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
