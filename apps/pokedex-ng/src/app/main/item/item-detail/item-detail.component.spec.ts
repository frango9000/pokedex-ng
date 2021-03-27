import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailComponent } from './item-detail.component';
import { TranslateModule } from '@ngx-translate/core';
import {
  stubItemAttributeServiceProvider,
  stubItemServiceProvider,
} from '../../../shared/services/item/item.service.stub';
import { StubWithVersionGroupPipe } from '../../../shared/pipes/stubs';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ItemDetailComponent, StubWithVersionGroupPipe],
      providers: [stubItemServiceProvider, stubItemAttributeServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
