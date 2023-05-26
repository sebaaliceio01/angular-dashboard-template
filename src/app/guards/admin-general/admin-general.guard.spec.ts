import { TestBed } from '@angular/core/testing';
import { AdminGeneralGuard } from './admin-general.guard';

describe('AdminGeneralGuard', () => {
  let guard: AdminGeneralGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGeneralGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
