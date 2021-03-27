import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemPocketFilterComponent } from './item-pocket-filter.component';
import { stubFilterServiceProvider } from '../../../services/stubs';
import { CheckboxModule } from 'angular-bootstrap-md';
import { TranslateModule } from '@ngx-translate/core';
import { stubItemPocketServiceProvider } from '../../../services/item/item.service.stub';

describe('ItemPocketFilterComponent', () => {
  let component: ItemPocketFilterComponent;
  let fixture: ComponentFixture<ItemPocketFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule, TranslateModule.forRoot()],
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
