import { TestBed, async, inject } from '@angular/core/testing';

import { UnsearchedTermGuard } from './unsearched-term.guard';

describe('UnsearchedTermGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsearchedTermGuard]
    });
  });

  it('should ...', inject([UnsearchedTermGuard], (guard: UnsearchedTermGuard) => {
    expect(guard).toBeTruthy();
  }));
});
