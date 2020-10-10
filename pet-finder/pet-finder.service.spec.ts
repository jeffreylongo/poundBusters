import { TestBed } from '@angular/core/testing';

import { PetFinderService } from './pet-finder.service';

describe('PetFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetFinderService = TestBed.get(PetFinderService);
    expect(service).toBeTruthy();
  });
});
