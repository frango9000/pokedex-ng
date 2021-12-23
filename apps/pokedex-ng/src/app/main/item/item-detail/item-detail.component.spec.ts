import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { StubWithVersionGroupPipe } from '../../../shared/pipes/stubs';
import {
  stubItemAttributeServiceProvider,
  stubItemServiceProvider,
} from '../../../shared/services/item/item.service.stub';
import { ItemDetailComponent } from './item-detail.component';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [getTranslocoModule()],
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
