import { TestBed } from '@angular/core/testing';

import { Agendaservice } from './agendaservice';

describe('Agendaservice', () => {
  let service: Agendaservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Agendaservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
