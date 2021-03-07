import { ComponentFixture, TestBed } from '@angular/core/testing';
import { stubFilterServiceProvider } from '../../../services/stubs';

import { QueryFilterComponent } from './query-filter.component';

describe('QueryFilterComponent', () => {
  let component: QueryFilterComponent;
  let fixture: ComponentFixture<QueryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [QueryFilterComponent],
      providers: [stubFilterServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
