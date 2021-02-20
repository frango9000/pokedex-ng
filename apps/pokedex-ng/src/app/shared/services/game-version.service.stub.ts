import { BehaviorSubject, of } from 'rxjs';
import { GameVersionService } from './game-version.service';

export class GameVersionStubService implements Partial<GameVersionService> {
  public activeVersion$ = new BehaviorSubject('');
  public matchesDisplayVersion = jest.fn((string) => string === 'true');
  public getAllVersionGroups = jest.fn(() => of([]));
}

export const gameVersionStubServiceProvider = {
  provide: GameVersionService,
  useFactory: () => new GameVersionStubService(),
};
