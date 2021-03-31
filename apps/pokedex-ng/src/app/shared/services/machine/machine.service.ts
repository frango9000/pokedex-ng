import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { Machine, PxMachine } from '@pokedex-ng/domain';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterService } from '../app/filter.service';
import { VersionGroupService } from '../game/version-group.service';

@Injectable({
  providedIn: 'root',
})
export class MachineService extends BaseService<Machine, PxMachine> {
  constructor(
    protected http: HttpClient,
    private filterService: FilterService,
    private versionGroupService: VersionGroupService
  ) {
    super('machine', http);
  }

  getAllFiltered(): Observable<PxMachine[]> {
    return this.getAll().pipe(
      map((list: PxMachine[]) => this.versionGroupService.filterByVersionGroup(list)),
      map((list: PxMachine[]) => this.filterService.filterByChildType(list, 'move'))
    );
  }
}
