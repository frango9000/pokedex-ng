import { TestBed } from '@angular/core/testing';

import { MachineService } from './machine.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { stubFilterServiceProvider, stubVersionGroupServiceProvider } from '../stubs';

describe('MachineService', () => {
  let service: MachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [stubFilterServiceProvider, stubVersionGroupServiceProvider],
    });
    service = TestBed.inject(MachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
