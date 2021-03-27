import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCategoryFilterComponent } from './item-category-filter.component';
import { stubFilterServiceProvider } from '../../../services/stubs';
import { CheckboxModule } from 'angular-bootstrap-md';
import { TranslateModule } from '@ngx-translate/core';
import { stubItemCategoryServiceProvider } from '../../../services/item/item.service.stub';

describe('ItemCategoryFilterComponent', () => {
  let component: ItemCategoryFilterComponent;
  let fixture: ComponentFixture<ItemCategoryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule, TranslateModule.forRoot()],
      declarations: [ItemCategoryFilterComponent],
      providers: [stubFilterServiceProvider, stubItemCategoryServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCategoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
