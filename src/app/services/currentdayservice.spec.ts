import { TestBed } from '@angular/core/testing';

import { Currentdayservice } from './currentdayservice';

describe('Currentdayservice', () => {
  let service: Currentdayservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Currentdayservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
