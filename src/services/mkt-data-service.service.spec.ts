import { TestBed } from '@angular/core/testing';

import { MktDataServiceService } from './mkt-data-service.service';

describe('MktDataServiceService', () => {
  let service: MktDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MktDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
