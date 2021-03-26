import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';
import { stubItemServiceProvider } from '../../../shared/services/item/item.service.stub';
import {
  stubAppNavbarServiceProvider,
  stubFilterServiceProvider,
  stubLanguageServiceProvider,
} from '../../../shared/services/stubs';
import { RouterTestingModule } from '@angular/router/testing';
import { StubFilterToolbarComponent } from '../../../shared/components/filter-toolbar/filter-toolbar.component.stub';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TranslateModule } from '@ngx-translate/core';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), RouterTestingModule, InfiniteScrollModule],
      declarations: [ItemListComponent, StubFilterToolbarComponent],
      providers: [
        stubItemServiceProvider,
        stubFilterServiceProvider,
        stubLanguageServiceProvider,
        stubAppNavbarServiceProvider,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
