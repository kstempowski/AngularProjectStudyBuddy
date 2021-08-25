import { TestBed } from '@angular/core/testing';

import { FavoritesAPIService } from './favorites-api.service';

describe('FavoritesAPIService', () => {
  let service: FavoritesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // service = TestBed.inject(FavoritesAPIService);
  });

  it('should be created', () => {
    const service: FavoritesAPIService = TestBed.get(FavoritesAPIService);
    expect(service).toBeTruthy();
  });
});
