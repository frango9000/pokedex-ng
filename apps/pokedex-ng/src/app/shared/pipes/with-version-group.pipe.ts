import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VersionGroupService } from '../services/game/version-group.service';

@Pipe({
  name: 'withVersionGroup',
})
export class WithVersionGroupPipe implements PipeTransform {
  constructor(private gameVersionService: VersionGroupService, private translateService: TranslateService) {}

  transform(value: string): Observable<string> {
    return this.gameVersionService
      .getActiveVersionGroup$()
      .pipe(switchMap((version) => this.translateService.get(value + version)));
  }
}
