import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ExpansionButtonComponent } from './expansion-button.component';

describe('ExpansionButtonComponent', () => {
  let component: ExpansionButtonComponent;
  let fixture: ComponentFixture<ExpansionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDBBootstrapModule.forRoot()],
      declarations: [ExpansionButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
