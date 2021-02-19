import { TestBed } from '@angular/core/testing';

import { CalserveService } from './calserve.service';

describe('CalserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalserveService = TestBed.get(CalserveService);
    expect(service).toBeTruthy();
  });
});
