import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { CheckboxModule } from 'angular-bootstrap-md';
import { StubPokeTypeColorPipe } from '../../../pipes/stubs';
import { stubTypeServiceProvider } from '../../../services/pokemon/pokemon.service.stubs';
import { stubFilterServiceProvider } from '../../../services/stubs';
import { TypesFilterComponent } from './types-filter.component';

describe('TypesFilterComponent', () => {
  let component: TypesFilterComponent;
  let fixture: ComponentFixture<TypesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule, getTranslocoModule()],
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
