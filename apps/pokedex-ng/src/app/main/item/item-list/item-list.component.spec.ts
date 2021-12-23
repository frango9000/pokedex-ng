import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StubFilterToolbarComponent } from '../../../shared/components/filter-toolbar/filter-toolbar.component.stub';
import { stubItemServiceProvider } from '../../../shared/services/item/item.service.stub';
import {
  stubAppNavbarServiceProvider,
  stubFilterServiceProvider,
  stubLanguageServiceProvider,
} from '../../../shared/services/stubs';
import { StubItemDetailComponent } from '../item-detail/item-detail.component.stub';
import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [getTranslocoModule(), RouterTestingModule, InfiniteScrollModule],
      declarations: [ItemListComponent, StubFilterToolbarComponent, StubItemDetailComponent],
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
