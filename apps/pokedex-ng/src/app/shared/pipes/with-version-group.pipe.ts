import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GameVersionService } from '../services/game-version.service';

@Pipe({
  name: 'withVersionGroup',
})
export class WithVersionGroupPipe implements PipeTransform {
  constructor(private gameVersionService: GameVersionService, private translateService: TranslateService) {}

  transform(value: string): Observable<string> {
    return this.gameVersionService
      .getActiveVersion$()
      .pipe(switchMap((version) => this.translateService.get(value + version)));
  }
}
