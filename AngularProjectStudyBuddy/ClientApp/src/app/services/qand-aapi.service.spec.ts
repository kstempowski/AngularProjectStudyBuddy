import { TestBed } from '@angular/core/testing';

import { QandAApiService } from './qand-aapi.service';

describe('QandAApiService', () => {
  let service: QandAApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(QandAApiService);
  });

  it('should be created', () => {
    const service: QandAApiService = TestBed.get(QandAApiService);
    expect(service).toBeTruthy();
  });
});
