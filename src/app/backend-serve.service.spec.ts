import { TestBed } from '@angular/core/testing';

import { BackendServeService } from './backend-serve.service';

describe('BackendServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendServeService = TestBed.get(BackendServeService);
    expect(service).toBeTruthy();
  });
});
