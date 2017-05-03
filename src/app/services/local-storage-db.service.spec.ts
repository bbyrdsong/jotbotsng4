import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageDbService } from './local-storage-db.service';

describe('LocalStorageDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageDbService]
    });
  });

  it('should ...', inject([LocalStorageDbService], (service: LocalStorageDbService) => {
    expect(service).toBeTruthy();
  }));
});
