import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationFilterComponent } from './generation-filter.component';

describe('GenerationFilterComponent', () => {
  let component: GenerationFilterComponent;
  let fixture: ComponentFixture<GenerationFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationFilterComponent ]
    })
    .compileComponents();
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
