import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { VersionGroupService } from './version-group.service';

describe('VersionGroupService', () => {
  let service: VersionGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(VersionGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
