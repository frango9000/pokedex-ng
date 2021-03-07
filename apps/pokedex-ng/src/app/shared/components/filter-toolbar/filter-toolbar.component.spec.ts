import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClearFilterComponent } from '../filters/clear-filter/clear-filter.component';
import { GenerationFilterComponent } from '../filters/generation-filter/generation-filter.component';
import { TypesFilterComponent } from '../filters/types-filter/types-filter.component';
import { FilterToolbarComponent } from './filter-toolbar.component';

@Component({ selector: 'pokedex-ng-generation-filter', template: '' })
export class StubGenerationFilterComponent implements Partial<GenerationFilterComponent> {}

@Component({ selector: 'pokedex-ng-types-filter', template: '' })
export class StubTypesFilterComponent implements Partial<TypesFilterComponent> {}

@Component({ selector: 'pokedex-ng-clear-filter', template: '' })
export class StubClearFilterComponent implements Partial<ClearFilterComponent> {}

describe('FilterToolbarComponent', () => {
  let component: FilterToolbarComponent;
  let fixture: ComponentFixture<FilterToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FilterToolbarComponent,
        StubGenerationFilterComponent,
        StubTypesFilterComponent,
        StubClearFilterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
