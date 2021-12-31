import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePillComponent } from './type-pill.component';

describe('TypePillComponent', () => {
  let component: TypePillComponent;
  let fixture: ComponentFixture<TypePillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
