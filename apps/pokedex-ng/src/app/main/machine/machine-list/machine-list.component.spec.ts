import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getTranslocoModule } from '@pokedex-ng/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StubFilterToolbarComponent } from '../../../shared/components/filter-toolbar/filter-toolbar.component.stub';
import { StubPokeTypeColorPipe } from '../../../shared/pipes/stubs';
import {
  stubAppNavbarServiceProvider,
  stubFilterServiceProvider,
  stubMachineServiceProvider,
  stubVersionGroupServiceProvider,
} from '../../../shared/services/stubs';
import { MachineDetailComponent } from '../machine-detail/machine-detail.component';
import { MachineListComponent } from './machine-list.component';

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
      imports: [getTranslocoModule(), RouterTestingModule, InfiniteScrollModule],
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
