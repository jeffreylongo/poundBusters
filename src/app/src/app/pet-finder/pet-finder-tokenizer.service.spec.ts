import { TestBed } from '@angular/core/testing';

import { PetFinderTokenizerService } from './pet-finder-tokenizer.service';

describe('PetFinderTokenizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetFinderTokenizerService = TestBed.get(PetFinderTokenizerService);
    expect(service).toBeTruthy();
  });
});
