import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxModule } from 'angular-bootstrap-md';

import { GenerationFilterComponent } from './generation-filter.component';

describe('GenerationFilterComponent', () => {
  let component: GenerationFilterComponent;
  let fixture: ComponentFixture<GenerationFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule],
      declarations: [GenerationFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
