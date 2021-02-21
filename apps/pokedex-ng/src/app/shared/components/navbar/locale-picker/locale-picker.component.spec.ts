import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgVarDirective } from '../../../directives/ng-var.directive';
import { stubPokemonLanguageServiceProvider } from '../../../services/pokemon-language.service.stub';
import { LocalePickerComponent } from './locale-picker.component';

describe('LocalePickerComponent', () => {
  let component: LocalePickerComponent;
  let fixture: ComponentFixture<LocalePickerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot()],
        declarations: [LocalePickerComponent, NgVarDirective],
        providers: [stubPokemonLanguageServiceProvider],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
