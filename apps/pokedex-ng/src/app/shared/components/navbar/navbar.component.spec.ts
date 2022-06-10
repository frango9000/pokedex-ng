import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { stubAppNavbarServiceProvider } from '../../services/stubs';
import { QueryFilterComponent } from '../filters/query-filter/query-filter.component';
import { FilterToggleComponent } from './filter-toggle/filter-toggle.component';
import { GridToggleComponent } from './grid-toggle/grid-toggle.component';
import { LocalePickerComponent } from './locale-picker/locale-picker.component';
import { NavbarComponent } from './navbar.component';
import { VersionGroupPickerComponent } from './version-group-picker/version-group-picker.component';

@Component({ selector: 'pokedex-ng-locale-picker', template: '' })
class StubLocalePickerComponent implements Partial<LocalePickerComponent> {}

@Component({ selector: 'pokedex-ng-version-group-picker', template: '' })
class StubVersionGroupPickerComponent implements Partial<VersionGroupPickerComponent> {}

@Component({ selector: 'pokedex-ng-query-filter', template: '' })
class StubQueryFilterComponent implements Partial<QueryFilterComponent> {}

@Component({ selector: 'pokedex-ng-filter-toggle', template: '' })
class StubFilterToggleComponent implements Partial<FilterToggleComponent> {}

@Component({ selector: 'pokedex-ng-grid-toggle', template: '' })
class StubGridToggleComponent implements Partial<GridToggleComponent> {}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MDBBootstrapModule.forRoot()],
      declarations: [
        NavbarComponent,
        StubLocalePickerComponent,
        StubQueryFilterComponent,
        StubFilterToggleComponent,
        StubGridToggleComponent,
        StubVersionGroupPickerComponent,
      ],
      providers: [stubAppNavbarServiceProvider],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
