import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VersionGroupService } from '../services/game/version-group.service';

@Pipe({
  name: 'withVersionGroup',
})
export class WithVersionGroupPipe implements PipeTransform {
  constructor(private gameVersionService: VersionGroupService, private translateService: TranslocoService) {}

  transform(value: string): Observable<string> {
    return this.gameVersionService
      .getActiveVersionGroup$()
      .pipe(switchMap((version) => this.translateService.selectTranslate(value + version)));
  }
}
