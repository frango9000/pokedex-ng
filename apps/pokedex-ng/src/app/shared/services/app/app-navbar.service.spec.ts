import { TestBed } from '@angular/core/testing';
import { AppNavbarService } from './app-navbar.service';

describe('NavbarService', () => {
  let service: AppNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
