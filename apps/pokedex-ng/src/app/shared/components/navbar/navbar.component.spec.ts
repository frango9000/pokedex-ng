import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { VersionGroupService } from '../../services/game/version-group.service';
import { stubVersionGroupServiceProvider } from '../../services/stubs';
import { StubFilterBarComponent } from '../filter/filter-bar.component.stub';
import { VersionGroupFilterComponent } from '../filters/version-group-filter/version-group-filter.component';

import { NavbarComponent } from './navbar.component';

@Component({ selector: 'pokedex-ng-locale-picker', template: '' })
class StubLocalePickerComponent {}

@Component({ selector: 'pokedex-ng-version-group-filter', template: '' })
export class StubVersionGroupFilterComponent implements Partial<VersionGroupFilterComponent> {
  constructor(public gameVersionService: VersionGroupService) {}
}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MDBBootstrapModule.forRoot()],
        declarations: [
          NavbarComponent,
          StubLocalePickerComponent,
          StubFilterBarComponent,
          StubVersionGroupFilterComponent,
        ],
        providers: [stubVersionGroupServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
