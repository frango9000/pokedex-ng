import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoModule } from '@ngneat/transloco';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from '../../../../shared/shared.module';

import { TypePillComponent } from './type-pill.component';

describe('TypePillComponent', () => {
  let component: TypePillComponent;
  let fixture: ComponentFixture<TypePillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDBBootstrapModule.forRoot(), SharedModule, TranslocoModule],
      declarations: [TypePillComponent],
    }).compileComponents();
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
