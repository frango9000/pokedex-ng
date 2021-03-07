import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { StubFilterToolbarComponent } from '../../../shared/components/filter-toolbar/filter-toolbar.component.stub';
import { StubPokeTypeColorPipe } from '../../../shared/pipes/stubs';
import {
  stubAppNavbarServiceProvider,
  stubFilterServiceProvider,
  stubMoveServiceProvider,
} from '../../../shared/services/stubs';

import { MoveListComponent } from './move-list.component';

describe('MoveListComponent', () => {
  let component: MoveListComponent;
  let fixture: ComponentFixture<MoveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [MoveListComponent, StubPokeTypeColorPipe, StubFilterToolbarComponent],
      providers: [stubMoveServiceProvider, stubFilterServiceProvider, stubAppNavbarServiceProvider],
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
