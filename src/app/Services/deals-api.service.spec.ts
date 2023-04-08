import { TestBed } from '@angular/core/testing';

import { DealsAPIService } from './deals-api.service';

describe('DealsAPIService', () => {
  let service: DealsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
