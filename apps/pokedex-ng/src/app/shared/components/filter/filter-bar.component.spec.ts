import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconsModule, TooltipModule } from 'angular-bootstrap-md';
import { NgVarDirective } from '../../directives/ng-var.directive';

import { FilterBarComponent } from './filter-bar.component';

describe('FilterComponent', () => {
  let component: FilterBarComponent;
  let fixture: ComponentFixture<FilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipModule, IconsModule],
      declarations: [FilterBarComponent, NgVarDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
