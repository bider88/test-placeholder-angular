import { TestBed } from '@angular/core/testing';

import { SearchResolveService } from './search-resolve.service';

describe('SearchResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchResolveService = TestBed.get(SearchResolveService);
    expect(service).toBeTruthy();
  });
});
