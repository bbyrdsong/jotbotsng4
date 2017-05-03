import { TestBed, inject } from '@angular/core/testing';

import { QuickNoteRepositoryService } from './quick-note-repository.service';

describe('QuickNoteRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickNoteRepositoryService]
    });
  });

  it('should ...', inject([QuickNoteRepositoryService], (service: QuickNoteRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
