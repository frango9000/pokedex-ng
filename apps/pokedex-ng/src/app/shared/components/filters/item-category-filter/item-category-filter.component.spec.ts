import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { CheckboxModule } from 'angular-bootstrap-md';
import { stubItemCategoryServiceProvider } from '../../../services/item/item.service.stub';
import { stubFilterServiceProvider } from '../../../services/stubs';
import { ItemCategoryFilterComponent } from './item-category-filter.component';

describe('ItemCategoryFilterComponent', () => {
  let component: ItemCategoryFilterComponent;
  let fixture: ComponentFixture<ItemCategoryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule, getTranslocoModule()],
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
