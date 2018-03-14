import { TestBed, async, inject } from '@angular/core/testing';

import { AlwaysAuthChildrenGuard } from './always-auth-children.guard';

describe('AlwaysAuthChildrenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlwaysAuthChildrenGuard]
    });
  });

  it('should ...', inject([AlwaysAuthChildrenGuard], (guard: AlwaysAuthChildrenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
