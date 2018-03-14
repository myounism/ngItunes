import { TestBed, async, inject } from '@angular/core/testing';

import { AlwaysAuthGuard } from './always-auth.guard';

describe('AlwaysAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlwaysAuthGuard]
    });
  });

  it('should ...', inject([AlwaysAuthGuard], (guard: AlwaysAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
