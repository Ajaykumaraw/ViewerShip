import { TestBed } from '@angular/core/testing';

import { GetChannelService } from './get-channel.service';

describe('GetChannelService', () => {
  let service: GetChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
