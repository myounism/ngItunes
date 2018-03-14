import { TestBed, async, inject } from '@angular/core/testing';

import { OnlyLoggedInUsersGuard } from './only-logged-in-users.guard';

describe('OnlyLoggedInUsersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyLoggedInUsersGuard]
    });
  });

  it('should ...', inject([OnlyLoggedInUsersGuard], (guard: OnlyLoggedInUsersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
