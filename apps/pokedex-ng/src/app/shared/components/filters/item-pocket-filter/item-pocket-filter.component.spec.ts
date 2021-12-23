import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { CheckboxModule } from 'angular-bootstrap-md';
import { stubItemPocketServiceProvider } from '../../../services/item/item.service.stub';
import { stubFilterServiceProvider } from '../../../services/stubs';
import { ItemPocketFilterComponent } from './item-pocket-filter.component';

describe('ItemPocketFilterComponent', () => {
  let component: ItemPocketFilterComponent;
  let fixture: ComponentFixture<ItemPocketFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule, getTranslocoModule()],
      declarations: [ItemPocketFilterComponent],
      providers: [stubFilterServiceProvider, stubItemPocketServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPocketFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
