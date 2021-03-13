import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { StubFilterToolbarComponent } from '../../../shared/components/filter-toolbar/filter-toolbar.component.stub';
import { StubPokeTypeColorPipe } from '../../../shared/pipes/stubs';
import { stubMoveServiceProvider } from '../../../shared/services/move/move.service.stubs';
import {
  stubAppNavbarServiceProvider,
  stubFilterServiceProvider,
  stubLanguageServiceProvider,
} from '../../../shared/services/stubs';
import { StubMoveDetailComponent } from '../move-detail/move-detail.component.stub';

import { MoveListComponent } from './move-list.component';

describe('MoveListComponent', () => {
  let component: MoveListComponent;
  let fixture: ComponentFixture<MoveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [MoveListComponent, StubPokeTypeColorPipe, StubFilterToolbarComponent, StubMoveDetailComponent],
      providers: [
        stubMoveServiceProvider,
        stubFilterServiceProvider,
        stubAppNavbarServiceProvider,
        stubLanguageServiceProvider,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
