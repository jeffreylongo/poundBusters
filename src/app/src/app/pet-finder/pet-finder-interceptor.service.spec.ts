import { TestBed } from '@angular/core/testing';

import { PetFinderInterceptorService } from './pet-finder-interceptor.service';

describe('PetFinderInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetFinderInterceptorService = TestBed.get(PetFinderInterceptorService);
    expect(service).toBeTruthy();
  });
});
