import { TestBed } from '@angular/core/testing';

import { MdReadService } from './md-read.service';

describe('MdReadService', () => {
  let service: MdReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
