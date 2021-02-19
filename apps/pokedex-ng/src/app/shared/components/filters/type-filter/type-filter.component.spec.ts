import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'angular-bootstrap-md';
import { StubPokeTypeColorPipe } from '../../../pipes/stubs';
import { stubFilterServiceProvider } from '../../../services/filter.service.stub';
import { pokemonTypeStubServiceProvider } from '../../../services/pokemon-type.service.stub';

import { TypeFilterComponent } from './type-filter.component';

describe('TypeFilterComponent', () => {
  let component: TypeFilterComponent;
  let fixture: ComponentFixture<TypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule, TranslateModule.forRoot()],
      declarations: [TypeFilterComponent, StubPokeTypeColorPipe],
      providers: [stubFilterServiceProvider, pokemonTypeStubServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
