import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineDetailComponent } from './machine-detail.component';
import { StubItemDetailComponent } from '../../item/item-detail/item-detail.component.stub';
import { StubMoveDetailComponent } from '../../move/move-detail/move-detail.component.stub';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

describe('MachineDetailComponent', () => {
  let component: MachineDetailComponent;
  let fixture: ComponentFixture<MachineDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDBBootstrapModule.forRoot()],
      declarations: [MachineDetailComponent, StubItemDetailComponent, StubMoveDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
