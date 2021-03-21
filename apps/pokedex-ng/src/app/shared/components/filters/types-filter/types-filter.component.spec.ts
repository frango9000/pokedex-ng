import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'angular-bootstrap-md';
import { StubPokeTypeColorPipe } from '../../../pipes/stubs';
import { stubFilterServiceProvider } from '../../../services/stubs';

import { TypesFilterComponent } from './types-filter.component';
import { stubTypeServiceProvider } from '../../../services/pokemon/pokemon.service.stubs';

describe('TypesFilterComponent', () => {
  let component: TypesFilterComponent;
  let fixture: ComponentFixture<TypesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule, TranslateModule.forRoot()],
      declarations: [TypesFilterComponent, StubPokeTypeColorPipe],
      providers: [stubFilterServiceProvider, stubTypeServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
