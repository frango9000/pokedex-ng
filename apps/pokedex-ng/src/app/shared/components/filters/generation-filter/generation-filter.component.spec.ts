import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'angular-bootstrap-md';
import { GenerationFilterComponent } from './generation-filter.component';
import { stubFilterServiceProvider, stubGenerationServiceProvider } from '../../../services/stubs';

describe('GenerationFilterComponent', () => {
  let component: GenerationFilterComponent;
  let fixture: ComponentFixture<GenerationFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxModule, TranslateModule.forRoot()],
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
