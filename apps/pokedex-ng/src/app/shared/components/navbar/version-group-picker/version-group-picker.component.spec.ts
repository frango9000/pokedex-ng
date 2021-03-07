import { ComponentFixture, TestBed } from '@angular/core/testing';
import { stubVersionGroupServiceProvider } from '../../../services/stubs';

import { VersionGroupPickerComponent } from './version-group-picker.component';

describe('VersionGroupFilterComponent', () => {
  let component: VersionGroupPickerComponent;
  let fixture: ComponentFixture<VersionGroupPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VersionGroupPickerComponent],
      providers: [stubVersionGroupServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionGroupPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
