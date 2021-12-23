import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Machine, PxMachine } from '@pokedex-ng/domain';
import { BehaviorSubject, merge, Observable, Subscription } from 'rxjs';
import { map, skip, switchMap, tap } from 'rxjs/operators';
import { AppNavbarService } from '../../../shared/services/app/app-navbar.service';
import { FilterService } from '../../../shared/services/app/filter.service';
import { VersionGroupService } from '../../../shared/services/game/version-group.service';
import { MachineService } from '../../../shared/services/machine/machine.service';

@Component({
  selector: 'pokedex-ng-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss'],
})
export class MachineListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  private _machines$: BehaviorSubject<PxMachine[]> = new BehaviorSubject([]);

  private _filterChange$ = new BehaviorSubject<boolean>(true);

  public expandedMachine = '';
  public offset = 0;
  public increment = 72;

  constructor(
    private machineService: MachineService,
    private filterService: FilterService,
    public appNavbarService: AppNavbarService,
    private route: ActivatedRoute,
    private versionGroupService: VersionGroupService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { machine: Machine }) => {
      this.expandedMachine = data?.machine?.id + '' || '';
    });
    this.subscriptions.add(this._updateListSubscription());
    this.subscriptions.add(this._filterChangesSubscription());
    this.appNavbarService.showFiltersButton();
    this.appNavbarService.showVersionGroupPicker();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.appNavbarService.hideAll();
    this.filterService.clearAllFilters();
  }

  getMachines$(): Observable<PxMachine[]> {
    return this._machines$.asObservable();
  }

  renderMore(): void {
    this._filterChange$.next(false);
  }

  private _updateListSubscription() {
    return this._filterChange$
      .pipe(
        tap((reset) => (reset ? (this.offset = this.increment) : (this.offset += this.increment))),
        switchMap(() => this.machineService.getAllFiltered()),
        map((list) => list.slice(0, this.offset))
      )
      .subscribe((machines) => this._machines$.next(machines));
  }

  private _filterChangesSubscription() {
    return merge(
      this.filterService.getTypesFilter$().pipe(skip(1)),
      this.versionGroupService.getActiveVersionGroup$().pipe(skip(1))
    ).subscribe(() => {
      this._filterChange$.next(true);
    });
  }
}
