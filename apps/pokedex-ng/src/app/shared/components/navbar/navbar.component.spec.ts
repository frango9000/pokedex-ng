import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { gameVersionStubServiceProvider } from '../../services/game-version.service.stub';
import { StubFilterBarComponent } from '../filter/filter-bar.component.stub';

import { NavbarComponent } from './navbar.component';

@Component({ selector: 'pokedex-ng-locale-picker', template: '' })
class StubLocalePickerComponent {}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, MDBBootstrapModule.forRoot()],
        declarations: [NavbarComponent, StubLocalePickerComponent, StubFilterBarComponent],
        providers: [gameVersionStubServiceProvider],
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
