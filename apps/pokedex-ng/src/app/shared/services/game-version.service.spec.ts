import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GameVersionService } from './game-version.service';

describe('GameVersionService', () => {
  let service: GameVersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GameVersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
