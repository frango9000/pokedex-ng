import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { CheckboxModule } from 'angular-bootstrap-md';
import { stubFilterServiceProvider, stubGenerationServiceProvider } from '../../../services/stubs';
import { GenerationFilterComponent } from './generation-filter.component';

describe('GenerationFilterComponent', () => {
  let component: GenerationFilterComponent;
  let fixture: ComponentFixture<GenerationFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule, getTranslocoModule()],
      declarations: [GenerationFilterComponent],
      providers: [stubFilterServiceProvider, stubGenerationServiceProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
