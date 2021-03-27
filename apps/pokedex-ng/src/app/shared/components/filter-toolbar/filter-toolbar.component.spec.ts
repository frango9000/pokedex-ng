import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClearFilterComponent } from '../filters/clear-filter/clear-filter.component';
import { GenerationFilterComponent } from '../filters/generation-filter/generation-filter.component';
import { StubTypesFilterComponent } from '../filters/types-filter/types-filter.component.stub';
import { FilterToolbarComponent } from './filter-toolbar.component';
import { ItemCategoryFilterComponent } from '../filters/item-category-filter/item-category-filter.component';
import { ItemPocketFilterComponent } from '../filters/item-pocket-filter/item-pocket-filter.component';

@Component({ selector: 'pokedex-ng-generation-filter', template: '' })
export class StubGenerationFilterComponent implements Partial<GenerationFilterComponent> {}

@Component({ selector: 'pokedex-ng-item-category-filter', template: '' })
export class StubItemCategoryFilterComponent implements Partial<ItemCategoryFilterComponent> {}

@Component({ selector: 'pokedex-ng-item-pocket-filter', template: '' })
export class StubItemPocketFilterComponent implements Partial<ItemPocketFilterComponent> {}

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
        StubItemCategoryFilterComponent,
        StubItemPocketFilterComponent,
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
