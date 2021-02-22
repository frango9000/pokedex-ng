import { ComponentFixture, TestBed } from '@angular/core/testing';
import { stubGameVersionServiceProvider } from '../../../services/stubs';

import { VersionGroupFilterComponent } from './version-group-filter.component';

describe('VersionGroupFilterComponent', () => {
  let component: VersionGroupFilterComponent;
  let fixture: ComponentFixture<VersionGroupFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersionGroupFilterComponent],
      providers: [stubGameVersionServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionGroupFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
