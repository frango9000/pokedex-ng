import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgVarDirective } from '../../../directives/ng-var.directive';
import { GridToggleComponent } from './grid-toggle.component';

describe('GridToggleComponent', () => {
  let component: GridToggleComponent;
  let fixture: ComponentFixture<GridToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDBBootstrapModule.forRoot()],
      declarations: [GridToggleComponent, NgVarDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
