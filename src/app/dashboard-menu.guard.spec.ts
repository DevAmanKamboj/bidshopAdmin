import { TestBed } from '@angular/core/testing';

import { DashboardMenuGuard } from './dashboard-menu.guard';

describe('DashboardMenuGuard', () => {
  let guard: DashboardMenuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashboardMenuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
