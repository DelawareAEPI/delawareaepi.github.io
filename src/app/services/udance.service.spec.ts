import { TestBed } from '@angular/core/testing';

import { UdanceService } from './udance.service';

describe('UdanceService', () => {
  let service: UdanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UdanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
