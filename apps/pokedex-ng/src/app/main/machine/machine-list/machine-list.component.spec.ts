import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineListComponent } from './machine-list.component';
import { StubFilterToolbarComponent } from '../../../shared/components/filter-toolbar/filter-toolbar.component.stub';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StubPokeTypeColorPipe } from '../../../shared/pipes/stubs';
import {
  stubAppNavbarServiceProvider,
  stubFilterServiceProvider,
  stubMachineServiceProvider,
  stubVersionGroupServiceProvider,
} from '../../../shared/services/stubs';
import { Component, Input } from '@angular/core';
import { MachineDetailComponent } from '../machine-detail/machine-detail.component';

@Component({ selector: 'pokedex-ng-machine-detail', template: '' })
class StubMachineDetailComponent implements Partial<MachineDetailComponent> {
  @Input() moveId: string | number;
  @Input() itemId: string | number;
}

describe('MachineListComponent', () => {
  let component: MachineListComponent;
  let fixture: ComponentFixture<MachineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), RouterTestingModule, InfiniteScrollModule],
      declarations: [
        MachineListComponent,
        StubMachineDetailComponent,
        StubPokeTypeColorPipe,
        StubFilterToolbarComponent,
      ],
      providers: [
        stubMachineServiceProvider,
        stubAppNavbarServiceProvider,
        stubVersionGroupServiceProvider,
        stubFilterServiceProvider,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
