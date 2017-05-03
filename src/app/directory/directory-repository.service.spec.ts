import { TestBed, inject } from '@angular/core/testing';

import { DirectoryRepositoryService } from './directory-repository.service';

describe('DirectoryRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectoryRepositoryService]
    });
  });

  it('should ...', inject([DirectoryRepositoryService], (service: DirectoryRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
