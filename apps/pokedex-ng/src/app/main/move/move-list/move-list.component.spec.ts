import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
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
      imports: [getTranslocoModule(), InfiniteScrollModule, RouterTestingModule],
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
